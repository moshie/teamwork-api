## Permissions

[**POST /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#add_a_new_user_to)

```
tw.projects.addPeople(project_id, person_id)
```

[**PUT /projects/{id}/people.json**](https://developer.teamwork.com/permissions#add/remove_multip)

```
tw.projects.people(project_id, {
	"add": {
		// --
	},
	"remove": {
		// --
	}
})
```

[**DELETE /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#remove_a_user_fro)

```
tw.projects.removePeople(project_id, person_id)
```

[**GET /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#get_a_users_permi)

```
tw.projects.getPermissions(project_id, person_id)
```

[**PUT /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#update_a_users_pe)

```
tw.projects.updatePermissions(project_id, person_id, {
	"permissions": {
		// --
	}
})
```