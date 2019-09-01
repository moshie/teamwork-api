'use strict'

const Teamwork = require('../teamwork')

class Project extends Teamwork {

    /**
     * Get Project Categories or a Project Category
     * 
     * @method GET
     * @uri /projectCategories.json | /projectCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/project-categories/retrieving-all-of-a-project-categories
     * @example tw.projectCategories.get(category_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        return this.query({
            uri: !category_id ? 
                '/projectCategories.json' : 
                `/projectCategories/${category_id}.json`
        })
    }

    /**
     * Create a Project Category
     * 
     * @method POST
     * @uri /projectcategories.json
     * @url https://developer.teamwork.com/projects/project-categories/creating-project-categories
     * @example tw.projectCategories.create(body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/projectcategories.json',
            body
        })
    }

    /**
     * Update a Project Category
     * 
     * @method PUT
     * @uri /projectCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/project-categories/updating-a-project-category
     * @example tw.projectCategories.update(category_id, body)
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
            uri: `/projectCategories/${category_id}.json`,
            body
        })
    }

    /**
     * Delete a Project Category
     * 
     * @method DELETE
     * @uri /projectCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/project-categories/deleting-a-project-category
     * @example tw.projectCategories.delete(category_id)
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
            uri: `/projectCategories/${category_id}.json`
        })
    }

}

module.exports = Project