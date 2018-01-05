"use strict"

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
            return this.handleError('No category id provided')
        }

        return this.query({
            path: `/linkCategories/${category_id}.json`
        })
    }

    /**
     * Update a Link Category
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(category_id, category_object = {}) {
        if (!category_id || !Object.keys(category_object).length) {
            return this.handleError('No category id or category request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/linkCategories/${category_id}.json`
        }, category_object)
    }

    /**
     * Delete a Link Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(category_id) {
        if (!category_id) {
            return this.handleError('No category id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/linkCategories/${category_id}.json`
        })
    }

}

module.exports = Link