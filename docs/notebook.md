## Notebook

### Get Notebooks or Notebook

[**GET /notebooks.json | /notebooks/{notebook_id}.json**](https://developer.teamwork.com/projects/notebooks/list-all-notebooks)

```js
tw.notebooks.get(query_string, notebook_id)
```

### Update a Notebook

[**PUT /notebooks/{notebook_id}.json**](https://developer.teamwork.com/projects/notebooks/update-a-single-notebook)

```js
tw.notebooks.update(notebook_id, body)
```

### Lock the notebook for editing

[**PUT /notebooks/{notebook_id}/lock.json**](https://developer.teamwork.com/projects/notebooks/lock-a-single-notebook-for-editing)

```js
tw.notebooks.lock(notebook_id)
```

### Unlock the notebook for editing

[**PUT /notebooks/{notebook_id}/unlock.json**](https://developer.teamwork.com/projects/notebooks/unlock-a-single-notebook)

```js
tw.notebooks.unlock(notebook_id)
```

### Delete a Notebook

[**DELETE /notebooks/{notebook_id}.json**](https://developer.teamwork.com/projects/notebooks/delete-a-single-notebook)

```js
tw.notebooks.delete(notebook_id)
```

### Copy Notebook

[**PUT /notebooks/{notebook_id}/copy.json**](https://developer.teamwork.com/projects/notebooks/copy-a-notebook-to-another-project)

```js
tw.notebooks.copy(notebook_id, body)
```

### Move Notebook

[**PUT /notebooks/{notebook_id}/move.json**](https://developer.teamwork.com/projects/notebooks/move-a-notebook-to-another-project)

```js
tw.notebooks.move(notebook_id, body)
```

### Get Comments for a Notebook

[**GET /notebooks/{notebook_id}/comments.json**](https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types)

```js
tw.notbooks.getComments(notebook_id, query_string)
```

### Create a Comment for a Notebook

[**POST /notebooks/{notebook_id}/comments.json**](https://developer.teamwork.com/projects/comments/creating-a-comment)

```js
tw.notbooks.createComment(notebook_id, body)
```

### Get Tags from a Notebook

[**GET /notebooks/{notebook_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.notebooks.getTags(notebook_id, query_string)
```

### Update a Tag on a Notebook

[**PUT /notebooks/{notebook_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.notebooks.updateTag(notebook_id, body)
```
