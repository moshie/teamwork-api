"use strict"

const Teamwork = require('./teamwork')

class Invoice extends Teamwork {

    /**
     * Get invoices or invoice
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(options = {}, invoice_id = '') {
        const path = !invoice_id ? 
            this.params('/invoices.json', options) : 
            this.params(`/invoices/${invoice_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Create an invoice
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(invoice_object = {}) {
        if (!Object.keys(invoice_object).length) {
            return this.handleError('Invoice request object is required')
        }

        return this.query({
            method: 'POST',
            path: '/invoices.json'
        }, invoice_object)
    }

    /**
     * Update an invoice
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(invoice_id, invoice_object = {}) {
        if (!invoice_id || !Object.keys(invoice_object).length) {
            return this.handleError('No invoice id or Invoice request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/invoices/${invoice_id}.json`
        }, invoice_object)
    }

    /**
     * Delete an invoice
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(invoice_id) {
        if (!invoice_id) {
            return this.handleError('No invoice id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/invoices/${invoice_id}.json`
        })
    }

    /**
     * Mark invoice as complete
     * 
     * @param  {Number}
     * @return {Promise}
     */
    complete(invoice_id) {
        if (!invoice_id) {
            return this.handleError('No invoice id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/invoices/${invoice_id}/complete.json`
        })
    }

    /**
     * Mark invoice as incomplete
     * 
     * @param  {String}
     * @return {Promise}
     */
    incomplete(invoice_id) {
        if (!invoice_id) {
            return this.handleError('No invoice id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/invoices/${invoice_id}/uncomplete.json`
        })
    }

    /**
     * Get the Currency Codes
     * 
     * @return {Promise}
     */
    currencyCodes() {
        return this.query({
            path: '/currencycodes.json'
        })
    }

    /**
     * Create expense on an Invoice
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createExpense(invoice_id, expense_object = {}) {
        if (!invoice_id || !Object.keys(expense_object).length) {
            return this.handleError('No invoice id or Expense request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/invoices/${invoice_id}/lineitems.json`
        }, expense_object)
    }

    /**
     * Create time on an Invoice
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createTime(invoice_id, time_object = {}) {
        if (!invoice_id || !Object.keys(time_object).length) {
            return this.handleError('No invoice id or Time request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/invoices/${invoice_id}/lineitems.json`
        }, time_object)
    }

}

module.exports = Invoice