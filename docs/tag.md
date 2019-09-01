## Tag

### Get tags or tag

[**GET /tags.json | /tags/{tag_id}.json**](https://developer.teamwork.com/projects/people-status/delete-user-status)

```js
tw.tags.get(query_string, tag_id)
```

### Create a tag

[**POST /tags.json**](https://developer.teamwork.com/projects/tags/create-a-single-tag)

```js
tw.tags.create(body)
```

### Update a tag

[**PUT /tags/${tag_id}.json**](https://developer.teamwork.com/projects/tags/update-a-single-tag)

```js
tw.tags.update(tag_id, body)
```

### Delete a tag

[**DELETE /tags/${tag_id}.json**](https://developer.teamwork.com/projects/tags/delete-a-single-tag)

```js
tw.tags.delete(tag_id)
```
