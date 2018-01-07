"use strict"

const Teamwork = require('../teamwork')

class Message extends Teamwork {

    /**
     * Get a Message Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        if (!category_id) {
            return this.handleError('No Category id')
        }

        return this.query({
            uri: `/messageCategories/${category_id}.json`
        })
    }

    /**
     * Update a Message Category
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
            uri: `/messageCategories/${category_id}.json`,
            body
        })
    }

    /**
     * Delete a Message Category
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
            uri: `/messageCategories/${category_id}.json`
        })
    }

}

module.exports = Message