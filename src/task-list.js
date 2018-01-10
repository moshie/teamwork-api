"use strict"

const Teamwork = require('./teamwork')

class TaskList extends Teamwork {

    /**
     * Get a Task list
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(tasklist_id) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            uri: `/tasklists/${tasklist_id}.json`
        })
    }

    /**
     * Create a Task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/tasklists.json`,
            body
        })
    }

    /**
     * Update a Task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(tasklist_id, body = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasklists/${tasklist_id}.json`,
            body
        })
    }

    /**
     * Delete a Task list
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(tasklist_id) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/tasklists/${tasklist_id}.json`
        })
    }

    /**
     * Copy Task List
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    copy(tasklist_id, body = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasklist/${tasklist_id}/copy.json`,
            body
        })
    }

    /**
     * Move File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    move(tasklist_id, body = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasklist/${tasklist_id}/move.json`,
            body
        })
    }

    /**
     * Reorder lists
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    reorder(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/tasklists/reorder.json`,
            body
        })
    }

    /**
     * Get tasklist templates
     * 
     * @return {Promise}
     */
    templates() {
        return this.query({
            uri: `/tasklists/templates.json`
        })
    }

    /**
     * Get Tasks from a task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTasks(tasklist_id, qs = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            uri: `/tasklists/${tasklist_id}/tasks.json`,
            qs
        })
    }

    /**
     * Get Time Totals from a task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    totalTime(tasklist_id, qs = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            uri: `/tasklists/${tasklist_id}/time/total.json`,
            qs
        })
    }

    /**
     * Get Tags from a Task List
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(tasklist_id, qs = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            uri: `/tasklists/${tasklist_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Task List
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(tasklist_id, body = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasklists/${tasklist_id}/tags.json`,
            body
        })
    }

}

module.exports = TaskList