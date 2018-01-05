"use strict"

const Teamwork = require('./teamwork')

class Company extends Teamwork {

    /**
     * Create a company
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(company_object = {}) {
        if (!Object.keys(company_object).length) {
            this.handleError('No company object provided')
        }

        return this.query({
            method: 'POST',
            path: '/companies.json'
        }, company_object)
    }

    /**
     * Update Company
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(company_id, company_object = {}) {
        if (!company_id || !Object.keys(company_object).length) {
            return this.handleError('No Company id or company request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/companies/${company_id}.json`
        }, company_object)
    }

    /**
     * Delete a Company
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(company_id) {
        if (!company_id) {
            return this.handleError('No company id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/companies/${company_id}.json`
        })
    }

    /**
     * Get Companies or a Company
     * 
     * @param  {String}
     * @return {Promise}
     */
    get(company_id = '') {
        path = !company_id ? 
            '/companies.json' : 
            `/companies/${company_id}.json`

        return this.query({
            path
        })
    }

    /**
     * Get People from a company
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getPeople(company_id) {
        if (!company_id) {
            return this.handleError('No company id provided')
        }

        return this.query({
            path: `/companies/${company_id}/people.json`
        })
    }

}

module.exports = Company