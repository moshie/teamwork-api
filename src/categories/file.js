'use strict'

const Teamwork = require('../teamwork')

class File extends Teamwork {

    /**
     * Get a File Category
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