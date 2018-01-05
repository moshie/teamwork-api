"use strict"

const Teamwork = require('./teamwork')

class Message extends Teamwork {

    /**
     * Get a Message
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            path: `/posts/${message_id}.json`
        })
    }

    /**
     * Update a Message
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(message_id, message_object = {}) {
        if (!message_id || !Object.keys(message_object).length) {
            return this.handleError('No message id or message request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/posts/${message_id}.json`
        }, message_object)
    }

    /**
     * Archive a Message
     * 
     * @param  {Number}
     * @return {Promise}
     */
    archive(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/messages/${message_id}/archive.json`
        })
    }

    /**
     * Unarchive a message
     * 
     * @param  {Number}
     * @return {Promise}
     */
    unArchive(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/messages/${message_id}/unarchive.json`
        })
    }

    /**
     * Delete a Message
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/posts/${message_id}.json`
        })
    }

    /**
     * Mark a Message as Read
     * 
     * @param  {Number}
     * @return {Promise}
     */
    read(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/messages/${message_id}/markread.json`
        })
    }

    /**
     * Create a Message Reply 
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createReply(message_id, message_object = {}) {
        if (!message_id || !Object.keys(message_object).length) {
            return this.handleError('No message id or message request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/messages/${message_id}/messageReplies.json`
        }, message_object)
    }

    /**
     * Get a Message Reply
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getReply(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            path: `/messageReplies/${message_id}.json`
        })
    }

    /**
     * Get Replies from a Message
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getReplies(message_id, options = {}) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            path: `/messages/${message_id}/replies.json`
        })
    }

    /**
     * Update a Message Reply
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateReply(message_id, message_object = {}) {
        if (!message_id || !Object.keys(message_object).length) {
            return this.handleError('No message id or message request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/messageReplies/${message_id}.json`
        }, message_object)
    }

    /**
     * Delete a Reply
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteReply(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/messageReplies/${message_id}.json`
        })
    }

    /**
     * Mark Reply as Read
     * 
     * @param  {Number}
     * @return {Promise}
     */
    readReply(message_id) {
        if (!message_id) {
            return this.handleError('No message id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/messageReplies/${message_id}/markread.json`
        })
    }

}

module.exports = Message