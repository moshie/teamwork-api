## People

### Get People or Person

[**GET /people.json | /people/{person_id}.json**](https://developer.teamwork.com/projects/people/get-all-people)

```js
tw.people.get(query_string, person_id)
```

### Create a Person

[**POST /people.json**](https://developer.teamwork.com/projects/people/creates-a-new-user-account)

```js
tw.people.create(body)
```

### Update a Person

[**PUT /people/{person_id}.json**](https://developer.teamwork.com/projects/people/editing-a-user)

```js
tw.people.update(person_id, body)
```

### Delete a Person

[**DELETE /people/{person_id}.json**](https://developer.teamwork.com/projects/people/delete-user)

```js
tw.people.update(person_id)
```

### Get Person accociated with api key

[**GET /me.json**](https://developer.teamwork.com/projects/people/get-current-user-details)

```js
tw.people.me()
```

### Get Stats

[**GET /stats.json**](https://developer.teamwork.com/projects/people/current-user-summary-stats)

```js
tw.people.stats(query_string)
```

### Get Api Keys

[**GET /people/APIKeys.json**](https://developer.teamwork.com/projects/people/retrieve-all-api-keys-for-all-people-on-account)

```js
tw.people.apiKeys()
```

### Unassign people from all tasks

[**PUT /people/{person_id}.json**](https://developer.teamwork.com/projects/people/unassign-a-user-from-all-tasks)

```js
tw.people.unassignAll(person_id, body)
```

### Get the status of all people

[**GET /people/status.json**](https://developer.teamwork.com/projects/people-status/retrieve-everybody-status)

```js
tw.people.status()
```

### Get Logged time from a person

[**GET /people/{person_id}/loggedtime.json**](https://developer.teamwork.com/projects/time-tracking/get-a-persons-total-logged-time)

```js
tw.people.loggedTime(person_id, query_string)
```

### Get Tags from a Person

[**GET /users/{person_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.people.getTags(person_id, query_string)
```

### Update a Tag on a Person

[**PUT /users/{person_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.people.updateTag(person_id, body)
```

### Get all clock ins

[**GET /people/${person_id}/clockins.json**](https://developer.teamwork.com/projects/clock-in-clock-out/get-all-clock-ins)

```js
tw.people.clockIns(person_id, query_string)
```
