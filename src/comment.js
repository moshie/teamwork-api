"use strict"

const Teamwork = require('./teamwork')

class Comment extends Teamwork {

    /**
     * Retrieving a Specific Comment
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(comment_id) {
        if (!comment_id) {
            return this.handleError('No Comment id')
        }

        return this.query({
            uri: `/comments/${comment_id}.json`
        })
    }

    /**
     * Update a Comment
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(comment_id, body = {}) {
        if (!comment_id) {
            return this.handleError('No Comment id')
        }

        return this.query({
            method: 'PUT',
            uri: `/comments/${comment_id}.json`,
            body
        })
    }

    /**
     * Delete Comment
     * 
     * @param  {String}
     * @return {Promise}
     */
    delete(comment_id) {
        if (!comment_id) {
            return this.handleError('No Comment id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/comments/${comment_id}.json`
        })
    }

    /**
     * Mark Comment as read
     * 
     * @param  {Number}
     * @return {Promise}
     */
    read(comment_id) {
        if (!comment_id) {
            return this.handleError('No Comment id')
        }

        return this.query({
            method: 'PUT',
            uri: `/comments/${comment_id}/markread.json`
        })
    }

}

module.exports = Comment