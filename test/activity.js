const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Mocked Data
const latestActivityJson = require('./mocked-responses/latestActivity')
const projectActivityJson = require('./mocked-responses/projectActivity')
const deleteActivityJson = require('./mocked-responses/deleteActivity')

describe('#Activity', function () {

    it('GET /latestActivity', function () {
        nock(host)
            .get('/latestActivity.json')
            .reply(200, latestActivityJson)

        let promise = tw.activity.latest()

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('activity').that.is.an('array'),
            promise.should.eventually.have.deep.property('activity', latestActivityJson.activity)
        ])
    })

    it('GET /projects/{project_id}/latestActivity.json', function () {
        nock(host)
            .get('/projects/12345/latestActivity.json')
            .reply(200, projectActivityJson)

        let promise = tw.projects.getActivity(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('activity').that.is.an('array'),
            promise.should.eventually.have.deep.property('activity', projectActivityJson.activity)
        ])

    })

    it('DELETE /activity/{activity_id}.json', function () {
        nock(host)
            .delete('/activity/12345.json')
            .reply(200, latestActivityJson)

        let promise = tw.activity.delete(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

})