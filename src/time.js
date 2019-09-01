'use strict'

const Teamwork = require('./teamwork')

class Time extends Teamwork {

    /**
     * Get times or time
     * 
     * @method GET
     * @uri /time_entries.json | /time_entries/{time_id}.json
     * @url https://developer.teamwork.com/projects/time-tracking/retrieve-all-time-entries-across-all-projects
     * @example tw.time.get(query_string, time_id)
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
     * @method PUT
     * @uri /time_entries/{time_id}.json
     * @url https://developer.teamwork.com/projects/time-tracking/update-a-time-entry
     * @example tw.time.update(time_id, body)
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
     * @method DELETE
     * @uri /time_entries/{time_id}.json
     * @url https://developer.teamwork.com/projects/time-tracking/delete-a-time-entry
     * @example tw.time.delete(time_id)
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
     * Retrieve total time
     * 
     * @method GET
     * @uri /time/total.json
     * @url https://developer.teamwork.com/projects/time-tracking/time-totals-across-projects
     * @example tw.time.total(query_string)
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
     * @method GET
     * @uri /timelogs/{time_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.time.getTags(time_id, query_string)
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
     * @method PUT
     * @uri /timelogs/{time_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-a-single-tag
     * @example tw.tasks.updateTag(time_id, body)
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