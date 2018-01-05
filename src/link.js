"use strict"

const Teamwork = require('./teamwork')

class Link extends Teamwork {

    /**
     * Get links or link
     * 
     * @param  {String}
     * @return {Promise}
     */
    get(link_id) {
        path = !link_id ? 
            '/links.json' : 
            `/links/${link_id}.json`

        return this.query({
            path
        })
    }

    /**
     * Create a link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, link_object = {}) {
        if (!project_id || !Object.keys(link_object).length) {
            return this.handleError('No project id or link request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/links.json`
        }, link_object)
    }

    /**
     * Update a link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(link_id, link_object = {}) {
        if (!link_id || !Object.keys(link_object).length) {
            return this.handleError('No link id or link request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/links/${link_id}.json`
        }, link_object)
    }

    /**
     * Delete a Link
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(link_id) {
        if (!link_id) {
            return this.handleError('No link id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/links/${link_id}.json`
        })
    }

}

module.exports = Link