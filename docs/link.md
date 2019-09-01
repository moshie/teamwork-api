## Link

### Get links or link

[**GET /links.json | /links/{link_id}.json**](https://developer.teamwork.com/projects/links/list-all-links)

```js
tw.links.get(link_id)
```

### Create a link

[**POST /projects/{project_id}/links.json**](https://developer.teamwork.com/projects/links/create-a-single-link)

```js
tw.links.create(project_id, body)
```

### Update a link

[**PUT /links/{link_id}.json**](https://developer.teamwork.com/projects/links/update-a-single-link)

```js
tw.links.update(link_id, body)
```

### Delete a Link

[**DELETE /links/${link_id}.json**](https://developer.teamwork.com/projects/links/delete-a-single-link)

```js
tw.links.delete(link_id)
```

### Get Comments for a Link

[**GET /links/{link_id}/comments.json**](https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types)

```js
tw.links.getComments(link_id, query_string)
```

### Create a Comment for a Link

[**POST /links/{link_id}/comments.json**](https://developer.teamwork.com/projects/comments/creating-a-comment)

```js
tw.links.createComment(link_id, body)
```

### Get Tags from a Link

[**GET /links/${link_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.links.getTags(link_id, query_string)
```

### Update a Tag on a Link

[**PUT /links/${link_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.links.updateTag(link_id, body)
```
