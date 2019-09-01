'use strict'

const Teamwork = require('./teamwork')

class Message extends Teamwork {

    /**
     * Get a Message
     * 
     * @method GET
     * @uri /posts/{message_id}.json
     * @url https://developer.teamwork.com/projects/messages/retrieve-a-single-message
     * @example tw.messages.get(message_id)
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
     * @method PUT
     * @uri /posts/{message_id}.json
     * @url https://developer.teamwork.com/projects/messages/update-message
     * @example tw.messages.update(message_id, body)
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
     * @method PUT
     * @uri /messages/{message_id}/archive.json
     * @url https://developer.teamwork.com/projects/messages/archive-a-message
     * @example tw.messages.archive(message_id)
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
     * @method PUT
     * @uri /messages/{message_id}/unarchive.json
     * @url https://developer.teamwork.com/projects/messages/un-archive-a-message
     * @example tw.messages.unArchive(message_id)
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
     * @method DELETE
     * @uri /posts/{message_id}.json
     * @url https://developer.teamwork.com/projects/messages/delete-message
     * @example tw.messages.delete(message_id)
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
     * @method PUT
     * @uri /messages/{message_id}/markread.json
     * @url https://developer.teamwork.com/projects/messages/mark-message-as-read
     * @example tw.messages.read(message_id)
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
     * @method POST
     * @uri /messages/{message_id}/messageReplies.json
     * @url https://developer.teamwork.com/projects/message-replies/create-a-message-reply
     * @example tw.messages.createReply(message_id, body)
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
     * @method GET
     * @uri /messageReplies/${message_id}.json
     * @url https://developer.teamwork.com/projects/message-replies/retrieve-a-single-message-reply
     * @example tw.messages.getReply(message_id)
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
     * @method GET
     * @uri /messages/{message_id}/replies.json
     * @url https://developer.teamwork.com/projects/message-replies/retrieve-replies-to-a-message
     * @example tw.messages.getReplies(message_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getReplies(message_id, qs = {}) {
        if (!message_id) {
            return this.handleError('No Message id')
        }

        return this.query({
            uri: `/messages/${message_id}/replies.json`,
            qs
        })
    }

    /**
     * Update a Message Reply
     * 
     * @method PUT
     * @uri /messageReplies/{message_id}.json
     * @url https://developer.teamwork.com/projects/message-replies/update-message-reply
     * @example tw.messages.updateReply(message_id, body)
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
     * @method DELETE
     * @uri /messageReplies/{message_id}.json
     * @url https://developer.teamwork.com/projects/message-replies/delete-message-reply
     * @example tw.messages.deleteReply(message_id)
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
     * @method PUT
     * @uri /messageReplies/{message_id}/markread.json
     * @url https://developer.teamwork.com/projects/message-replies/mark-message-reply-as-read
     * @example tw.messages.readReply(message_id)
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
     * @method GET
     * @uri /messages/{message_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.messages.getTags(message_id, query_string)
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
     * @method PUT
     * @uri /messages/{message_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.messages.updateTag(message_id, body)
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