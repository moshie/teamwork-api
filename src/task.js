"use strict"

const Teamwork = require('./teamwork')

class Task extends Teamwork {

    /**
     * Get task or tasks
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(options = {}, task_id) {
        const path = !task_id ? 
            this.params('/tasks.json', options) : 
            this.params(`/tasks/${task_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Create a Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(tasklist_id, task_object = {}, options = {}) {
        if (!tasklist_id || !Object.keys(task_object).length) {
            return this.handleError('No task list id or task request object provided')
        }

        return this.query({
            method: 'POST',
            path: this.params(`/tasklists/${tasklist_id}/tasks.json`, options)
        }, task_object)
    }

    /**
     * Update a Task list
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(task_id, task_object = {}) {
        if (!task_id || !Object.keys(task_object).length) {
            return this.handleError('No task list id or task request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasks/${task_id}.json`
        }, tasklist_object)
    }

    /**
     * Delete a Task
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(task_id) {
        if (!task_id) {
            return this.handleError('No task id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/tasks/${task_id}.json`
        })
    }

    /**
     * Create a Sub Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    subtask(task_id, task_object = {}, options = {}) {
        if (!task_id || !Object.keys(task_object).length) {
            return this.handleError('No task id or task request object provided')
        }

        return this.query({
            method: 'POST',
            path: this.params(`/tasks/${task_id}.json`, options)
        }, task_object)
    }

    /**
     * Mark task as complete
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    complete(task_id) {
        if (!task_id) {
            return this.handleError('No task id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasks/${task_id}/complete.json`
        })
    }

    /**
     * Mark task as incomplete
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    incomplete(task_id) {
        if (!task_id) {
            return this.handleError('No task id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasks/${task_id}/uncomplete.json`
        })
    }

    /**
     * Get all completed tasks
     * 
     * @param  {Object}
     * @return {Promise}
     */
    completed(options = {}) {
        return this.query({
            path: this.params(`/completedtasks.json`, options)
        })
    }

    /**
     * Change the completed date on close tasks
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    completedDate(task_id, task_object = {}) {
        if (!task_id || !Object.keys(task_object).length) {
            return this.handleError('No task id or task request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasks/${task_id}.json`
        }, task_object)
    }

    /**
     * Get task dependencies
     * 
     * @param  {Number}
     * @return {Promise}
     */
    dependencies(task_id) {
        if (!task_id) {
            return this.handleError('No task id provided')
        }

        return this.query({
            path: `/tasks/${task_id}/dependencies.json`
        })
    }

    /**
     * Reorder tasks
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    reorder(tasklist_id, task_object = {}) {
        if (!tasklist_id || !Object.keys(task_object).length) {
            return this.handleError('No task list id or task request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasklists/${tasklist_id}/tasks/reorder.json`
        }, task_object)
    }

    /**
     * Get task followers
     * 
     * @param  {Number}
     * @return {Promise}
     */
    followers(task_id) {
        if (!task_id) {
            return this.handleError('No task id provided')
        }

        return this.query({
            path: `/tasks/${task_id}/followers.json`
        })
    }

    /**
     * Set Followers to a task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setFollowers(task_id, task_object = {}) {
        if (!task_id || !Object.keys(task_object).length) {
            return this.handleError('No task id or task request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasks/${task_id}.json`
        }, task_object)
    }

    /**
     * Remove all Followers from a task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    removeFollowers(task_id, task_object = {}) {
        if (!task_id || !Object.keys(task_object).length) {
            return this.handleError('No task id or task request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasks/${task_id}.json`
        }, task_object)
    }

    /**
     * Quickly add tasks to a tasklist
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    quickadd(tasklist_id, task_object = {}) {
        if (!tasklist_id || !Object.keys(task_object).length) {
            return this.handleError('No task list id or task request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/tasklists/${tasklist_id}/quickadd.json`
        }, task_object)
    }

}

module.exports = Task