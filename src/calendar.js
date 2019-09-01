'use strict'

const Teamwork = require('./teamwork')

class Calendar extends Teamwork {

    /**
     * Get Events
     * 
     * @method GET
     * @uri /calendarevents.json
     * @url https://developer.teamwork.com/projects/calendar-event/get-events
     * @example tw.calendar.getEvents(query_string)
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
     * @method GET
     * @uri /calendarevents/{event_id}.json
     * @url https://developer.teamwork.com/projects/calendar-event/get-an-event
     * @example tw.calendar.getEvent(event_id)
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
     * @method POST
     * @uri /calendarevents.json
     * @url https://developer.teamwork.com/projects/calendar-event/create-an-event
     * @example tw.calendar.createEvent(body)
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
     * @method PUT
     * @uri /calendarevents/{event_id}.json
     * @url https://developer.teamwork.com/projects/calendar-event/edit-an-event
     * @example tw.calendar.updateEvent(event_id, body)
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
     * @method DELETE
     * @uri /calendarevents/{event_id}.json
     * @url https://developer.teamwork.com/projects/calendar-event/delete-event
     * @example tw.calendar.deleteEvent(event_id)
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
     * @method GET
     * @uri /calendareventtypes.json
     * @url https://developer.teamwork.com/projects/calendar-event/get-event-types
     * @example tw.calendar.getEventTypes()
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
     * @method POST
     * @uri /eventtypes.json
     * @url https://developer.teamwork.com/projects/calendar-event/create-an-event-type
     * @example tw.calendar.createEventType(body)
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
     * @method DELETE
     * @uri /eventtypes/{event_type_id}.json
     * @url https://developer.teamwork.com/projects/calendar-event/delete-event-type
     * @example tw.calendar.deleteEventType(event_type_id)
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
     * @method PUT
     * @uri /eventtypes/{event_type_id}.json
     * @url https://developer.teamwork.com/projects/calendar-event/edit-an-event-type
     * @example tw.calendar.updateEventType(event_type_id, body)
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