'use strict'

const Teamwork = require('./teamwork')

class TaskReminder extends Teamwork {

    /**
     * Get all reminders on a task
     * 
     * @method GET
     * @uri /tasks/{task_id}/reminders.json
     * @url https://developer.teamwork.com/projects/task-reminders/get-all-reminders-on-a-task
     * @example tw.taskReminders.get(task_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(task_id) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/reminders.json`
        })
    }

    /**
     * Create Reminder for a task
     * 
     * @method POST
     * @uri /tasks/{task_id}/reminders.json
     * @url https://developer.teamwork.com/projects/task-reminders/create-a-reminder-on-a-task
     * @example tw.taskReminders.create(task_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(task_id, body = {}) {
        if (!task_id) {
            return this.handleError('No Task id')
        }

        return this.query({
            method: 'POST',
            uri: `/tasks/${task_id}/reminders.json`,
            body
        })
    }

    /**
     * Update a Reminder for a task
     * 
     * @method PUT
     * @uri /taskreminders/{reminder_id}.json
     * @url https://developer.teamwork.com/projects/task-reminders/update-an-existing-reminder-on-a-task
     * @example tw.taskReminders.update(body, reminder_id, task_id)
     * 
     * @param  {Number}
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(reminder_id, body = {}) {
        return this.query({
            method: 'PUT',
            uri: `/taskreminders/${reminder_id}.json`,
            body
        })
    }

    /**
     * Delete a Reminder on a task
     * 
     * @method DELETE
     * @uri /taskreminders/{reminder_id}.json
     * @url https://developer.teamwork.com/projects/task-reminders/delete-an-existing-reminder-on-a-task
     * @example tw.taskReminders.delete(reminder_id)
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    delete(reminder_id) {
        return this.query({
            method: 'DELETE',
            uri: `/taskreminders/${reminder_id}.json`
        })
    }

}

module.exports = TaskReminder