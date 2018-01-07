"use strict"

const Teamwork = require('./teamwork')

class Activity extends Teamwork {

    /**
     * Latest Activity across all projects
     * 
     * @param  {Object}
     * @return {Promise}
     */
    latest(body = {}) {
        return this.query({
            uri: '/latestActivity.json',
            body
        })
    }

    /**
     * Delete an activity entry
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(activity_id) {
        if (!activity_id) {
            return this.handleError('No activity id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/activity/${activity_id}.json`
        })
    }

}

module.exports = Activity