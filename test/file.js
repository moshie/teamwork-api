const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Responses

// Requests

describe('#File', function () {

    it('GET /files/{file_id}.json')

    it('POST /files/{file_id}.json')

    it('DELETE /files/{file_id}.json')

    it('GET /files/{file_id}/sharedlink.json')

    it('PUT /files/{file_id}/copy.json')

    it('PUT /files/{file_id}/move.json')

    it('POST /pendingfiles.json')

    it('GET /files/{file_id}/comments.json')

    it('POST /files/{file_id}/comments.json')

    it('GET /files/{file_id}/tags.json')

    it('PUT /files/{file_id}/tags.json')

})