const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Mocked Data
const accountJson = require('./mocked-responses/account')
const authJson = require('./mocked-responses/authenticate')
const searchJson = require('./mocked-responses/search')

describe('#Base', function () {

    it('GET /account', function () {
        nock(host)
            .get('/account.json')
            .reply(200, accountJson)

        let promise = tw.account()

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('account').that.is.an('object'),
            promise.should.eventually.have.deep.property('account', accountJson.account)
        ])
    })

    it('GET /authenticate', function () {
        nock('https://authenticate.teamwork.com')
            .get('/authenticate.json')
            .reply(200, authJson)

            let promise = tw.authenticate()

            return Promise.all([
                promise.should.eventually.be.an('object'),
                promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
                promise.should.eventually.have.property('account').that.is.an('object'),
                promise.should.eventually.have.deep.property('account', authJson.account)
            ])
    })

    it('GET /search', function () {
        nock(host)
            .get('/search.json?searchFor=tasks&searchTerm=Genesis')
            .reply(200, searchJson)

        let promise = tw.search({
            searchFor: 'tasks',
            searchTerm: 'Genesis'
        })

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('searchResult').that.is.an('object'),
            promise.should.eventually.have.deep.property('searchResult', searchJson.searchResult)
        ])
    })

})