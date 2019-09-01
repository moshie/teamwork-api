'use strict'

const Teamwork = require('./teamwork')

class Notebook extends Teamwork {

    /**
     * Get Notebooks or Notebook
     * 
     * @method GET
     * @uri /notebooks.json | /notebooks/{notebook_id}.json
     * @url https://developer.teamwork.com/projects/notebooks/list-all-notebooks
     * @example tw.notebooks.get(query_string, notebook_id)
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, notebook_id) {
        return this.query({
            uri: !notebook_id ? 
                '/notebooks.json' : 
                `/notebooks/${notebook_id}.json`,
            qs
        })
    }

    /**
     * Update a Notebook
     * 
     * @method PUT
     * @uri /notebooks/{notebook_id}.json
     * @url https://developer.teamwork.com/projects/notebooks/update-a-single-notebook
     * @example tw.notebooks.update(notebook_id, body)
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
     * @method PUT
     * @uri /notebooks/{notebook_id}/lock.json
     * @url https://developer.teamwork.com/projects/notebooks/lock-a-single-notebook-for-editing
     * @example tw.notebooks.lock(notebook_id)
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
     * @method PUT
     * @uri /notebooks/{notebook_id}/unlock.json
     * @url https://developer.teamwork.com/projects/notebooks/unlock-a-single-notebook
     * @example tw.notebooks.unlock(notebook_id)
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
     * @method DELETE
     * @uri /notebooks/{notebook_id}.json
     * @url https://developer.teamwork.com/projects/notebooks/delete-a-single-notebook
     * @example tw.notebooks.delete(notebook_id)
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
     * @method PUT
     * @uri /notebooks/${notebook_id}/copy.json
     * @url https://developer.teamwork.com/projects/notebooks/copy-a-notebook-to-another-project
     * @example tw.notebooks.copy(notebook_id, body)
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
     * @method PUT
     * @uri /notebooks/${notebook_id}/move.json
     * @url https://developer.teamwork.com/projects/notebooks/move-a-notebook-to-another-project
     * @example tw.notebooks.move(notebook_id, body)
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
     * @method GET
     * @uri /notebooks/${notebook_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types
     * @example tw.notbooks.getComments(notebook_id, query_string)
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
     * @method POST
     * @uri /notebooks/${notebook_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/creating-a-comment
     * @example tw.notbooks.createComment(notebook_id, body)
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
     * @method GET
     * @uri /notebooks/{notebook_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.notebooks.getTags(notebook_id, query_string)
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
     * @method PUT
     * @uri /notebooks/{notebook_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.notebooks.updateTag(notebook_id, body)
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