'use strict'

const Teamwork = require('./teamwork')

class Activity extends Teamwork {

    /**
     * Latest Activity across all projects
     * 
     * @method GET
     * @uri /latestActivity.json
     * @url https://developer.teamwork.com/projects/activity/latest-activity-across-all-projects
     * @example tw.activity.latest()
     * 
     * @param {Object} body
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
     * @method DELETE
     * @uri /activity/{activity_id}.json
     * @url https://developer.teamwork.com/projects/activity/delete-an-activity-entry
     * @example tw.activity.delete(activity_id)
     * 
     * @param {Number} activity_id
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