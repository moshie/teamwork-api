'use strict'

const Teamwork = require('./teamwork')
const fs = require('fs')

class File extends Teamwork {

    /**
     * Get a File
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(file_id) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            uri: `/files/${file_id}.json`
        })
    }

    /**
     * Create a File Version
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    version(file_id, body = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            method: 'POST',
            uri: `/files/${file_id}.json`,
            body
        })
    }

    /**
     * Delete a File
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(file_id) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/files/${file_id}.json`
        })
    }

    /**
     * Get a File share link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    link(file_id, qs = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            uri: `/files/${file_id}/sharedlink.json`,
            qs
        })
    }

    /**
     * Copy File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    copy(file_id, body = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            method: 'PUT',
            uri: `/files/${file_id}/copy.json`,
            body
        })
    }

    /**
     * Move File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    move(file_id, body = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            method: 'PUT',
            uri: `/files/${file_id}/move.json`,
            body
        })
    }

    /**
     * Upload a file
     * 
     * @param  {String}
     * @return {Promise}
     */
    upload(file) {
        if (!file) {
            return this.handleError('No File path')
        }
        
        return this.query({
            method: 'POST',
            uri: '/pendingfiles.json',
            formData: {
                file: fs.createReadStream(file)
            }
        })
    }

    /**
     * Get Comments for a File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getComments(file_id, qs = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            uri: `/files/${file_id}/comments.json`,
            qs
        })
    }

    /**
     * Create a Comment for a File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createComment(file_id, body = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            method: 'POST',
            uri: `/files/${file_id}/comments.json`,
            body
        })
    }

    /**
     * Get Tags from a File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(file_id, qs = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            uri: `/files/${file_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(file_id, body = {}) {
        if (!file_id) {
            return this.handleError('No File id')
        }

        return this.query({
            method: 'PUT',
            uri: `/files/${file_id}/tags.json`,
            body
        })
    }

}

module.exports = File