const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Responses

// Requests

describe('#Invoice', function () {

    it('GET /invoices.json')

    it('GET /invoices/{invoice_id}.json')

    it('POST /invoices.json')

    it('PUT /invoices/{invoice_id}.json')

    it('DELETE /invoices/{invoice_id}.json')

    it('PUT /invoices/{invoice_id}/complete.json')

    it('PUT /invoices/{invoice_id}/uncomplete.json')

    it('GET /currencycodes.json')

    it('PUT /invoices/{invoice_id}/lineitems.json') // Expense

    it('PUT /invoices/{invoice_id}/lineitems.json') // Time

})