'use strict'

const Teamwork = require('../teamwork')

class Link extends Teamwork {

    /**
     * Get a Link Category
     * 
     * @method GET
     * @uri /linkCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/link-categories/retrieving-all-of-a-link-categories
     * @example tw.linkCategories.get(category_id)
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
     * @method PUT
     * @uri /linkCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/link-categories/updating-a-link-category
     * @example tw.linkCategories.update(category_id, body)
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
     * @method DELETE
     * @uri /linkCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/link-categories/deleting-a-link-category
     * @example tw.linkCategories.delete(category_id)
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