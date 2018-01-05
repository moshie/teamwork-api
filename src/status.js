"use strict"

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
        path = !user_id ? 
            `/me/status.json` : 
            `/people/${user_id}/status.json`

        return this.query({
            path
        })
    }

    /**
     * Create a status
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(person_id, status_object = {}) {
        if (!person_id || !Object.keys(status_object).length) {
            return this.handleError('No status id or status request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/people/${person_id}/status.json`
        }, status_object)
    }

    /**
     * Update your status
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateMe(status_id, status_object = {}) {
        if (!status_id || !Object.keys(status_object).length) {
            return this.handleError('No status id or status request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/me/status/${status_id}.json`
        }, status_object)
    }

    /**
     * Update a status
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(status_id, person_id = null, status_object = {}) {
        if (!status_id) {
            return this.handleError('No status id provided')
        }

        if (typeof person_id == 'object') {
            status_object = person_id
            path = `/people/status/${status_id}.json`
        } else {
            path = `/people/${person_id}/status/${status_id}.json`
        }

        return this.query({
            method: 'PUT',
            path
        }, status_object)
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
            return this.handleError('No status id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/me/status/${status_id}.json`
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
    delete(status_id, person_id = null) {
        if (!status_id) {
            return this.handleError('No status id provided')
        }

        const path = !person_id ? 
            `/people/status/${status_id}.json` :
            `/people/${person_id}/status/${status_id}.json`

        return this.query({
            method: 'DELETE',
            path
        })
    }

}

module.exports = Status