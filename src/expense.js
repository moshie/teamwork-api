'use strict'

const Teamwork = require('./teamwork')

class Expense extends Teamwork {

    /**
     * Get invoices or invoice
     * 
     * @method GET
     * @uri /expenses.json | /expenses/{expense_id}.json
     * @url https://developer.teamwork.com/projects/expenses/get-all-expenses-across-your-projects
     * @example tw.expenses.get(expense_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(expense_id) {
        return this.query({
            uri: !expense_id ? '/expenses.json' : `/expenses/${expense_id}.json`
        })
    }

    /**
     * Create an expense
     * 
     * @method POST
     * @uri /expenses.json
     * @url https://developer.teamwork.com/projects/expenses/create-a-new-expense-in-a-project
     * @example tw.expenses.create(body)
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
     * @method PUT
     * @uri /expenses/{expense_id}.json
     * @url https://developer.teamwork.com/projects/expenses/update-a-single-expense
     * @example tw.expenses.update(expense_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(expense_id, body = {}) {
        if (!expense_id) {
            return this.handleError('No Expense id')
        }

        return this.query({
            method: 'PUT',
            uri: `/expenses/${expense_id}.json`,
            body
        })
    }

    /**
     * Delete an expense
     * 
     * @method DELETE
     * @uri /expenses/{expense_id}.json
     * @url https://developer.teamwork.com/projects/expenses/delete-a-single-expense
     * @example tw.expenses.delete(expense_id)
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