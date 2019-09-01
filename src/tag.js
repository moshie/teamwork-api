'use strict'

const Teamwork = require('./teamwork')

class Tag extends Teamwork {

    /**
     * Get tags or tag
     * 
     * @method GET
     * @uri /tags.json | /tags/{tag_id}.json
     * @url https://developer.teamwork.com/projects/people-status/delete-user-status
     * @example tw.tags.get(query_string, tag_id)
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
     * @method POST
     * @uri /tags.json
     * @url https://developer.teamwork.com/projects/tags/create-a-single-tag
     * @example tw.tags.create(body)
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
     * @method PUT
     * @uri /tags/${tag_id}.json
     * @url https://developer.teamwork.com/projects/tags/update-a-single-tag
     * @example tw.tags.update(tag_id, body)
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
     * @method DELETE
     * @uri /tags/${tag_id}.json
     * @url https://developer.teamwork.com/projects/tags/delete-a-single-tag
     * @example tw.tags.delete(tag_id)
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