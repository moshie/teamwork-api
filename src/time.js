'use strict'

const Teamwork = require('./teamwork')

class Time extends Teamwork {

    /**
     * Get times or time
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(qs = {}, time_id) {
        return this.query({
            uri: !time_id ? 
                '/time_entries.json' : 
                `/time_entries/${time_id}.json`,
            qs
        })
    }

    /**
     * Update time
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(time_id, body = {}) {
        if (!time_id) {
            return this.handleError('No Time id')
        }

        return this.query({
            method: 'PUT',
            uri: `/time_entries/${time_id}.json`,
            body
        })
    }

    /**
     * Delete a time entry
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(time_id) {
        if (!time_id) {
            return this.handleError('No Time id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/time_entries/${time_id}.json`
        })
    }

    /**
     * Retrieve all To-do Item Times
     * 
     * @param  {Number}
     * @return {Promise}
     */
    todos(todo_id) {
        if (!todo_id) {
            return this.handleError('No Time id')
        }

        return this.query({
            uri: `/todo_items/${todo_id}/time_entries.json`
        })
    }

    /**
     * Retrieve total time
     * 
     * @return {Promise}
     */
    total(qs = {}) {
        return this.query({
            uri: '/time/total.json',
            qs
        })
    }

    /**
     * Get Tags from a Time log
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(time_id, qs = {}) {
        if (!time_id) {
            return this.handleError('No Time id')
        }

        return this.query({
            uri: `/timelogs/${time_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Time Log
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(time_id, body = {}) {
        if (!time_id) {
            return this.handleError('No Time id')
        }

        return this.query({
            method: 'PUT',
            uri: `/timelogs/${time_id}/tags.json`,
            body
        })
    }

}

module.exports = Time