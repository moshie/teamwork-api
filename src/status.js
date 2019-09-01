'use strict'

const Teamwork = require('./teamwork')

class Status extends Teamwork {

    /**
     * Get a status or your status
     * 
     * @method GET
     * @uri /statuses.json | /people/${user_id}/status.json
     * @url https://developer.teamwork.com/projects/people-status/retrieve-everybody-status
     * @example tw.status.get(user_id)
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(user_id) {
        return this.query({
            uri: !user_id ? 
                '/statuses.json' : 
                `/people/${user_id}/status.json`
        })
    }

    /**
     * Get your status
     * 
     * @method GET
     * @uri /me/status.json
     * @url https://developer.teamwork.com/projects/people-status/retrieve-my-status
     * @example tw.status.getMe()
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getMe() {
        return this.query({
            uri: '/me/status.json'
        })
    }

    /**
     * Create your status
     * 
     * @method POST
     * @uri /me/status.json
     * @url https://developer.teamwork.com/projects/people-status/create-my-status
     * @example tw.status.create(body)
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/me/status.json',
            body
        })
    }

    /**
     * Update your status
     * 
     * @method PUT
     * @uri /me/status/${status_id}.json
     * @url https://developer.teamwork.com/projects/people-status/update-my-status
     * @example tw.status.updateMe(status_id, body)
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
     * @method PUT
     * @uri /people/status/${status_id}.json | /people/${person_id}/status/${status_id}.json
     * @url https://developer.teamwork.com/projects/people-status/update-user-status
     * @example tw.status.update(status_id, person_id, body)
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
     * @method DELETE
     * @uri /me/status/${status_id}.json
     * @url https://developer.teamwork.com/projects/people-status/delete-my-status
     * @example tw.status.deleteMe(status_id)
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
     * @method DELETE
     * @uri /people/status/${status_id}.json | /people/${person_id}/status/${status_id}.json
     * @url https://developer.teamwork.com/projects/people-status/delete-user-status
     * @example tw.status.delete(status_id, person_id)
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