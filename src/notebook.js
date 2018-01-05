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
    get(options = {}, notebook_id) {
        const path = !milestone_id ?
            this.params(`/notebooks.json`, options) :
            this.params(`/notebooks/${notebook_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Update a Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(notebook_id, notebook_object = {}) {
        if (!notebook_id || !Object.keys(notebook_object).length) {
            return this.handleError('No notebook id or Notebook request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/notebooks/${notebook_id}.json`
        }, notebook_object)
    }

    /**
     * Lock the notebook for editing
     * 
     * @param  {Number}
     * @return {Promise}
     */
    lock(notebook_id) {
        if (!notebook_id) {
            return this.handleError('No notebook id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/notebooks/${notebook_id}/lock.json`
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
            return this.handleError('No notebook id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/notebooks/${notebook_id}/unlock.json`
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
            return this.handleError('No notebook id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/notebooks/${notebook_id}.json`
        })
    }

    /**
     * Copy Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    copy(notebook_id, notebook_object = {}) {
        if (!notebook_id || !Object.keys(notebook_object).length) {
            return this.handleError('No notebook id or Notebook request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/notebooks/${notebook_id}/copy.json`
        }, notebook_object)
    }

    /**
     * Move Notebook
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    move(notebook_id, notebook_object = {}) {
        if (!notebook_id || !Object.keys(notebook_object).length) {
            return this.handleError('No notebook id or Notebook request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/notebook/${notebook_id}/move.json`
        }, notebook_object)
    }

}

module.exports = Notebook