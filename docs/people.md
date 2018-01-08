## People

[**GET /people.json**](https://developer.teamwork.com/people#get_people)

```
tw.people.get({
	page: 2,
	pageSize: 50
})
```

[**GET /people/{person_id}.json**](https://developer.teamwork.com/people#retrieve_a_specif)

```
tw.people.get({}, person_id)
```

[**PUT /people/{id}.json**](https://developer.teamwork.com/people#edit_user)

```
tw.people.update(person_id, {
	"person": {
		// --
	}
})
```

[**POST /people.json**](https://developer.teamwork.com/people#add_a_new_user)

```
tw.people.create()
```

[**DELETE /people/{id}.json**](https://developer.teamwork.com/people#delete_user)

```
tw.people.delete(person_id)
```

[**GET /me.json**](https://developer.teamwork.com/people#get_current_user_)

```
tw.people.me()
```

[**GET /stats.json**](https://developer.teamwork.com/people#current_user_summ)

```
tw.people.stats({
	getPermissions: true,
	onlymyprojects: 1,
	onlyMyEvents: true,
	eventsInNext: 1
})
```

[**GET /projects/{project_id}/people.json**](https://developer.teamwork.com/people#get_all_people_(w)

```
tw.projects.getPeople()
```

[**GET /companies/{company_id}/people.json**](https://developer.teamwork.com/people#get_people_(withi)
tw.companies.getPeople() - ✓

[**GET /people/APIKeys.json**](https://developer.teamwork.com/people#retrieve_a_api_ke)

```
tw.people.apiKeys()
```

[**PUT /people/{person_id}.json**](https://developer.teamwork.com/people#unassign_a_user_f)

```
tw.people.unassignAll(person_id, {
	"person": {
		// --
	}
})
```