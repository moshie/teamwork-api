"use strict"

const Teamwork = require('./teamwork')

class Notebook extends Teamwork {

    /**
     * Get Notebooks or Notebook
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, notebook_id) {
        return this.query({
            uri: !notebook_id ? 
                `/notebooks.json` : 
                `/notebooks/${notebook_id}.json`,
            qs
        })
    }

    /**
     * Update a Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(notebook_id, body = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebooks/${notebook_id}.json`,
            body
        })
    }

    /**
     * Lock the notebook for editing
     * 
     * @param  {Number}
     * @return {Promise}
     */
    lock(notebook_id) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebooks/${notebook_id}/lock.json`
        })
    }

    /**
     * Unlock the notebook for editing
     * 
     * @param  {Number}
     * @return {Promise}
     */
    unlock(notebook_id) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebooks/${notebook_id}/unlock.json`
        })
    }

    /**
     * Delete a Notebook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(notebook_id) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/notebooks/${notebook_id}.json`
        })
    }

    /**
     * Copy Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    copy(notebook_id, body = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebooks/${notebook_id}/copy.json`,
            body
        })
    }

    /**
     * Move Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    move(notebook_id, body = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebook/${notebook_id}/move.json`,
            body
        })
    }

    /**
     * Get Comments for a Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getComments(notebook_id, qs = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            uri: `/notebooks/${notebook_id}/comments.json`,
            qs
        })
    }

    /**
     * Create a Comment for a Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createComment(notebook_id, body = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'POST',
            uri: `/notebooks/${notebook_id}/comments.json`,
            body
        })
    }

    /**
     * Get Tags from a Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(notebook_id, qs = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            uri: `/notebooks/${notebook_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(notebook_id, body = {}) {
        if (!notebook_id) {
            return this.handleError('No Notebook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebooks/${notebook_id}/tags.json`,
            body
        })
    }

}

module.exports = Notebook