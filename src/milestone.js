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
    get(options = {}, milestone_id) {
        const path = !milestone_id ?
            this.params(`/milestones.json`, options) :
            this.params(`/milestones/${milestone_id}.json`, options)

        return this.query({
            path
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
            return this.handleError('No milestone id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/milestones/${milestone_id}/complete.json`
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
            return this.handleError('No milestone id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/milestones/${milestone_id}/uncomplete.json`
        })
    }

    /**
     * Update a Milestone
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(milestone_id, milestone_object = {}) {
        if (!milestone_id || !Object.keys(milestone_object).length) {
            return this.handleError('No project id or Milestone request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/milestones/${milestone_id}.json`
        }, milestone_object)
    }

    /**
     * Delete a Milestone
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(milestone_id) {
        if (!milestone_id) {
            return this.handleError('No milestone id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/milestones/${milestone_id}.json`
        })
    }

}

module.exports = Milestone