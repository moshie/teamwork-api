"use strict"

const Teamwork = require('../teamwork')

class Project extends Teamwork {

    /**
     * Get Project Categories or a Project Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        const path = !category_id ? 
            `/projectCategories.json` : 
            `/projectCategories/${category_id}.json`

        return this.query({
            path
        })
    }

    /**
     * Create a Project Category
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(category_object = {}) {
        if (!Object.keys(category_object).length) {
            return this.handleError('No category request object provided')
        }

        return this.query({
            method: 'POST',
            path: '/projectcategories.json'
        }, category_object)
    }

    /**
     * Update a Project Category
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
            path: `/projectCategories/${category_id}.json`
        }, category_object)
    }

    /**
     * Delete a Project Category
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
            path: `/projectCategories/${category_id}.json`
        })
    }

}

module.exports = Project