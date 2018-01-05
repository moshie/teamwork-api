"use strict"

const Teamwork = require('./teamwork')

class Time extends Teamwork {

    /**
     * Get times or time
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(options = {}, time_id) {
        path = !time_id ? 
            this.params('/time_entries.json', options) : 
            this.params(`/time_entries/${time_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Update time
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(time_id, time_object = {}, options = {}) {
        if (!time_id || !Object.keys(time_object).length) {
            return this.handleError('No time id or Time request object provided')
        }

        return this.query({
            method: 'PUT',
            path: this.params(`/time_entries/${time_id}.json`, options)
        }, time_object)
    }

    /**
     * Delete a time entry
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(time_id) {
        if (!time_id) {
            return this.handleError('No time id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/time_entries/${time_id}.json`
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
            return this.handleError('No time id provided')
        }

        return this.query({
            path: `/todo_items/${todo_id}/time_entries.json`
        })
    }

    /**
     * Retrieve total time
     * 
     * @return {Promise}
     */
    total(options = {}) {
        return this.query({
            path: `/time/total.json`
        })
    }

}

module.exports = Time