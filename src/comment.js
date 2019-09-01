'use strict'

const Teamwork = require('./teamwork')

class Comment extends Teamwork {

    /**
     * Retrieving a Specific Comment
     * 
     * @method GET
     * @uri /comments/{comment_id}.json
     * @url https://developer.teamwork.com/projects/comments/retrieving-a-specific-comment
     * @example tw.comments.get(comment_id)
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
     * @method PUT
     * @uri /comments/{comment_id}.json
     * @url https://developer.teamwork.com/projects/comments/updating-a-comment
     * @example tw.comments.update(comment_id, body)
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
     * @method DELETE
     * @uri /comments/{comment_id}.json
     * @url https://developer.teamwork.com/projects/comments/deleting-a-comment
     * @example tw.comments.delete(comment_id)
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
     * @method PUT
     * @uri /comments/{comment_id}/markread.json
     * @url https://developer.teamwork.com/projects/comments/mark-a-comment-as-read
     * @example tw.comments.read(comment_id)
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