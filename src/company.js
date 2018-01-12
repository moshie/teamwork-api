'use strict'

const Teamwork = require('./teamwork')

class Company extends Teamwork {

    /**
     * Create a company
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/companies.json',
            body
        })
    }

    /**
     * Update Company
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(company_id, body = {}) {
        if (!company_id) {
            return this.handleError('No Company id')
        }

        return this.query({
            method: 'PUT',
            uri: `/companies/${company_id}.json`,
            body
        })
    }

    /**
     * Delete a Company
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(company_id) {
        if (!company_id) {
            return this.handleError('No Company id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/companies/${company_id}.json`
        })
    }

    /**
     * Get Companies or a Company
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(company_id) {
        return this.query({
            uri: !company_id ? '/companies.json' : `/companies/${company_id}.json`
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
            return this.handleError('No Company id')
        }

        return this.query({
            uri: `/companies/${company_id}/people.json`
        })
    }

    /**
     * Get Projects from a company
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getProjects(company_id) {
        if (!company_id) {
            return this.handleError('No Company id')
        }

        return this.query({
            uri: `/companies/${company_id}/projects.json`
        })
    }

    /**
     * Get Tags from a Company
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(company_id, qs = {}) {
        if (!company_id) {
            return this.handleError('No Company id')
        }

        return this.query({
            uri: `/companys/${company_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Company
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(company_id, body = {}) {
        if (!company_id) {
            return this.handleError('No Company id')
        }

        return this.query({
            method: 'PUT',
            uri: `/users/${company_id}/tags.json`,
            body
        })
    }

}

module.exports = Company