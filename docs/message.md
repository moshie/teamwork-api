## Message

### Get a Message

[**GET /posts/{message_id}.json**](https://developer.teamwork.com/projects/messages/retrieve-a-single-message)

```js
tw.messages.get(message_id)
```

### Update a Message

[**PUT /posts/{message_id}.json**](https://developer.teamwork.com/projects/messages/update-message)

```js
tw.messages.update(message_id, body)
```

### Archive a Message

[**PUT /messages/{message_id}/archive.json**](https://developer.teamwork.com/projects/messages/archive-a-message)

```js
tw.messages.archive(message_id)
```

### Unarchive a message

[**PUT /messages/{message_id}/unarchive.json**](https://developer.teamwork.com/projects/messages/un-archive-a-message)

```js
tw.messages.unArchive(message_id)
```

### Delete a Message

[**DELETE /posts/{message_id}.json**](https://developer.teamwork.com/projects/messages/delete-message)

```js
tw.messages.delete(message_id)
```

### Mark a Message as Read

[**PUT /messages/{message_id}/markread.json**](https://developer.teamwork.com/projects/messages/mark-message-as-read)

```js
tw.messages.read(message_id)
```

### Create a Message Reply

[**POST /messages/{message_id}/messageReplies.json**](https://developer.teamwork.com/projects/message-replies/create-a-message-reply)

```js
tw.messages.createReply(message_id, body)
```

### Get a Message Reply

[**GET /messageReplies/{message_id}.json**](https://developer.teamwork.com/projects/message-replies/retrieve-a-single-message-reply)

```js
tw.messages.getReply(message_id)
```

### Get Replies from a Message

[**GET /messages/{message_id}/replies.json**](https://developer.teamwork.com/projects/message-replies/retrieve-replies-to-a-message)

```js
tw.messages.getReplies(message_id, query_string)
```

### Update a Message Reply

[**PUT /messageReplies/{message_id}.json**](https://developer.teamwork.com/projects/message-replies/update-message-reply)

```js
tw.messages.updateReply(message_id, body)
```

### Delete a Reply

[**DELETE /messageReplies/{message_id}.json**](https://developer.teamwork.com/projects/message-replies/delete-message-reply)

```js
tw.messages.deleteReply(message_id)
```

### Mark Reply as Read

[**PUT /messageReplies/{message_id}/markread.json**](https://developer.teamwork.com/projects/message-replies/mark-message-reply-as-read)

```js
tw.messages.readReply(message_id)
```

### Get Tags from a Message

[**GET /messages/{message_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.messages.getTags(message_id, query_string)
```

### Update a Tag on a Message

[**PUT /messages/{message_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.messages.updateTag(message_id, body)
```
