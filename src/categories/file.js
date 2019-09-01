'use strict'

const Teamwork = require('../teamwork')

class File extends Teamwork {

    /**
     * Get a File Category
     * 
     * @method GET
     * @uri /fileCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/file-categories/retrieving-all-of-a-file-categories
     * @example tw.fileCategories.get(category_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            uri: `/fileCategories/${category_id}.json`
        })
    }

    /**
     * Update a File Category
     * 
     * @method PUT
     * @uri /fileCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/file-categories/updating-a-file-category
     * @example tw.fileCategories.update(category_id, body)
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
            uri: `/fileCategories/${category_id}.json`,
            body
        })
    }

    /**
     * Delete a File Category
     * 
     * @method DELETE
     * @uri /fileCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/file-categories/deleting-a-file-category
     * @example tw.fileCategories.delete(category_id)
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
            uri: `/fileCategories/${category_id}.json`
        })
    }

}

module.exports = File