'use strict'

const Teamwork = require('./teamwork')

class Status extends Teamwork {

    /**
     * Get a status or your status
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(user_id) {
        return this.query({
            uri: !user_id ? 
                '/me/status.json' : 
                `/people/${user_id}/status.json`
        })
    }

    /**
     * Create a status
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(person_id, body = {}) {
        if (!person_id) {
            return this.handleError('No Status id')
        }

        return this.query({
            method: 'POST',
            uri: `/people/${person_id}/status.json`,
            body
        })
    }

    /**
     * Update your status
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateMe(status_id, body = {}) {
        if (!status_id) {
            return this.handleError('No Status id')
        }

        return this.query({
            method: 'PUT',
            uri: `/me/status/${status_id}.json`,
            body
        })
    }

    /**
     * Update a status
     * 
     * @param  {Number}
     * @param  {Object|Number|String}
     * @param  {Object}
     * @return {Promise}
     */
    update(status_id, person_id = '', body = {}) {
        if (!status_id) {
            return this.handleError('No Status id')
        }

        if (typeof person_id === 'object') {
            body = person_id
        }

        return this.query({
            method: 'PUT',
            uri: typeof person_id === 'object' ?
                `/people/status/${status_id}.json` :
                `/people/${person_id}/status/${status_id}.json`,
            body
        })
    }

    /**
     * delete your Profile status
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    deleteMe(status_id) {
        if (!status_id) {
            return this.handleError('No Status id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/me/status/${status_id}.json`
        })
    }

    /**
     * Delete a status
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    delete(status_id, person_id) {
        if (!status_id) {
            return this.handleError('No Status id')
        }

        return this.query({
            method: 'DELETE',
            uri: !person_id ? 
                `/people/status/${status_id}.json` :
                `/people/${person_id}/status/${status_id}.json`
        })
    }

}

module.exports = Status