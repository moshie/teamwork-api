const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// RESPONSES
const Events = require('./mocked-responses/calendar_Events')
const Event = require('./mocked-responses/calendar_Event')
const EventTypes = require('./mocked-responses/calendar_EventTypes')

const teamwork_default = require('./mocked-responses/status-ok')
const teamwork_id_status = require('./mocked-responses/status-ok-and-id')

// REQUESTS
const EventCreate = require('./mocked-requests/calendar_POST_event')
const RepeatingEventCreate = require('./mocked-requests/calendar_POST_RepeatingEvent')
const EventUpdate = require('./mocked-requests/calendar_PUT_Event')
const EventTypeUpdate = require('./mocked-requests/calendar_PUT_EventType')
const EventTypeCreate = require('./mocked-requests/calendar_POST_EventType')

describe('#Calendar', function () {

    it('GET /calendarevents.json', function () {
        nock(host)
            .get('/calendarevents.json?startdate=20010101&endDate=20180101')
            .reply(200, Events)

        let promise = tw.calendar.getEvents({
            startdate: '20010101',
            endDate: '20180101'
        })

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('events').that.is.an('array'),
            promise.should.eventually.have.deep.property('events', Events.events)
        ])
    })

    it('GET /calendarevents/{event_id}.json', function () {
        nock(host)
            .get('/calendarevents/12345.json')
            .reply(200, Event)

        let promise = tw.calendar.getEvent(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('event').that.is.an('object'),
            promise.should.eventually.have.deep.property('event', Event.event)
        ])
    })

    it('POST /calendarevents.json', function () {
        nock(host)
            .post('/calendarevents.json', EventCreate)
            .reply(201, teamwork_id_status)

        let promise = tw.calendar.createEvent(EventCreate)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.an('string')
        ])
    })

    it('POST /calendarevents.json (Repeat)', function () {
        nock(host)
            .post('/calendarevents.json', RepeatingEventCreate)
            .reply(201, teamwork_id_status)

        let promise = tw.calendar.createEvent(RepeatingEventCreate)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.an('string')
        ])
    })

    it('PUT /calendarevents/{event_id}.json', function () {
        nock(host)
            .put('/calendarevents/12345.json', EventUpdate)
            .reply(201, teamwork_default)

        let promise = tw.calendar.updateEvent(12345, EventUpdate)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('DELETE /calendarevents/{event_id}.json', function () {
        nock(host)
            .delete('/calendarevents/12345.json')
            .reply(200, teamwork_default)

        let promise = tw.calendar.deleteEvent(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('GET /calendareventtypes.json', function () {
        nock(host)
            .get('/calendareventtypes.json')
            .reply(200, EventTypes)

        let promise = tw.calendar.getEventTypes()

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('eventtypes').that.is.an('array'),
            promise.should.eventually.have.deep.property('eventtypes', EventTypes.eventtypes)
        ])
    })

    it('POST /eventtypes.json', function () {
        nock(host)
            .post('/eventtypes.json', EventTypeCreate)
            .reply(200, teamwork_id_status)

        let promise = tw.calendar.createEventType(EventTypeCreate)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.an('string')
        ])
    })
    
    it('DELETE /eventtypes/{event_type_id}.json', function () {
        nock(host)
            .delete('/eventtypes/12345.json')
            .reply(200, teamwork_default)

        let promise = tw.calendar.deleteEventType(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('PUT /eventtypes/{event_type_id}.json', function () {
        nock(host)
            .put('/eventtypes/12345.json', EventTypeUpdate)
            .reply(200, teamwork_default)

        let promise = tw.calendar.updateEventType(12345, EventTypeUpdate)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

})