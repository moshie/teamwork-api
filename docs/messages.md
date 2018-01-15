## Messages

### Create a message

[**POST /projects/{project_id}/posts.json**](https://developer.teamwork.com/messages#create_a_message)

```js
tw.projects.createMessage(project_id, {
	"post": {
		// --
	}
})
```

### Retrieve a Single Message

[**GET /posts/{id}.json**](https://developer.teamwork.com/messages#retrieve_a_single)

```js
tw.messages.get(message_id)
```

### Retrieve Latest Messages

[**GET /projects/{project_id}/posts.json**](https://developer.teamwork.com/messages#retrieve_latest_m)

```js
tw.projects.getMessages(project_id, false)
```

### Retrieve Messages by Category

[**GET /projects/{project_id}/cat/{category_id}/posts.json**](https://developer.teamwork.com/messages#retrieve_messages)

```js
tw.projects.getCategoryMessages(project_id, category_id, false)
```

### Update message

[**PUT /posts/{id}.json**](https://developer.teamwork.com/messages#update_message)

```js
tw.messages.update(message_id, {
	"post": {
		// --
	}
})
```

### Get archived messages

[**GET /projects/{project_id}/posts/archive.json**](https://developer.teamwork.com/messages#get_archived_mess)

```js
tw.projects.getMessages(project_id, true)
```

### Get archived messages by category

[**GET /projects/{project_id}/cat/{category_id}/posts/archive.json**](https://developer.teamwork.com/messages#get_archived_mess)

```js
tw.projects.getCategoryMessages(project_id, category_id, true)
```

### Archive a message

[**PUT /messages/{id}/archive.json**](https://developer.teamwork.com/messages#archive_a_message)

```js
tw.messages.archive(message_id)
```

### Un-archive a message

[**PUT /messages/{id}/unarchive.json**](https://developer.teamwork.com/messages#un-archive_a_mess)

```js
tw.messages.unArchive(message_id)
```

### Destroy message

[**DELETE /posts/{id}.json**](https://developer.teamwork.com/messages#destroy_message)

```js
tw.messages.delete(message_id)
```

### Mark Message Read

[**PUT /messages/{id}/markread.json**](https://developer.teamwork.com/messages#mark_message_read)

```js
tw.messages.read(message_id)
```
