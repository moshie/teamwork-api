"use strict"

const Teamwork = require('./teamwork')

class People extends Teamwork {

    /**
     * Get People or Person
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(options = {}, person_id) {
        const path = !person_id ?
            this.params(`/people.json`, options) :
            this.params(`/people/${person_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Create a Person
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(person_object = {}) {
        if (!Object.keys(person_object).length) {
            return this.handleError('No person request object provided')
        }

        return this.query({
            method: 'POST',
            path: '/people.json'
        }, person_object)
    }

    /**
     * Update a Person
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(person_id, person_object = {}) {
        if (!person_id || !Object.keys(person_object).length) {
            return this.handleError('No person id or person request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/people/${person_id}.json`
        }, person_object)
    }

    /**
     * Delete a Person
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(person_id) {
        if (!person_id) {
            return this.handleError('No person id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/people/${person_id}.json`
        })
    }

    /**
     * Get Person accociated with api key
     * 
     * @return {Promise}
     */
    me() {
        return this.query({
            path: '/me.json'
        })
    }

    /**
     * Get Stats
     * 
     * @param  {Object}
     * @return {Promise}
     */
    stats(options = {}) {
        return this.query({
            path: this.params('/stats.json', options)
        })
    }

    /**
     * Get Api Keys
     * 
     * @return {Promise}
     */
    apiKeys() {
        return this.query({
            path: '/people/APIKeys.json'
        })
    }

    /**
     * Unassign people from all tasks
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    unassignAll(person_id, person_object = {}) {
        if (!person_id || !Object.keys(person_object).length) {
            return this.handleError('No person id or person request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/people/${person_id}.json`
        }, person_object)
    }

    /**
     * Get the status of all people
     * 
     * @return {Promise}
     */
    status() {
        return this.query({
            path: `/people/status.json`
        })
    }
}

module.exports = People