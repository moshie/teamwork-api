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
    get(options = {}, expense_id = '') {
        path = !expense_id ? 
            this.params('/expenses.json', options) : 
            this.params(`/expenses/${expense_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Create an expense
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(expense_object = {}) {
        if (!Object.keys(expense_object).length) {
            return this.handleError('Expense request object is required')
        }

        return this.query({
            method: 'POST',
            path: '/expenses.json'
        }, expense_object)
    }

    /**
     * Update an expense
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(expense_id, expense_object = {}, options = {}) {
        if (!expense_id || !Object.keys(expense_object).length) {
            return this.handleError('No expense id or Expense request object provided')
        }

        return this.query({
            method: 'PUT',
            path: this.params(`/expenses/${expense_id}.json`, options)
        }, expense_object)
    }

    /**
     * Delete an expense
     * 
     * @param  {String}
     * @return {Promise}
     */
    delete(expense_id = '') {
        if (!expense_id) {
            return this.handleError('No expense id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/expenses/${expense_id}.json`
        })
    }

}

module.exports = Expense