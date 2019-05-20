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
tw.owners.set(project_id, {
  'project': {
    'projectOwnerId': people_id
  }
})

```

### Delete project owner

[**PUT /projects/{projId}.json**](https://developer.teamwork.com/projects/project-owner/removing-a-project-owner)

```js
tw.owner.delete(project_id)
```
