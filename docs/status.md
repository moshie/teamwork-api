## Status

[**POST /people/{person_id}/status.json**](https://developer.teamwork.com/people-status#create_status)

```js
tw.status.create(person_id, {
	"userstatus": {
		// --
	}
})
```

[**PUT /me/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```js
tw.status.updateMe(status_id, {
	"userstatus": {
		// --
	}
})
```

[**PUT /people/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```js
tw.status.update(status_id, {
	"userstatus": {
		// --
	}
})
```

[**PUT /people/{person_id}/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```js
tw.status.update(status_id, person_id, {
	"userstatus": {
		// --
	}
})
```

[**DELETE /me/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```js
tw.status.deleteMe(status_id)
```

[**DELETE /people/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```js
tw.status.delete(status_id)
```

[**DELETE /people/{person_id}/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```js
tw.status.delete(status_id, person_id)
```

[**GET /me/status.json**](https://developer.teamwork.com/people-status#retrieve_a_person)

```js
tw.status.get()
```

[**GET /people/{user_id}/status.json**](https://developer.teamwork.com/people-status#retrieve_a_person)

```js
tw.status.get(user_id)
```

[**GET /people/status.json**](https://developer.teamwork.com/people-status#retrieve_everybod)

```js
tw.people.status()
```
