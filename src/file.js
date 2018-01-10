"use strict"

const Teamwork = require('./teamwork')

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
            uri: `/files/${id}.json`
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
     * @param  {String}
     * @return {Promise}
     */
    upload(file_path = '') {
        // TODO?
        return this.query({
            uri: '/pendingfiles.json'
        }, file_path)
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

}

module.exports = File