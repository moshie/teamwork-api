## Status

### Create Status

[**POST /people/{person_id}/status.json**](https://developer.teamwork.com/people-status#create_status)

```js
tw.status.create(person_id, {
	"userstatus": {
		// --
	}
})
```

### Update Current User Status

[**PUT /me/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```js
tw.status.updateMe(status_id, {
	"userstatus": {
		// --
	}
})
```

### Update Status

[**PUT /people/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```js
tw.status.update(status_id, {
	"userstatus": {
		// --
	}
})
```

### Update Status

[**PUT /people/{person_id}/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```js
tw.status.update(status_id, person_id, {
	"userstatus": {
		// --
	}
})
```

### Delete Current User Status

[**DELETE /me/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```js
tw.status.deleteMe(status_id)
```

### Delete Status

[**DELETE /people/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```js
tw.status.delete(status_id)
```

### Delete Status

[**DELETE /people/{person_id}/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```js
tw.status.delete(status_id, person_id)
```

### Retrieve a Persons Status

[**GET /me/status.json**](https://developer.teamwork.com/people-status#retrieve_a_person)

```js
tw.status.get()
```

### Retrieve a Persons Status

[**GET /people/{user_id}/status.json**](https://developer.teamwork.com/people-status#retrieve_a_person)

```js
tw.status.get(user_id)
```

### Retrieve Everybodys Status

[**GET /people/status.json**](https://developer.teamwork.com/people-status#retrieve_everybod)

```js
tw.people.status()
```
