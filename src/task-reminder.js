"use strict"

const Teamwork = require('./teamwork')

class TaskReminder extends Teamwork {

    /**
     * Get all reminders on a task
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(task_id) {
        if (!task_id) {
            return this.handleError('No task id provided')
        }

        return this.query({
            path: `/tasks/${task_id}/reminders.json`
        })
    }

    /**
     * Create Reminder for a task
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(task_id, reminder_object = {}) {
        if (!task_id || !Object.keys(reminder_object).length) {
            return this.handleError('No task id or reminder request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/tasks/${task_id}/reminders.json`
        }, reminder_object)
    }

    /**
     * Update a Reminder for a task
     * 
     * @param  {Number}
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(reminder_object = {}, reminder_id, task_id) {
        const path = !reminder_id ? 
            `/taskreminders/${reminder_id}.json` :
            `/tasks/${task_id}/reminders/${reminder_id}.json`

        return this.query({
            method: 'PUT',
            path
        }, reminder_object)
    }

    /**
     * Delete a Reminder on a task
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    delete(reminder_id, task_id) {
        const path = !reminder_id ? 
            `/taskreminders/${reminder_id}.json` :
            `/tasks/${task_id}/reminders/${reminder_id}.json`

        return this.query({
            method: 'DELETE',
            path
        })
    }

}

module.exports = TaskReminder