'use strict'

const Teamwork = require('./teamwork')

class Calendar extends Teamwork {

    /**
     * Get Events
     * 
     * @param  {Object}
     * @return {Promise}
     */
    getEvents(qs = {}) {
        return this.query({
            uri: '/calendarevents.json',
            qs
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
            return this.handleError('No Event id')
        }

        return this.query({
            uri: `/calendarevents/${event_id}.json`
        })
    }

    /**
     * Create Event / Recurring Event
     * 
     * @param  {Object}
     * @return {Promise}
     */
    createEvent(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/calendarevents.json',
            body
        })
    }

    /**
     * Edit an event
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateEvent(event_id, body = {}) {
        if (!event_id) {
            return this.handleError('No Event id')
        }

        return this.query({
            method: 'PUT',
            uri: `/calendarevents/${event_id}.json`,
            body
        })
    }

    /**
     * Delete an Event
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteEvent(event_id) {
        if (!event_id) {
            return this.handleError('No Event id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/calendarevents/${event_id}.json`
        })
    }
    
    /**
     * Get Event Types
     * 
     * @return {Promise}
     */
    getEventTypes() {
        return this.query({
            uri: '/calendareventtypes.json'
        })
    }

    /**
     * Create an Event Type
     * 
     * @param  {Object}
     * @return {Promise}
     */
    createEventType(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/eventtypes.json',
            body
        })
    }

    /**
     * Delete Event Type
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteEventType(event_type_id) {
        if (!event_type_id) {
            return this.handleError('No Event Type id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/eventtypes/${event_type_id}.json`
        })
    }

    /**
     * Update Event type
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateEventType(event_type_id, body = {}) {
        if (!event_type_id) {
            return this.handleError('No Event Type id')
        }

        return this.query({
            method: 'PUT',
            uri: `/eventtypes/${event_type_id}.json`,
            body
        })
    }

}

module.exports = Calendar