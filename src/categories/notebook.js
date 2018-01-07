"use strict"

const Teamwork = require('../teamwork')

class Notebook extends Teamwork {

    /**
     * Get a Notebook Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            uri: `/notebookCategories/${category_id}.json`
        })
    }

    /**
     * Update a Notebook Category
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(category_id, body = {}) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            method: 'PUT',
            uri: `/notebookCategories/${category_id}.json`,
            body
        })
    }

    /**
     * Delete a Notebook Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(category_id) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/notebookCategories/${category_id}.json`
        })
    }

}

module.exports = Notebook