'use strict'

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
            return this.handleError('No Task id')
        }

        return this.query({
            uri: `/tasks/${task_id}/reminders.json`
        })
    }

    /**
     * Create Reminder for a task
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
     * @param  {Number}
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(body = {}, reminder_id, task_id) {
        return this.query({
            method: 'PUT',
            uri: !task_id ? 
                `/taskreminders/${reminder_id}.json` :
                `/tasks/${task_id}/reminders/${reminder_id}.json`,
            body
        })
    }

    /**
     * Delete a Reminder on a task
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    delete(reminder_id, task_id) {
        return this.query({
            method: 'DELETE',
            uri: !task_id ? 
                `/taskreminders/${reminder_id}.json` :
                `/tasks/${task_id}/reminders/${reminder_id}.json`
        })
    }

}

module.exports = TaskReminder