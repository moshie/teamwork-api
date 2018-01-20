const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Mocked Data
const calendarEventsJson = require('./mocked-responses/calendarEvents')
const calendarEventJson = require('./mocked-responses/calendarEvent')
const calendarNewEventResponse = require('./mocked-responses/calendarNewEvent')
const plainStatusOk = require('./mocked-responses/plainStatusOk')
const calendarEventType = require('./mocked-responses/calendarEventType')

const calendarEventsRequest = require('./mocked-requests/eventRequest')
const calendarReoccuringEventRequest = require('./mocked-requests/calendarReoccuringEvent')
const calendarEventUpdateRequest = require('./mocked-requests/calendarEventUpdateRequest')
const calendarEventTypeRequest = require('./mocked-requests/calendarEventTypeRequest')
const calendarEventTypeUpdatedRequest = require('./mocked-requests/calendarEventTypeUpdatedRequest')

describe('#Calendar', function () {

    it('GET /calendarevents.json', function () {
        nock(host)
            .get('/calendarevents.json?startdate=20010101&endDate=20180101')
            .reply(200, calendarEventsJson)

        let promise = tw.calendar.getEvents({
            startdate: '20010101',
            endDate: '20180101'
        })

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('events').that.is.an('array'),
            promise.should.eventually.have.deep.property('events', calendarEventsJson.events)
        ])
    })

    it('GET /calendarevents/{event_id}.json', function () {
        nock(host)
            .get('/calendarevents/12345.json')
            .reply(200, calendarEventJson)

        let promise = tw.calendar.getEvent(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('event').that.is.an('object'),
            promise.should.eventually.have.deep.property('event', calendarEventJson.event)
        ])
    })

    it('POST /calendarevents.json', function () {
        nock(host)
            .post('/calendarevents.json', calendarEventsRequest)
            .reply(201, calendarNewEventResponse)

        let promise = tw.calendar.createEvent(calendarEventsRequest)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.an('string')
        ])
    })

    it('POST /calendarevents.json (Repeat)', function () {
        nock(host)
            .post('/calendarevents.json', calendarReoccuringEventRequest)
            .reply(201, calendarNewEventResponse)

        let promise = tw.calendar.createEvent(calendarReoccuringEventRequest)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.an('string')
        ])
    })

    it('PUT /calendarevents/{event_id}.json', function () {
        nock(host)
            .put('/calendarevents/12345.json', calendarEventUpdateRequest)
            .reply(201, plainStatusOk)

        let promise = tw.calendar.updateEvent(12345, calendarEventUpdateRequest)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('DELETE /calendarevents/{event_id}.json', function () {
        nock(host)
            .delete('/calendarevents/12345.json')
            .reply(200, plainStatusOk)

        let promise = tw.calendar.deleteEvent(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('GET /calendareventtypes.json', function () {
        nock(host)
            .get('/calendareventtypes.json')
            .reply(200, calendarEventType)

        let promise = tw.calendar.getEventTypes()

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('eventtypes').that.is.an('array'),
            promise.should.eventually.have.deep.property('eventtypes', calendarEventType.eventtypes)
        ])
    })

    it('POST /eventtypes.json', function () {
        nock(host)
            .post('/eventtypes.json', calendarEventTypeRequest)
            .reply(200, calendarNewEventResponse)

        let promise = tw.calendar.createEventType(calendarEventTypeRequest)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.an('string')
        ])
    })
    
    it('DELETE /eventtypes/{event_type_id}.json', function () {
        nock(host)
            .delete('/eventtypes/12345.json')
            .reply(200, plainStatusOk)

        let promise = tw.calendar.deleteEventType(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('PUT /eventtypes/{event_type_id}.json', function () {
        nock(host)
            .put('/eventtypes/12345.json', calendarEventTypeUpdatedRequest)
            .reply(200, plainStatusOk)

        let promise = tw.calendar.updateEventType(12345, calendarEventTypeUpdatedRequest)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

})