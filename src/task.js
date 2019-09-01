'use strict'

const Teamwork = require('./teamwork')

class Task extends Teamwork {

    /**
     * Get task or tasks
     * 
     * @method GET
     * @uri /tasks.json | /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/get-all-tasks-across-all-projects
     * @example tw.tasks.get(query_string, task_id)
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
     * @method POST
     * @uri /tasklists/{tasklist_id}/tasks.json
     * @url https://developer.teamwork.com/projects/tasks/create-a-task
     * @example tw.tasks.create(tasklist_id, body, query_string)
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
     * @method PUT
     * @uri /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/update-a-task
     * @example tw.tasks.update(task_id, body)
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
     * @method DELETE
     * @uri /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/delete-a-task
     * @example tw.tasks.delete(task_id)
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
     * @method POST
     * @uri /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/create-a-sub-task
     * @example tw.tasks.subtask(task_id, body, query_string)
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
     * @method PUT
     * @uri /tasks/{task_id}/complete.json
     * @url https://developer.teamwork.com/projects/tasks/mark-a-task-complete
     * @example tw.tasks.complete(task_id)
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
     * @method PUT
     * @uri /tasks/{task_id}/uncomplete.json
     * @url https://developer.teamwork.com/projects/tasks/mark-a-task-uncomplete
     * @example tw.tasks.incomplete(task_id)
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
     * @method GET
     * @uri /completedtasks.json
     * @url https://developer.teamwork.com/projects/tasks/get-completed-tasks
     * @example tw.tasks.completed(query_string)
     * 
     * @param  {Object}
     * @return {Promise}
     */
    completed(qs = {}) {
        return this.query({
            uri: '/completedtasks.json',
            qs
        })
    }

    /**
     * Change the completed date on close tasks
     * 
     * @method PUT
     * @uri /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/change-the-completed-date-on-closed-tasks
     * @example tw.tasks.completedDate(task_id, body)
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
     * @method GET
     * @uri /tasks/{task_id}/dependencies.json
     * @url https://developer.teamwork.com/projects/tasks/retrieve-task-dependencies
     * @example tw.tasks.dependencies(task_id)
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
     * @method PUT
     * @uri /tasklists/{tasklist_id}/tasks/reorder.json
     * @url https://developer.teamwork.com/projects/tasks/reorder-the-tasks
     * @example tw.tasks.reorder(tasklist_id, body)
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
     * @method GET
     * @uri /tasks/{task_id}/followers.json
     * @url https://developer.teamwork.com/projects/tasks/get-task-followers
     * @example tw.tasks.getFollowers(task_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getFollowers(task_id) {
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
     * @method PUT
     * @uri /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/set-task-followers
     * @example tw.tasks.setFollowers(task_id, body)
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
     * @method PUT
     * @uri /tasks/{task_id}.json
     * @url https://developer.teamwork.com/projects/tasks/remove-task-followers
     * @example tw.tasks.removeFollowers(task_id, body)
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
     * @method PUT
     * @uri /tasklists/{tasklist_id}/quickadd.json
     * @url https://developer.teamwork.com/projects/tasks/quickly-add-multiple-tasks
     * @example tw.tasks.quickadd(tasklist_id, body)
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
     * @method POST
     * @uri /tasks/{task_id}/time_entries.json
     * @url https://developer.teamwork.com/projects/time-tracking/create-a-time-entry-for-a-task
     * @example tw.tasks.createTime(task_id, body)
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
     * @method GET
     * @uri /tasks/{task_id}/time/total.json
     * @url https://developer.teamwork.com/projects/time-tracking/total-time-on-a-task
     * @example tw.tasks.totalTime(task_id, query_string)
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
     * @method PUT
     * @uri /tasks/{task_id}/estimatedtime.json
     * @url https://developer.teamwork.com/projects/time-tracking/total-time-on-a-task
     * @example tw.tasks.estimatedTime(task_id, body)
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
     * Get Time Entries for a Task
     * 
     * @method GET
     * @uri /tasks/{task_id}/time_entries.json
     * @url https://developer.teamwork.com/projects/time-tracking/retrieve-all-task-times
     * @example tw.tasks.getTimeEntries(task_id)
     *
     * @param  {Number}
     * @return {Promise}
     */
    getTimeEntries(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/time_entries.json`
        })
    }

    /**
     * Get Comments for a Task
     * 
     * @method GET
     * @uri /tasks/{task_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types
     * @example tw.tasks.getComments(task_id, query_string)
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
     * @method POST
     * @uri /tasks/{task_id}/comments.json
     * @url https://developer.teamwork.com/projects/comments/creating-a-comment
     * @example tw.tasks.createComment(task_id, body)
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

    /**
     * Get Files for a Task
     * 
     * @method GET
     * @uri /tasks/{task_id}/files.json
     * @url https://developer.teamwork.com/projects/files/list-files-on-a-task
     * @example tw.tasks.getFiles(task_id)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getFiles(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/files.json`
        })
    }

    /**
     * Create a File for a Task
     * 
     * @method POST
     * @uri /tasks/{task_id}/files.json
     * @url https://developer.teamwork.com/projects/files/add-a-file-to-a-task
     * @example tw.tasks.createFile(task_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createFile(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'POST',
            uri: `/tasks/${task_id}/files.json`,
            body
        })
    }

    /**
     * Get Tags from a Task
     * 
     * @method GET
     * @uri /tasks/{task_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.tasks.getTags(task_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(task_id, qs = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a Task
     * 
     * @method PUT
     * @uri /tasks/{task_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-a-single-tag
     * @example tw.tasks.updateTag(task_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'PUT',
            uri: `/tasks/${task_id}/tags.json`,
            body
        })
    }

    /**
     * Get a Task's Audit History
     * 
     * @method GET
     * @uri /tasks/{task_id}/audit.json
     * @url https://developer.teamwork.com/projects/activity/get-a-task-s-audit-history-premium-and-enterprise-plans-only
     * @example tw.tasks.audit(task_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    audit(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/audit.json`
        })
        
    }

}

module.exports = Task