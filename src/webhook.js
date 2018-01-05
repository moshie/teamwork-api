"use strict"

const Teamwork = require('./teamwork')

class Webhook extends Teamwork {

    /**
     * Get webhook Events
     * 
     * @return {Promise}
     */
    getEvents() {
        return this.query({
            path: `/webhooks/events.json`
        })
    }

    /**
     * Get webhooks or webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(webhook_id) {
        const path = !webhook_id ? 
            '/webhooks.json' : 
            `/webhooks/${webhook_id}.json`

        return this.query({
            path
        })
    }

    /**
     * Create a Webhook
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(webhook_object = {}) {
        if (!Object.keys(webhook_object).length) {
            return this.handleError('No webhook request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/webhooks.json`
        }, webhook_object)
    }

    /**
     * Update a Webhook
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(webhook_id, webhook_object = {}) {
        if (!webhook_id || !Object.keys(webhook_object).length) {
            return this.handleError('No webhook id or webhook request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/webhooks/${webhook_id}.json`
        }, webhook_object)
    }

    /**
     * Resume a Webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    resume(webhook_id) {
        if (!webhook_id) {
            return this.handleError('No webhook id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/webhooks/${webhook_id}/resume.json`
        })
    }

    /**
     * Pause a Webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    resume(webhook_id) {
        if (!webhook_id) {
            return this.handleError('No webhook id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/webhooks/${webhook_id}/pause.json`
        })
    }

    /**
     * Delete a webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(webhook_id) {
        if (!webhook_id) {
            return this.handleError('No webhook id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/webhooks/${webhook_id}.json`
        })
    }

    /**
     * Enable Webhooks
     * 
     * @param  {Number}
     * @return {Promise}
     */
    enable() {
        return this.query({
            method: 'PUT',
            path: `/webhooks/enable.json`
        })
    }

    /**
     * Disable Webhooks
     * 
     * @param  {Number}
     * @return {Promise}
     */
    disable() {
        return this.query({
            method: 'PUT',
            path: `/webhooks/disable.json`
        })
    }

}

module.exports = Webhook