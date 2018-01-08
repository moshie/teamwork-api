## Message Replys

[**POST /messages/{message_id}/messageReplies.json**](https://developer.teamwork.com/messagereplies#create_a_message_)

```
tw.messages.createReply(message_id, {
	"messagereply": {
		// --
	}
})
```

[**GET /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#retrieve_a_single)

```
tw.messages.getReply(message_id)
```

[**GET /messages/{id}/replies.json**](https://developer.teamwork.com/messagereplies#retrieve_replies_)

```
tw.messages.getReplies(message_id, {
	page: 2,
	pageSize: 50
})
```

[**PUT /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#update_message_re)

```
tw.messages.updateReply(message_id, {
	"messagereply": {
		// --
	}
})
```

[**DELETE /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#destroy_message_r)

```
tw.messages.deleteReply(message_id)
```

[**PUT /messageReplies/{id}/markread.json**](https://developer.teamwork.com/messagereplies#mark_message_repl)

```
tw.messages.readReply(message_id)
```
