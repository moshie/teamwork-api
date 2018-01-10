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
        return this.query({
            uri: !link_id ? '/links.json' : `/links/${link_id}.json`
        })
    }

    /**
     * Create a link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/links.json`,
            body
        })
    }

    /**
     * Update a link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(link_id, body = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'PUT',
            uri: `/links/${link_id}.json`,
            body
        })
    }

    /**
     * Delete a Link
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(link_id) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/links/${link_id}.json`
        })
    }

    /**
     * Get Comments for a Link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getComments(link_id, qs = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            uri: `/links/${link_id}/comments.json`,
            qs
        })
    }

    /**
     * Create a Comment for a Link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createComment(link_id, body = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'POST',
            uri: `/links/${link_id}/comments.json`,
            body
        })
    }

}

module.exports = Link