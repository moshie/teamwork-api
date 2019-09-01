## Comment

### Retrieving a Specific Comment

[**GET /comments/{comment_id}.json**](https://developer.teamwork.com/projects/comments/retrieving-a-specific-comment)

```js
tw.comments.get(comment_id)
```

### Update a Comment

[**PUT /comments/{comment_id}.json**](https://developer.teamwork.com/projects/comments/updating-a-comment)

```js
tw.comments.update(comment_id, body)
```

### Delete Comment

[**DELETE /comments/{comment_id}.json**](https://developer.teamwork.com/projects/comments/deleting-a-comment)

```js
tw.comments.delete(comment_id)
```

### Mark Comment as read

[**PUT /comments/{comment_id}/markread.json**](https://developer.teamwork.com/projects/comments/mark-a-comment-as-read)

```js
tw.comments.read(comment_id)
```
