'use strict'

const Teamwork = require('./teamwork')

class Webhook extends Teamwork {

    /**
     * Get webhook Events
     * 
     * @return {Promise}
     */
    getEvents() {
        return this.query({
            uri: '/webhooks/events.json'
        })
    }

    /**
     * Get webhooks or webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(webhook_id) {
        return this.query({
            uri: !webhook_id ? 
                '/webhooks.json' : 
                `/webhooks/${webhook_id}.json`
        })
    }

    /**
     * Create a Webhook
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/webhooks.json',
            body
        })
    }

    /**
     * Update a Webhook
     * 
     * @param  {Number}
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    update(webhook_id, body = {}) {
        if (!webhook_id) {
            return this.handleError('No Webhook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/webhooks/${webhook_id}.json`,
            body
        })
    }

    /**
     * Resume a Webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    resume(webhook_id) {
        if (!webhook_id) {
            return this.handleError('No Webhook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/webhooks/${webhook_id}/resume.json`
        })
    }

    /**
     * Pause a Webhook
     * 
     * @param  {Number}
     * @return {Promise}
     */
    pause(webhook_id) {
        if (!webhook_id) {
            return this.handleError('No Webhook id')
        }

        return this.query({
            method: 'PUT',
            uri: `/webhooks/${webhook_id}/pause.json`
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
            return this.handleError('No Webhook id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/webhooks/${webhook_id}.json`
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
            uri: '/webhooks/enable.json'
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
            uri: '/webhooks/disable.json'
        })
    }

}

module.exports = Webhook