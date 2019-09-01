'use strict'

const Teamwork = require('./teamwork')

class TaskList extends Teamwork {

    /**
     * Get a Task list
     * 
     * @method GET
     * @uri /tasklists.json | /tasklists/{tasklist_id}.json
     * @url https://developer.teamwork.com/projects/task-lists/get-all-task-lists
     * @example tw.tasklists.get(query_string, tasklist_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, tasklist_id) {
        return this.query({
            uri: !tasklist_id ? 
                '/tasklists.json' : 
                `/tasklists/${tasklist_id}.json`,
            qs
        })
    }

    /**
     * Create a Task list
     * 
     * @method POST
     * @uri /projects/{project_id}/tasklists.json
     * @url https://developer.teamwork.com/projects/task-lists/create-task-list
     * @example tw.tasklists.create(project_id, body)
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
     * @method PUT
     * @uri /tasklists/{tasklist_id}.json
     * @url https://developer.teamwork.com/projects/task-lists/update-task-list
     * @example tw.tasklists.update(tasklist_id, body)
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
     * @method DELETE
     * @uri /tasklists/{tasklist_id}.json
     * @url https://developer.teamwork.com/projects/task-lists/delete-a-task-list
     * @example tw.tasklists.delete(tasklist_id)
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
     * @method PUT
     * @uri /tasklists/{tasklist_id}/copy.json
     * @url https://developer.teamwork.com/projects/task-lists/copy-a-task-list-or-copy-a-task-list-to-another-project
     * @example tw.tasklists.copy(tasklist_id, body)
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
     * Move Task List
     * 
     * @method PUT
     * @uri /tasklists/{tasklist_id}/move.json
     * @url https://developer.teamwork.com/projects/task-lists/move-a-task-list-to-another-project
     * @example tw.tasklists.move(tasklist_id, body)
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
     * @method PUT
     * @uri /projects/{project_id}/tasklists/reorder.json
     * @url https://developer.teamwork.com/projects/task-lists/reorder-lists
     * @example tw.tasklists.reorder(project_id, body)
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
     * @method GET
     * @uri /tasklists/templates.json
     * @url https://developer.teamwork.com/projects/task-lists/template-task-lists-get-all-template-task-lists
     * @example tw.tasklists.templates()
     * 
     * @return {Promise}
     */
    templates() {
        return this.query({
            uri: '/tasklists/templates.json'
        })
    }

    /**
     * Get Tasks from a task list
     * 
     * @method GET
     * @uri /tasklists/{tasklist_id}/tasks.json
     * @url https://developer.teamwork.com/projects/tasks/get-all-tasks-on-a-given-task-list
     * @example tw.tasklists.getTasks(tasklist_id, query_string)
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
     * @method GET
     * @uri /tasklists/{tasklist_id}/time/total.json
     * @url https://developer.teamwork.com/projects/tasks/get-all-tasks-on-a-given-task-list
     * @example tw.tasklists.totalTime(tasklist_id, query_string)
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
     * @method GET
     * @uri /tasklists/{tasklist_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.tasklists.getTags(tasklist_id, query_string)
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
     * @method PUT
     * @uri /tasklists/{tasklist_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.tasklists.updateTag(tasklist_id, body)
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