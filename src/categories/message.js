'use strict'

const Teamwork = require('../teamwork')

class Message extends Teamwork {

    /**
     * Get a Message Category
     * 
     * @method GET
     * @uri /messageCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/message-categories/retrieving-all-of-a-message-categories
     * @example tw.messageCategories.get(category_id)
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
     * @method PUT
     * @uri /messageCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/message-categories/retrieving-all-of-a-message-categories
     * @example tw.messageCategories.update(category_id, body)
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
     * @method DELETE
     * @uri /messageCategories/{category_id}.json
     * @url https://developer.teamwork.com/projects/message-categories/deleting-a-message-category
     * @example tw.messageCategories.delete(category_id)
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