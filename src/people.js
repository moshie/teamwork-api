'use strict'

const Teamwork = require('./teamwork')

class People extends Teamwork {

    /**
     * Get People or Person
     * 
     * @method GET
     * @uri /people.json | /people/{person_id}.json
     * @url https://developer.teamwork.com/projects/people/get-all-people
     * @example tw.people.get(query_string, person_id)
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, person_id) {
        return this.query({
            uri: !person_id ? 
                '/people.json' : 
                `/people/${person_id}.json`,
            qs
        })
    }

    /**
     * Create a Person
     * 
     * @method POST
     * @uri /people.json
     * @url https://developer.teamwork.com/projects/people/creates-a-new-user-account
     * @example tw.people.create(body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/people.json',
            body
        })
    }

    /**
     * Update a Person
     * 
     * @method PUT
     * @uri /people/{person_id}.json
     * @url https://developer.teamwork.com/projects/people/editing-a-user
     * @example tw.people.update(person_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(person_id, body = {}) {
        if (!person_id) {
            return this.handleError('No Person id')
        }

        return this.query({
            method: 'PUT',
            uri: `/people/${person_id}.json`,
            body
        })
    }

    /**
     * Delete a Person
     * 
     * @method DELETE
     * @uri /people/{person_id}.json
     * @url https://developer.teamwork.com/projects/people/delete-user
     * @example tw.people.update(person_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(person_id) {
        if (!person_id) {
            return this.handleError('No Person id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/people/${person_id}.json`
        })
    }

    /**
     * Get Person accociated with api key
     * 
     * @method GET
     * @uri /me.json
     * @url https://developer.teamwork.com/projects/people/get-current-user-details
     * @example tw.people.me()
     * 
     * @return {Promise}
     */
    me() {
        return this.query({
            uri: '/me.json'
        })
    }

    /**
     * Get Stats
     * 
     * @method GET
     * @uri /stats.json
     * @url https://developer.teamwork.com/projects/people/current-user-summary-stats
     * @example tw.people.stats(query_string)
     * 
     * @param  {Object}
     * @return {Promise}
     */
    stats(qs = {}) {
        return this.query({
            uri: '/stats.json',
            qs
        })
    }

    /**
     * Get Api Keys
     * 
     * @method GET
     * @uri /people/APIKeys.json
     * @url https://developer.teamwork.com/projects/people/retrieve-all-api-keys-for-all-people-on-account
     * @example tw.people.apiKeys()
     * 
     * @return {Promise}
     */
    apiKeys() {
        return this.query({
            uri: '/people/APIKeys.json'
        })
    }

    /**
     * Unassign people from all tasks
     * 
     * @method PUT
     * @uri /people/{person_id}.json
     * @url https://developer.teamwork.com/projects/people/unassign-a-user-from-all-tasks
     * @example tw.people.unassignAll(person_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    unassignAll(person_id, body = {}) {
        if (!person_id) {
            return this.handleError('No Person id')
        }

        return this.query({
            method: 'PUT',
            uri: `/people/${person_id}.json`,
            body
        })
    }

    /**
     * Get the status of all people
     * 
     * @method GET
     * @uri /people/status.json
     * @url https://developer.teamwork.com/projects/people-status/retrieve-everybody-status
     * @example tw.people.status()
     * 
     * @return {Promise}
     */
    status() {
        return this.query({
            uri: '/people/status.json'
        })
    }

    /**
     * Get Logged time from a person
     * 
     * @method GET
     * @uri /people/{person_id}/loggedtime.json
     * @url https://developer.teamwork.com/projects/time-tracking/get-a-persons-total-logged-time
     * @example tw.people.loggedTime(person_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    loggedTime(person_id, qs = {}) {
        if (!person_id) {
            return this.handleError('No Person id')
        }

        return this.query({
            uri: `/people/${person_id}/loggedtime.json`,
            qs
        })
    }

    /**
     * Get Tags from a Person
     * 
     * @method GET
     * @uri /users/{person_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.people.getTags(person_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(person_id, qs = {}) {
        if (!person_id) {
            return this.handleError('No Person id')
        }

        return this.query({
            uri: `/users/${person_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Person
     * 
     * @method PUT
     * @uri /users/{person_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.people.updateTag(person_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(person_id, body = {}) {
        if (!person_id) {
            return this.handleError('No Person id')
        }

        return this.query({
            method: 'PUT',
            uri: `/users/${person_id}/tags.json`,
            body
        })
    }

    /**
     * Get all clock ins
     * 
     * @method GET
     * @uri /people/{person_id}/clockins.json
     * @url https://developer.teamwork.com/projects/clock-in-clock-out/get-all-clock-ins
     * @example tw.people.clockIns(person_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    clockIns(person_id, qs = {}) {
        if (!person_id) {
            return this.handleError('No person id')
        }

        return this.query({
            uri: `/people/${person_id}/clockins.json`,
            qs
        })
    }

}

module.exports = People