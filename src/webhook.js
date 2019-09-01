'use strict'

const Teamwork = require('./teamwork')

class Webhook extends Teamwork {

    /**
     * Get webhook Events
     * 
     * @method GET
     * @uri /webhooks/events.json
     * @url https://developer.teamwork.com/projects/webhooks/get-a-list-of-all-webhook-events-that-can-be-used
     * @example tw.webhooks.getEvents()
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
     * @method GET
     * @uri /webhooks.json | /webhooks/{webhook_id}.json
     * @url https://developer.teamwork.com/projects/webhooks/get-all-webhooks-set-on-your-account
     * @example tw.webhooks.get(webhook_id)
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
     * @method POST
     * @uri /webhooks.json
     * @url https://developer.teamwork.com/projects/webhooks/create-a-new-webhook-on-your-account
     * @example tw.webhooks.create(body)
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
     * @method PUT
     * @uri /webhooks/{webhook_id}.json
     * @url https://developer.teamwork.com/projects/webhooks/update-a-specific-webhook-set-on-your-account
     * @example tw.webhooks.update(webhook_id, body)
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
     * @method PUT
     * @uri /webhooks/{webhook_id}/resume.json
     * @url https://developer.teamwork.com/projects/webhooks/resume-a-specific-webhook-set-on-your-account
     * @example tw.webhooks.resume(webhook_id)
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
     * @method PUT
     * @uri /webhooks/{webhook_id}/pause.json
     * @url https://developer.teamwork.com/projects/webhooks/pause-a-specific-webhook-set-on-your-account
     * @example tw.webhooks.pause(webhook_id)
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
     * @method DELETE
     * @uri /webhooks/{webhook_id}.json
     * @url https://developer.teamwork.com/projects/webhooks/delete-a-specific-webhook-on-your-account
     * @example tw.webhooks.delete(webhook_id)
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
     * @method PUT
     * @uri /webhooks/enable.json
     * @url https://developer.teamwork.com/projects/webhooks/enable-webhooks-on-your-teamwork-com-projects-account
     * @example tw.webhooks.enable()
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
     * @method PUT
     * @uri /webhooks/disable.json
     * @url https://developer.teamwork.com/projects/webhooks/disable-webhooks-on-your-teamwork-com-projects-account
     * @example tw.webhooks.disable()
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