"use strict"

const Teamwork = require('./teamwork')

class Activity extends Teamwork {

    /**
     * Get latest activity
     * 
     * @param  {Object}
     * @return {Promise}
     */
    latest(options = {}) {
        return this.query({
            path: this.params('/latestActivity.json', options)
        })
    }

    /**
     * Delete activity
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(activity_id) {
        if (!activity_id) {
            return this.handleError('No activity id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/activity/${activity_id}.json`
        })
    }

}

module.exports = Activity