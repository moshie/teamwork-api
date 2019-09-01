## Calendar

### Get Events

[**GET /calendarevents.json**](https://developer.teamwork.com/projects/calendar-event/get-events)

```js
tw.calendar.getEvents(query_string)
```

### Get an Event

[**GET /calendarevents/{event_id}.json**](https://developer.teamwork.com/projects/calendar-event/get-an-event)

```js
tw.calendar.getEvent(event_id)
```

### Create Event / Recurring Event

[**POST /calendarevents.json**](https://developer.teamwork.com/projects/calendar-event/create-an-event)

```js
tw.calendar.createEvent(body)
```

### Edit an event

[**PUT /calendarevents/{event_id}.json**](https://developer.teamwork.com/projects/calendar-event/edit-an-event)

```js
tw.calendar.updateEvent(event_id, body)
```

### Delete an Event

[**DELETE /calendarevents/{event_id}.json**](https://developer.teamwork.com/projects/calendar-event/delete-event)

```js
tw.calendar.deleteEvent(event_id)
```

### Get Event Types

[**GET /calendareventtypes.json**](https://developer.teamwork.com/projects/calendar-event/get-event-types)

```js
tw.calendar.getEventTypes()
```

### Create an Event Type

[**POST /eventtypes.json**](https://developer.teamwork.com/projects/calendar-event/create-an-event-type)

```js
tw.calendar.createEventType(body)
```

### Delete Event Type

[**DELETE /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/projects/calendar-event/delete-event-type)

```js
tw.calendar.deleteEventType(event_type_id)
```

### Update Event type

[**PUT /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/projects/calendar-event/edit-an-event-type)

```js
tw.calendar.updateEventType(event_type_id, body)
```
