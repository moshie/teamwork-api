const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Responses
const Comment = require('./mocked-responses/comments_get')
const teamwork_default = require('./mocked-responses/status-ok')

// Requests
const UpdateComment = require('./mocked-requests/comments_PUT_Comment')

describe('#Comment', function () {

    it('GET /comments/{comment_id}.json', function () {
        nock(host)
            .get('/comments/12345.json')
            .reply(200, Comment)

        let promise = tw.comments.get(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('comment').that.is.an('object'),
            promise.should.eventually.have.deep.property('comment', Comment.comment)
        ])
    })

    it('PUT /comments/{comment_id}.json', function () {
        nock(host)
            .put('/comments/12345.json', UpdateComment)
            .reply(200, teamwork_default)

        let promise = tw.comments.update(12345, UpdateComment)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('DELETE /comments/{comment_id}.json', function () {
        nock(host)
            .delete('/comments/12345.json')
            .reply(200, teamwork_default)

        let promise = tw.comments.delete(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('PUT /comments/{comment_id}/markread.json', function () {
        nock(host)
            .put('/comments/12345/markread.json')
            .reply(200, teamwork_default)

        let promise = tw.comments.read(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

})