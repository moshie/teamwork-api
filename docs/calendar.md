## Calendar

[**GET /calendarevents.json**](https://developer.teamwork.com/events#get_events)

```
tw.calendar.getEvents({
	startdate: '',
	enddate: '',
	showDeleted: true,
	updatedAfterDate: '',
	eventTypeId: 0
})
```

[**GET /calendarevents/{id}.json**](https://developer.teamwork.com/events#get_an_event)

```
tw.calendar.getEvent(event_id)
```

[**POST /calendarevents.json**](https://developer.teamwork.com/events#create_an_event)

```
tw.calendar.createEvent({
	"event": {
		// --
		"repeat": {}
	}
})
```

[**PUT /calendarevents/{id}.json**](https://developer.teamwork.com/events#edit_an_event)

```
tw.calendar.updateEvent(event_id, {
	"event": {
		// --
	}
})
```

[**DELETE /calendarevents/{id}.json**](https://developer.teamwork.com/events#delete_event)

```
tw.calendar.deleteEvent(event_id)
```

[**GET /calendareventtypes.json**](https://developer.teamwork.com/events#get_event_types)

```
tw.calendar.getEventTypes()
```

[**POST /eventtypes.json**](https://developer.teamwork.com/events#create_an_event_t)

```
tw.calendar.createEventType({
	"eventtype": {
		// --
	}
})
```

[**DELETE /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/events#delete_an_event_t)

```
tw.calendar.deleteEventType(event_type_id)
```

[**PUT /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/events#edit_an_event_typ)

```
tw.calendar.updateEventType(event_type_id, {
	"eventtype": {
		// --
	}
})
```