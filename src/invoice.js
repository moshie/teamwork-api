'use strict'

const Teamwork = require('./teamwork')

class Invoice extends Teamwork {

    /**
     * Get invoices or invoice
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
     * @return {Promise}
     */
    currencyCodes() {
        return this.query({
            uri: '/currencycodes.json'
        })
    }

    /**
     * Create expense on an Invoice
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