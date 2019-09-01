## Status

### Get a status or your status

[**GET /statuses.json | /people/{user_id}/status.json**](https://developer.teamwork.com/projects/people-status/retrieve-everybody-status)

```js
tw.status.get(user_id)
```

### Get your status

[**GET /me/status.json**](https://developer.teamwork.com/projects/people-status/retrieve-my-status)

```js
tw.status.getMe()
```

### Create your status

[**POST /me/status.json**](https://developer.teamwork.com/projects/people-status/create-my-status)

```js
tw.status.create(body)
```

### Update your status

[**PUT /me/status/{status_id}.json**](https://developer.teamwork.com/projects/people-status/update-my-status)

```js
tw.status.updateMe(status_id, body)
```

### Update a status

[**PUT /people/status/${status_id}.json | /people/${person_id}/status/{status_id}.json**](https://developer.teamwork.com/projects/people-status/update-user-status)

```js
tw.status.update(status_id, person_id, body)
```

### delete your Profile status

[**DELETE /me/status/{status_id}.json**](https://developer.teamwork.com/projects/people-status/delete-my-status)

```js
tw.status.deleteMe(status_id)
```

### Delete a status

[**DELETE /people/status/${status_id}.json | /people/${person_id}/status/{status_id}.json**](https://developer.teamwork.com/projects/people-status/delete-user-status)

```js
tw.status.delete(status_id, person_id)
```
