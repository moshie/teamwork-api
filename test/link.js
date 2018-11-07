const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Responses

// Requests

describe('#Links', function () {

    it('GET /links.json')

    it('GET /links/{link_id}.json')

    it('POST /projects/{project_id}/links.json')

    it('PUT /links/{link_id}.json')

    it('DELETE /links/{link_id}.json')

    it('GET /links/{link_id}/comments.json')

    it('POST /links/{link_id}/comments.json')

    it('GET /links/{link_id}/tags.json')

    it('PUT /links/{link_id}/tags.json')

})