## Calendar

### Get Events

[**GET /calendarevents.json**](https://developer.teamwork.com/events#get_events)

```js
tw.calendar.getEvents({
	startdate: '',
	enddate: '',
	showDeleted: true,
	updatedAfterDate: '',
	eventTypeId: 0
})
```

### Get an Event

[**GET /calendarevents/{id}.json**](https://developer.teamwork.com/events#get_an_event)

```js
tw.calendar.getEvent(event_id)
```

### Create an event

[**POST /calendarevents.json**](https://developer.teamwork.com/events#create_an_event)

```js
tw.calendar.createEvent({
	"event": {
		// --
		"repeat": {}
	}
})
```

### Edit an event

[**PUT /calendarevents/{id}.json**](https://developer.teamwork.com/events#edit_an_event)

```
tw.calendar.updateEvent(event_id, {
	"event": {
		// --
	}
})
```

### Delete event

[**DELETE /calendarevents/{id}.json**](https://developer.teamwork.com/events#delete_event)

```
tw.calendar.deleteEvent(event_id)
```

### Get event types

[**GET /calendareventtypes.json**](https://developer.teamwork.com/events#get_event_types)

```
tw.calendar.getEventTypes()
```

### Create an Event Type

[**POST /eventtypes.json**](https://developer.teamwork.com/events#create_an_event_t)

```
tw.calendar.createEventType({
	"eventtype": {
		// --
	}
})
```

### Delete an Event Type

[**DELETE /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/events#delete_an_event_t)

```
tw.calendar.deleteEventType(event_type_id)
```

### Edit an Event Type

[**PUT /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/events#edit_an_event_typ)

```
tw.calendar.updateEventType(event_type_id, {
	"eventtype": {
		// --
	}
})
```