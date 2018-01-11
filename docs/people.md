## People

[**GET /people.json**](https://developer.teamwork.com/people#get_people)

```js
tw.people.get({
	page: 2,
	pageSize: 50
})
```

[**GET /people/{person_id}.json**](https://developer.teamwork.com/people#retrieve_a_specif)

```js
tw.people.get({}, person_id)
```

[**PUT /people/{id}.json**](https://developer.teamwork.com/people#edit_user)

```js
tw.people.update(person_id, {
	"person": {
		// --
	}
})
```

[**POST /people.json**](https://developer.teamwork.com/people#add_a_new_user)

```js
tw.people.create({
	"person": {
		// --
	}
})
```

[**DELETE /people/{id}.json**](https://developer.teamwork.com/people#delete_user)

```js
tw.people.delete(person_id)
```

[**GET /me.json**](https://developer.teamwork.com/people#get_current_user_)

```js
tw.people.me()
```

[**GET /stats.json**](https://developer.teamwork.com/people#current_user_summ)

```js
tw.people.stats({
	getPermissions: true,
	onlymyprojects: 1,
	onlyMyEvents: true,
	eventsInNext: 1
})
```

[**GET /projects/{project_id}/people.json**](https://developer.teamwork.com/people#get_all_people_(w)

```js
tw.projects.getPeople()
```

[**GET /companies/{company_id}/people.json**](https://developer.teamwork.com/people#get_people_(withi)

```js
tw.companies.getPeople()
```

[**GET /people/APIKeys.json**](https://developer.teamwork.com/people#retrieve_a_api_ke)

```js
tw.people.apiKeys()
```

[**PUT /people/{person_id}.json**](https://developer.teamwork.com/people#unassign_a_user_f)

```js
tw.people.unassignAll(person_id, {
	"person": {
		// --
	}
})
```
