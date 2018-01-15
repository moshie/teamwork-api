## Project Roles

### List Roles on a Project

[**GET /projects/{id}/roles.json**](https://developer.teamwork.com/projectroles#list_roles_on_a_p)

```js
tw.projects.getRoles(project_id)
```

### Add a role to a project

[**POST /projects/{id}/roles.json**](https://developer.teamwork.com/projectroles#add_a_role_to_a_p)

```js
tw.roles.create(project_id, {
	"role": {
		// --
	}
})
```

### Update a role on a project

[**PUT /roles/{id}.json**](https://developer.teamwork.com/projectroles#update_a_role_on_)

```js
tw.roles.update(role_id, {
	"role": {
		// --
	}
})
```

### Delete a role

[**DELETE /roles/{id}.json**](https://developer.teamwork.com/projectroles#delete_a_role)

```js
tw.roles.delete(role_id)
```

### Get an individual role

[**GET /roles/{role_id}.json**](https://developer.teamwork.com/projectroles#get_an_individual)

```js
tw.roles.get(role_id)
```
