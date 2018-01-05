"use strict"

const Teamwork = require('./teamwork')

class Calendar extends Teamwork {

    /**
     * Get Events
     * 
     * @param  {Object}
     * @return {Promise}
     */
    getEvents(options = {}) {
        return this.query({
            path: this.params('/calendarevents.json', options)
        })
    }

    /**
     * Get an Event
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getEvent(event_id) {
        if (!event_id) {
            return this.handleError('No event id provided')
        }

        return this.query({
            path: `/calendarevents/${event_id}.json`
        })
    }

    /**
     * Create Event
     * 
     * @param  {Object}
     * @return {Promise}
     */
    createEvent(event_object = {}) {
        if (!Object.keys(event_object).length) {
            this.handleError('No event object provided')
        }

        return this.query({
            method: 'POST',
            path: '/calendarevents.json'
        }, event_object)
    }

    /**
     * Update an Event
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateEvent(event_id, event_object = {}) {
        if (!event_id || !Object.keys(event_object).length) {
            return this.handleError('No Event id or event request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/calendarevents/${event_id}.json`
        }, event_object)
    }

    /**
     * Delete an Event
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteEvent(event_id) {
        if (!event_id) {
            return this.handleError('No event id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/calendarevents/${event_id}.json`
        })
    }
    
    /**
     * Get Event Types
     * 
     * @return {Promise}
     */
    getEventTypes() {
        return this.query({
            path: `/calendareventtypes.json`
        })
    }

    /**
     * Create an Event Type
     * 
     * @param  {Object}
     * @return {Promise}
     */
    createEventType(event_type_object = {}) {
        if (!Object.keys(event_type_object).length) {
            this.handleError('No event type object provided')
        }

        return this.query({
            method: 'POST',
            path: '/eventtypes.json'
        }, event_type_object)
    }

    /**
     * Delete Event Type
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteEventType(event_type_id) {
        if (!event_type_id) {
            return this.handleError('No event type id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/eventtypes/${event_type_id}.json`
        })
    }

    /**
     * Update Event type
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateEventType(event_type_id, event_type_object = {}) {
        if (!event_type_id || !Object.keys(event_type_object).length) {
            return this.handleError('No Event type id or event type request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/eventtypes/${event_type_id}.json`
        }, event_type_object)
    }

}

module.exports = Calendar