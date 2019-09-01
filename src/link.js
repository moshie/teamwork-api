'use strict'

const Teamwork = require('./teamwork')

class Link extends Teamwork {

    /**
     * Get links or link
     * 
     * @method GET
     * @uri /links.json | /links/{link_id}.json
     * @url https://developer.teamwork.com/projects/links/list-all-links
     * @example tw.links.get(link_id)
     * 
     * @param  {String}
     * @return {Promise}
     */
    get(link_id) {
        return this.query({
            uri: !link_id ? '/links.json' : `/links/${link_id}.json`
        })
    }

    /**
     * Create a link
     * 
     * @method POST
     * @uri /projects/{project_id}/links.json
     * @url https://developer.teamwork.com/projects/links/create-a-single-link
     * @example tw.links.create(project_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/links.json`,
            body
        })
    }

    /**
     * Update a link
     * 
     * @method PUT
     * @uri /links/{link_id}.json
     * @url https://developer.teamwork.com/projects/links/update-a-single-link
     * @example tw.links.update(link_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(link_id, body = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'PUT',
            uri: `/links/${link_id}.json`,
            body
        })
    }

    /**
     * Delete a Link
     * 
     * @method DELETE
     * @uri /links/${link_id}.json
     * @url https://developer.teamwork.com/projects/links/delete-a-single-link
     * @example tw.links.delete(link_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(link_id) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/links/${link_id}.json`
        })
    }

    /**
     * Get Comments for a Link
     * 
     * @method GET
     * @uri /links/{link_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types
     * @example tw.links.getComments(link_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getComments(link_id, qs = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            uri: `/links/${link_id}/comments.json`,
            qs
        })
    }

    /**
     * Create a Comment for a Link
     * 
     * @method POST
     * @uri /links/{link_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/creating-a-comment
     * @example tw.links.createComment(link_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createComment(link_id, body = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'POST',
            uri: `/links/${link_id}/comments.json`,
            body
        })
    }

    /**
     * Get Tags from a Link
     * 
     * @method GET
     * @uri /links/${link_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.links.getTags(link_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(link_id, qs = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            uri: `/links/${link_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Link
     * 
     * @method PUT
     * @uri /links/${link_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.links.updateTag(link_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(link_id, body = {}) {
        if (!link_id) {
            return this.handleError('No Link id')
        }

        return this.query({
            method: 'PUT',
            uri: `/links/${link_id}/tags.json`,
            body
        })
    }

}

module.exports = Link