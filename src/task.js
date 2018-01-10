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
    get(qs = {}, task_id) {
        return this.query({
            uri: !task_id ? 
                '/tasks.json' : 
                `/tasks/${task_id}.json`,
            qs
        })
    }

    /**
     * Create a Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(tasklist_id, body = {}, qs = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'POST',
            uri: `/tasklists/${tasklist_id}/tasks.json`,
            qs,
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
    update(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}.json`,
            body
        })
    }

    /**
     * Delete a Task
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/tasks/${task_id}.json`
        })
    }

    /**
     * Create a Sub Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    subtask(task_id, body = {}, qs = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'POST',
            uri: `/tasks/${task_id}.json`,
            body,
            qs
        })
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
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}/complete.json`
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
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}/uncomplete.json`
        })
    }

    /**
     * Get all completed tasks
     * 
     * @param  {Object}
     * @return {Promise}
     */
    completed(qs = {}) {
        return this.query({
            uri: `/completedtasks.json`,
            qs
        })
    }

    /**
     * Change the completed date on close tasks
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    completedDate(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}.json`,
            body
        })
    }

    /**
     * Get task dependencies
     * 
     * @param  {Number}
     * @return {Promise}
     */
    dependencies(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/dependencies.json`
        })
    }

    /**
     * Reorder tasks
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    reorder(tasklist_id, body = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasklists/${tasklist_id}/tasks/reorder.json`,
            body
        })
    }

    /**
     * Get task followers
     * 
     * @param  {Number}
     * @return {Promise}
     */
    followers(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/followers.json`
        })
    }

    /**
     * Set Followers to a task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setFollowers(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}.json`,
            body
        })
    }

    /**
     * Remove all Followers from a task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    removeFollowers(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}.json`,
            body
        })
    }

    /**
     * Quickly add tasks to a tasklist
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    quickadd(tasklist_id, body = {}) {
        if (!tasklist_id) {
            return this.handleError('No Task List id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasklists/${tasklist_id}/quickadd.json`,
            body
        })
    }

    /**
     * Create a Time-Entry (for a task/todo item)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createTime(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'POST',
            uri: `/tasks/${task_id}/time_entries.json`,
            body
        })
    }

    /**
     * Get Time Totals from a task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    totalTime(task_id, qs = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/time/total.json`,
            qs
        })
    }

    /**
     * Add a Time estimate to a Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    estimatedTime(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}/estimatedtime.json`,
            body
        })
    }

    /**
     * Get Comments for a Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getComments(task_id, qs = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/comments.json`,
            qs
        })
    }

    /**
     * Create a Comment for a Task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createComment(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'POST',
            uri: `/tasks/${task_id}/comments.json`,
            body
        })
    }

}

module.exports = Task