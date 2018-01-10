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
            return this.handleError('No Message id')
        }

        return this.query({
            uri: `/posts/${message_id}.json`
        })
    }

    /**
     * Update a Message
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(message_id, body = {}) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/posts/${message_id}.json`,
            body
        })
    }

    /**
     * Archive a Message
     * 
     * @param  {Number}
     * @return {Promise}
     */
    archive(message_id) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/messages/${message_id}/archive.json`
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
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/messages/${message_id}/unarchive.json`
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
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/posts/${message_id}.json`
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
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/messages/${message_id}/markread.json`
        })
    }

    /**
     * Create a Message Reply 
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createReply(message_id, body = {}) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'POST',
            uri: `/messages/${message_id}/messageReplies.json`,
            body
        })
    }

    /**
     * Get a Message Reply
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getReply(message_id) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            uri: `/messageReplies/${message_id}.json`
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
            return this.handleError('No Message id')
        }

        return this.query({
            uri: `/messages/${message_id}/replies.json`
        })
    }

    /**
     * Update a Message Reply
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateReply(message_id, body = {}) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/messageReplies/${message_id}.json`,
            body
        })
    }

    /**
     * Delete a Reply
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteReply(message_id) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/messageReplies/${message_id}.json`
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
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/messageReplies/${message_id}/markread.json`
        })
    }

    /**
     * Get Tags from a Message
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(message_id, qs = {}) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            uri: `/messages/${message_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Message
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(message_id, body = {}) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            method: 'PUT',
            uri: `/messages/${message_id}/tags.json`,
            body
        })
    }

}

module.exports = Message