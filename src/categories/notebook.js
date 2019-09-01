'use strict'

const Teamwork = require('../teamwork')

class Notebook extends Teamwork {

    /**
     * Get a Notebook Category
     * 
     * @method GET
     * @uri /notebookCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/notebook-categories/retrieve-a-single-notebook-category
     * @example tw.notebookCategories.get(category_id)
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
     * @method PUT
     * @uri /notebookCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/notebook-categories/updating-a-notebook-category
     * @example tw.notebookCategories.update(category_id, body)
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
     * @method DELETE
     * @uri /notebookCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/notebook-categories/updating-a-notebook-category
     * @example tw.notebookCategories.delete(category_id)
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

    /**
     * Get a Notebooks from a Notebook Category
     * 
     * @method GET
     * @uri /notebookCategories/{category_id}/notebooks.json
     * @url https://developer.teamwork.com/projects/notebooks/list-notebooks-in-a-specific-category
     * @example tw.notebookCategories.getNotebooks(category_id, query_string)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getNotebooks(category_id, qs) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            uri: `/notebookCategories/${category_id}/notebooks.json`,
            qs
        })
    }

}

module.exports = Notebook