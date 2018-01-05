"use strict"

const Teamwork = require('./teamwork')

class Tag extends Teamwork {

    /**
     * Get tags or tag
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(options = {}, tag_id) {
        const path = !expense_id ? 
            '/tags.json' : 
            `/tags/${tag_id}.json`

        return this.query({
            path
        })
    }

    /**
     * Create a tag
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(tag_object = {}) {
        if (!Object.keys(tag_object).length) {
            return this.handleError('Tag request object is required')
        }

        return this.query({
            method: 'POST',
            path: '/tags.json'
        }, tag_object)
    }

    /**
     * Update a tag
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(tag_id, tag_object = {}) {
        if (!tag_id || !Object.keys(tag_object).length) {
            return this.handleError('No tag id or tag request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tags/${tag_id}.json`
        }, tag_object)
    }

    /**
     * Delete a tag
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(tag_id) {
        if (!tag_id) {
            return this.handleError('No tag id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/tags/${tag_id}.json`
        })
    }

}

module.exports = Tag