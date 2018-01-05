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
            return this.handleError('No task list id provided')
        }

        return this.query({
            path: `/tasklists/${tasklist_id}.json`
        })
    }

    /**
     * Create a Task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, tasklist_object = {}, options = {}) {
        if (!project_id || !Object.keys(tasklist_object).length) {
            return this.handleError('No project id or task list request object provided')
        }

        return this.query({
            method: 'POST',
            path: this.params(`/projects/${project_id}/tasklists/reorder.json`, options)
        }, tasklist_object)
    }

    /**
     * Update a Task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(tasklist_id, tasklist_object = {}) {
        if (!tasklist_id || !Object.keys(tasklist_object).length) {
            return this.handleError('No task list id or task list request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasklists/${tasklist_id}.json`
        }, tasklist_object)
    }

    /**
     * Delete a Task list
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(tasklist_id) {
        if (!tasklist_id) {
            return this.handleError('No task list id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/tasklists/${tasklist_id}.json`
        })
    }

    /**
     * Copy Task List
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    copy(tasklist_id, tasklist_object = {}) {
        if (!tasklist_id || !Object.keys(tasklist_object).length) {
            return this.handleError('No tasklist id or tasklist request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasklist/${tasklist_id}/copy.json`
        }, tasklist_object)
    }

    /**
     * Move File
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    move(tasklist_id, tasklist_object = {}) {
        if (!tasklist_id || !Object.keys(tasklist_object).length) {
            return this.handleError('No task list id or task list request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasklist/${tasklist_id}/move.json`
        }, tasklist_object)
    }

    /**
     * Reorder lists
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    reorder(project_id, tasklist_object = {}) {
        if (!project_id || !Object.keys(tasklist_object).length) {
            return this.handleError('No project id or task list request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/tasklists/reorder.json`
        }, tasklist_object)
    }

    /**
     * Get tasklist templates
     * 
     * @return {Promise}
     */
    templates() {
        return this.query({
            path: `/tasklists/templates.json`
        })
    }

    /**
     * Get Tasks from a task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTasks(tasklist_id, options = {}) {
        if (!tasklist_id) {
            return this.handleError('No task list id provided')
        }

        return this.query({
            path: this.params(`/tasklists/${tasklist_id}/tasks.json`, options)
        })
    }

}

module.exports = TaskList