## People

### Get people

[**GET /people.json**](https://developer.teamwork.com/people#get_people)

```js
tw.people.get({
	page: 2,
	pageSize: 50
})
```

### Retrieve a Specific Person

[**GET /people/{person_id}.json**](https://developer.teamwork.com/people#retrieve_a_specif)

```js
tw.people.get({}, person_id)
```

### Edit user

[**PUT /people/{id}.json**](https://developer.teamwork.com/people#edit_user)

```js
tw.people.update(person_id, {
	"person": {
		// --
	}
})
```

### Add a new user

[**POST /people.json**](https://developer.teamwork.com/people#add_a_new_user)

```js
tw.people.create({
	"person": {
		// --
	}
})
```

### Delete user

[**DELETE /people/{id}.json**](https://developer.teamwork.com/people#delete_user)

```js
tw.people.delete(person_id)
```

### Get Current User Details

[**GET /me.json**](https://developer.teamwork.com/people#get_current_user_)

```js
tw.people.me()
```

### Current User Summary Stats

[**GET /stats.json**](https://developer.teamwork.com/people#current_user_summ)

```js
tw.people.stats({
	getPermissions: true,
	onlymyprojects: 1,
	onlyMyEvents: true,
	eventsInNext: 1
})
```

### Get all People (within a Project)

[**GET /projects/{project_id}/people.json**](https://developer.teamwork.com/people#get_all_people_(w)

```js
tw.projects.getPeople()
```

### Get People (within a Company)

[**GET /companies/{company_id}/people.json**](https://developer.teamwork.com/people#get_people_(withi)

```js
tw.companies.getPeople()
```

### Retrieve a API Keys for all people on account

[**GET /people/APIKeys.json**](https://developer.teamwork.com/people#retrieve_a_api_ke)

```js
tw.people.apiKeys()
```

### Unassign a user from all Tasks

[**PUT /people/{person_id}.json**](https://developer.teamwork.com/people#unassign_a_user_f)

```js
tw.people.unassignAll(person_id, {
	"person": {
		// --
	}
})
```
