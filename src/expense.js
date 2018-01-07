"use strict"

const Teamwork = require('./teamwork')

class Expense extends Teamwork {

    /**
     * Get invoices or invoice
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(qs = {}, expense_id) {
        return this.query({
            uri: !expense_id ? '/expenses.json' : `/expenses/${expense_id}.json`,
            qs
        })
    }

    /**
     * Create an expense
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/expenses.json',
            body
        })
    }

    /**
     * Update an expense
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(expense_id, body = {}, qs = {}) {
        if (!expense_id) {
            return this.handleError('No Expense id')
        }

        return this.query({
            method: 'PUT',
            uri: `/expenses/${expense_id}.json`,
            qs,
            body
        })
    }

    /**
     * Delete an expense
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(expense_id) {
        if (!expense_id) {
            return this.handleError('No Expense id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/expenses/${expense_id}.json`
        })
    }

}

module.exports = Expense