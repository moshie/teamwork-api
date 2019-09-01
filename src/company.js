'use strict'

const Teamwork = require('./teamwork')

class Company extends Teamwork {

    /**
     * Create a company
     * 
     * @method POST
     * @uri /companies.json
     * @url https://developer.teamwork.com/projects/companies/create-a-company
     * @example tw.companies.create(body)
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
     * @method PUT
     * @uri /companies/{company_id}.json
     * @url https://developer.teamwork.com/projects/companies/update-a-company
     * @example tw.companies.update(company_id, body)
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
     * @method DELETE
     * @uri /companies/{company_id}.json
     * @url https://developer.teamwork.com/projects/companies/delete-a-company
     * @example tw.companies.delete(company_id)
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
     * @method GET
     * @uri /companies.json | /companies/{company_id}.json
     * @url https://developer.teamwork.com/projects/companies/retrieve-companies
     * @example tw.companies.get(company_id)
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
     * @method GET
     * @uri /companies/{company_id}/people.json
     * @url https://developer.teamwork.com/projects/people/get-people-within-a-company
     * @example tw.companies.getPeople(company_id)
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
     * @method GET
     * @uri /companies/{company_id}/projects.json
     * @url https://developer.teamwork.com/projects/projects/retrieve-projects-assigned-to-a-specific-company
     * @example tw.companies.getProjects(company_id)
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
     * @method GET
     * @uri /companys/{company_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.companies.getTags(company_id, query_string)
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
     * @method PUT
     * @uri /companys/{company_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.companies.updateTag(company_id, body)
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
            uri: `/companys/${company_id}/tags.json`,
            body
        })
    }

}

module.exports = Company