'use strict'

const Teamwork = require('./teamwork')

class People extends Teamwork {

    /**
     * Get People or Person
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

}

module.exports = People