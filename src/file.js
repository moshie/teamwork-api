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
            return this.handleError('No activity id provided')
        }

        return this.query({
            path: `/files/${file_id}.json`
        })
    }

    /**
     * Create a File Version
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    version(file_id, file_object = {}) {
        if (!file_id || !Object.keys(file_object).length) {
            return this.handleError('No file id or File request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/files/${file_id}.json`
        }, file_object)
    }

    /**
     * Delete a File
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(file_id) {
        if (!file_id) {
            return this.handleError('No activity id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/files/${id}.json`
        })
    }

    /**
     * Get a File share link
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    link(file_id, options = {}) {
        if (!file_id) {
            return this.handleError('No activity id provided')
        }

        return this.query({
            path: this.params(`/files/${file_id}/sharedlink.json`, options)
        })
    }

    /**
     * Copy File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    copy(file_id, file_object = {}) {
        if (!file_id || !Object.keys(file_object).length) {
            return this.handleError('No file id or File request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/files/${file_id}/copy.json`
        }, file_object)
    }

    /**
     * Move File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    move(file_id, file_object = {}) {
        if (!file_id || !Object.keys(file_object).length) {
            return this.handleError('No file id or File request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/files/${file_id}/move.json`
        }, file_object)
    }

    /**
     * @param  {String}
     * @return {Promise}
     */
    upload(file_path = '') {
        // TODO?
        return this.query({
            path: '/pendingfiles.json'
        }, file_path)
    }
}

module.exports = File