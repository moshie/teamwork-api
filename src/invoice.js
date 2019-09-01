'use strict'

const Teamwork = require('./teamwork')

class Invoice extends Teamwork {

    /**
     * Get invoices or invoice
     * 
     * @method GET
     * @uri /invoices.json | /invoices/{invoice_id}.json
     * @url https://developer.teamwork.com/projects/invoices/get-all-invoices-across-your-projects
     * @example tw.invoices.get(query_string, invoice_id)
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, invoice_id) {
        return this.query({
            uri: !invoice_id ? '/invoices.json' : `/invoices/${invoice_id}.json`,
            qs
        })
    }

    /**
     * Create an invoice
     * 
     * @method POST
     * @uri /invoices.json
     * @url https://developer.teamwork.com/projects/invoices/create-a-new-invoice-in-a-project
     * @example tw.invoices.create(body)
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/invoices.json',
            body
        })
    }

    /**
     * Update an invoice
     * 
     * @method PUT
     * @uri /invoices/{invoice_id}.json
     * @url https://developer.teamwork.com/projects/invoices/update-a-specific-invoice
     * @example tw.invoices.update(invoice_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(invoice_id, body) {
        if (!invoice_id) {
            return this.handleError('No Invoice id')
        }

        return this.query({
            method: 'PUT',
            uri: `/invoices/${invoice_id}.json`,
            body
        })
    }

    /**
     * Delete an invoice
     * 
     * @method DELETE
     * @uri /invoices/{invoice_id}.json
     * @url https://developer.teamwork.com/projects/invoices/delete-a-specific-invoice
     * @example tw.invoices.delete(invoice_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(invoice_id) {
        if (!invoice_id) {
            return this.handleError('No Invoice id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/invoices/${invoice_id}.json`
        })
    }

    /**
     * Mark invoice as complete
     * 
     * @method PUT
     * @uri /invoices/{invoice_id}/complete.json
     * @url https://developer.teamwork.com/projects/invoices/mark-a-specific-invoice-as-complete
     * @example tw.invoices.complete(invoice_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    complete(invoice_id) {
        if (!invoice_id) {
            return this.handleError('No Invoice id')
        }

        return this.query({
            method: 'PUT',
            uri: `/invoices/${invoice_id}/complete.json`
        })
    }

    /**
     * Mark invoice as incomplete
     * 
     * @method PUT
     * @uri /invoices/{invoice_id}/uncomplete.json
     * @url https://developer.teamwork.com/projects/invoices/mark-a-specific-invoice-as-not-complete
     * @example tw.invoices.incomplete(invoice_id)
     * 
     * @param  {String}
     * @return {Promise}
     */
    incomplete(invoice_id) {
        if (!invoice_id) {
            return this.handleError('No Invoice id')
        }

        return this.query({
            method: 'PUT',
            uri: `/invoices/${invoice_id}/uncomplete.json`
        })
    }

    /**
     * Get the Currency Codes
     * 
     * @method GET
     * @uri /currencycodes.json
     * @url https://developer.teamwork.com/projects/invoices/get-a-list-of-valid-currency-codes
     * @example tw.invoices.currencyCodes()
     * 
     * @return {Promise}
     */
    currencyCodes() {
        return this.query({
            uri: '/currencycodes.json'
        })
    }

    /**
     * Create Expense Entry on an Invoice
     * 
     * @method PUT
     * @uri /invoices/{invoice_id}/lineitems.json
     * @url https://developer.teamwork.com/projects/expenses/add-an-unbilled-expense-to-an-invoice
     * @example tw.invoices.createExpense(invoice_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createExpense(invoice_id, body = {}) {
        if (!invoice_id) {
            return this.handleError('No Invoice id')
        }

        return this.query({
            method: 'PUT',
            uri: `/invoices/${invoice_id}/lineitems.json`,
            body
        })
    }

    /**
     * Create time on an Invoice
     * 
     * @method PUT
     * @uri /invoices/{invoice_id}/lineitems.json
     * @url https://developer.teamwork.com/projects/invoices/add-a-time-entry-to-an-invoice
     * @example tw.invoices.createExpense(invoice_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createTime(invoice_id, body = {}) {
        if (!invoice_id) {
            return this.handleError('No Invoice id')
        }

        return this.query({
            method: 'PUT',
            uri: `/invoices/${invoice_id}/lineitems.json`,
            body
        })
    }

}

module.exports = Invoice