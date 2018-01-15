## Message Replys

### Create a Message Reply

[**POST /messages/{message_id}/messageReplies.json**](https://developer.teamwork.com/messagereplies#create_a_message_)

```js
tw.messages.createReply(message_id, {
	"messagereply": {
		// --
	}
})
```

### Retrieve a Single Message Reply

[**GET /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#retrieve_a_single)

```js
tw.messages.getReply(message_id)
```

### Retrieve Replies to a Message

[**GET /messages/{id}/replies.json**](https://developer.teamwork.com/messagereplies#retrieve_replies_)

```js
tw.messages.getReplies(message_id, {
	page: 2,
	pageSize: 50
})
```

### Update Message Reply

[**PUT /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#update_message_re)

```js
tw.messages.updateReply(message_id, {
	"messagereply": {
		// --
	}
})
```

### Destroy Message Reply

[**DELETE /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#destroy_message_r)

```js
tw.messages.deleteReply(message_id)
```

### Mark Message Reply Read

[**PUT /messageReplies/{id}/markread.json**](https://developer.teamwork.com/messagereplies#mark_message_repl)

```js
tw.messages.readReply(message_id)
```
