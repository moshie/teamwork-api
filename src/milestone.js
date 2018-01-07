"use strict"

const Teamwork = require('./teamwork')

class Milestone extends Teamwork {

    /**
     * Get Milestones or Milestone
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, milestone_id) {
        return this.query({
            uri: !milestone_id ? `/milestones.json` : `/milestones/${milestone_id}.json`,
            qs
        })
    }

    /**
     * Mark a Milestone as complete
     * 
     * @param  {Number}
     * @return {Promise}
     */
    complete(milestone_id) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            method: 'PUT',
            uri: `/milestones/${milestone_id}/complete.json`
        })
    }

    /**
     * Mark a Milestone as Incomplete
     * 
     * @param  {Number}
     * @return {Promise}
     */
    incomplete(milestone_id) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            method: 'PUT',
            uri: `/milestones/${milestone_id}/uncomplete.json`
        })
    }

    /**
     * Update a Milestone
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(milestone_id, body = {}) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            method: 'PUT',
            uri: `/milestones/${milestone_id}.json`,
            body
        })
    }

    /**
     * Delete a Milestone
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(milestone_id) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/milestones/${milestone_id}.json`
        })
    }

}

module.exports = Milestone