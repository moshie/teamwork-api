'use strict'

const Teamwork = require('./teamwork')

class Tag extends Teamwork {

    /**
     * Get tags or tag
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, tag_id) {
        return this.query({
            uri: !tag_id ? 
                '/tags.json' : 
                `/tags/${tag_id}.json`,
            qs
        })
    }

    /**
     * Create a tag
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/tags.json',
            body
        })
    }

    /**
     * Update a tag
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(tag_id, body = {}) {
        if (!tag_id) {
            return this.handleError('No Tag id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tags/${tag_id}.json`,
            body
        })
    }

    /**
     * Delete a tag
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(tag_id) {
        if (!tag_id) {
            return this.handleError('No Tag id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/tags/${tag_id}.json`
        })
    }

}

module.exports = Tag