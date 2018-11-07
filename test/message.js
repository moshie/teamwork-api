const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Responses

// Requests

describe('#Message', function () {

    it('GET /posts/{message_id}.json')

    it('PUT /posts/{message_id}.json')

    it('PUT /messages/{message_id}/archive.json')

    it('PUT /messages/{message_id}/unarchive.json')

    it('DELETE /posts/{message_id}.json')

    it('PUT /messages/{message_id}/markread.json')

    it('POST /messages/{message_id}/messageReplies.json')

    it('GET /messageReplies/{message_id}.json')

    it('GET /messageReplies/{message_id}/replies.json')

    it('PUT /messageReplies/{message_id}.json')

    it('DELETE /messageReplies/{message_id}.json')

    it('PUT /messageReplies/{message_id}/markread.json')

    it('GET /messages/{message_id}/tags.json')

    it('PUT /messages/{message_id}/tags.json')

})