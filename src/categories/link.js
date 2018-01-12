'use strict'

const Teamwork = require('../teamwork')

class Link extends Teamwork {

    /**
     * Get a Link Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            uri: `/linkCategories/${category_id}.json`
        })
    }

    /**
     * Update a Link Category
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
            uri: `/linkCategories/${category_id}.json`,
            body
        })
    }

    /**
     * Delete a Link Category
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
            uri: `/linkCategories/${category_id}.json`
        })
    }

}

module.exports = Link