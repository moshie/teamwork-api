'use strict'

const Teamwork = require('./teamwork')

class Milestone extends Teamwork {

    /**
     * Get Milestones or Milestone
     * 
     * @method GET
     * @uri /milestones.json | /milestones/${milestone_id}.json
     * @url https://developer.teamwork.com/projects/milestones/list-all-milestones
     * @example tw.milestones.get(query_string, milestone_id)
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, milestone_id) {
        return this.query({
            uri: !milestone_id ? 
                '/milestones.json' : 
                `/milestones/${milestone_id}.json`,
            qs
        })
    }

    /**
     * Mark a Milestone as complete
     * 
     * @method PUT
     * @uri /milestones/{milestone_id}/complete.json
     * @url https://developer.teamwork.com/projects/milestones/complete-a-milestone
     * @example tw.milestones.complete(milestone_id)
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
     * @method PUT
     * @uri /milestones/{milestone_id}/uncomplete.json
     * @url https://developer.teamwork.com/projects/milestones/un-complete-a-milestone
     * @example tw.milestones.incomplete(milestone_id)
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
     * @method PUT
     * @uri /milestones/${milestone_id}.json
     * @url https://developer.teamwork.com/projects/milestones/update-a-single-milestone
     * @example tw.milestones.update(milestone_id, body)
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
     * @method DELETE
     * @uri /milestones/${milestone_id}.json
     * @url https://developer.teamwork.com/projects/milestones/delete-a-milestone
     * @example tw.milestones.delete(milestone_id)
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

    /**
     * Get Comments for a Milestone
     * 
     * @method GET
     * @uri /milestones/${milestone_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types
     * @example tw.milestones.getComments(milestone_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getComments(milestone_id, qs = {}) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            uri: `/milestones/${milestone_id}/comments.json`,
            qs
        })
    }

    /**
     * Create a Comment for a Milestone
     * 
     * @method POST
     * @uri /milestones/${milestone_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/creating-a-comment
     * @example tw.milestones.createComment(milestone_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createComment(milestone_id, body = {}) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            method: 'POST',
            uri: `/milestones/${milestone_id}/comments.json`,
            body
        })
    }

    /**
     * Get Tags from a Milestone
     * 
     * @method GET
     * @uri /milestones/${milestone_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.milestones.getTags(milestone_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(milestone_id, qs = {}) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            uri: `/milestones/${milestone_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Milestone
     * 
     * @method PUT
     * @uri /milestones/${milestone_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.milestones.updateTag(milestone_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(milestone_id, body = {}) {
        if (!milestone_id) {
            return this.handleError('No Milestone id')
        }

        return this.query({
            method: 'PUT',
            uri: `/milestones/${milestone_id}/tags.json`,
            body
        })
    }

}

module.exports = Milestone