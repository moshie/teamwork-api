"use strict"

const Teamwork = require('./teamwork')

class Comment extends Teamwork {

    /**
     * Get a Comment
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(comment_id) {
        if (!comment_id) {
            return this.handleError('No comment id provided')
        }

        return this.query({
            path: `/comments/${comment_id}.json`
        })
    }

    /**
     * Update a Comment
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(comment_id, comment_object = {}) {
        if (!comment_id || !Object.keys(comment_object).length) {
            return this.handleError('No comment id or Comment request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/comments/${comment_id}.json`
        }, comment_object)
    }

    /**
     * Delete Comment
     * 
     * @param  {String}
     * @return {Promise}
     */
    delete(comment_id) {
        if (!comment_id) {
            return this.handleError('No comment id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/comments/${comment_id}.json`
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
            return this.handleError('No comment id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/comments/${comment_id}/markread.json`
        })
    }

}

module.exports = Comment