'use strict'

const Teamwork = require('./teamwork')
const fs = require('fs')

class File extends Teamwork {

    /**
     * Get a File
     * 
     * @method GET
     * @uri /files/{file_id}.json
     * @url https://developer.teamwork.com/projects/files/get-a-single-file
     * @example tw.files.get(file_id)
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
     * @method POST
     * @uri /files/{file_id}.json
     * @url https://developer.teamwork.com/projects/files/add-a-new-file-version-to-a-file
     * @example tw.files.version(file_id, body)
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
     * @method DELETE
     * @uri /files/{file_id}.json
     * @url https://developer.teamwork.com/projects/files/delete-a-file-from-a-project
     * @example tw.files.delete(file_id)
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
     * @method GET
     * @uri /files/{file_id}/sharedlink.json
     * @url https://developer.teamwork.com/projects/files/get-a-short-url-for-sharing-a-file
     * @example tw.files.link(file_id, query_string)
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
     * @method PUT
     * @uri /files/{file_id}/copy.json
     * @url https://developer.teamwork.com/projects/files/copy-a-file-to-another-project
     * @example tw.files.copy(file_id, body)
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
     * @method PUT
     * @uri /files/{file_id}/move.json
     * @url https://developer.teamwork.com/projects/files/move-a-file-to-another-project
     * @example tw.files.move(file_id, body)
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
     * @method POST
     * @uri /pendingfiles.json
     * @url https://developer.teamwork.com/projects/file-uploading/upload-a-file
     * @example tw.files.upload(file)
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
     * @method GET
     * @uri /files/{file_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types
     * @example tw.files.getComments(file_id, query_string)
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
     * @method POST
     * @uri /files/{file_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/creating-a-comment
     * @example tw.files.createComment(file_id, body)
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
     * @method GET
     * @uri /files/{file_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.files.getTags(file_id, query_string)
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
     * @method PUT
     * @uri /files/{file_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.files.updateTag(file_id, body)
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