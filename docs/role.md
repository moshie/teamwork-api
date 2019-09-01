## Role

### Get a Role

[**GET /roles/{role_id}.json**](https://developer.teamwork.com/projects/project-roles/get-an-individual-role)

```js
tw.roles.get(role_id)
```

### Create a role

[**POST /projects/{project_id}/roles.json**](https://developer.teamwork.com/projects/project-roles/add-a-role-to-a-project)

```js
tw.roles.create(project_id, body)
```

### Update a Role

[**PUT /roles/{role_id}.json**](https://developer.teamwork.com/projects/project-roles/update-a-role-on-a-project)

```js
tw.roles.update(role_id, body)
```

### Delete a Role

[**DELETE /roles/{role_id}.json**](https://developer.teamwork.com/projects/project-roles/delete-a-role)

```js
tw.roles.delete(role_id)
```
