## Owner

### Get Project Owner

[**GET /projects.json?includeProjectOwner=true**](https://developer.teamwork.com/projects/project-owner)

Returns the list of projects with setted Project Owner

```js
tw.owner.get()

tw.owner.get(project_id)
```

### Set Project Owner

[**GET /projects/{projId}.json**](https://developer.teamwork.com/projects/project-owner/setting-a-project-owner)

```js
tw.people.get({}, projId)
```

### Delete project owner

[**PUT /projects/{projId}.json**](https://developer.teamwork.com/projects/project-owner/removing-a-project-owner)

```js
tw.people.delete(person_id)
```
