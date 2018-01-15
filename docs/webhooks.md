## Webhooks

### Get a list of all Webhook Events that can be used

[**GET /webhooks/events.json**](https://developer.teamwork.com/webhooksapi#get_a_list_of_all)

```js
tw.webhooks.getEvents()
```

### Get all webhooks set on your account

[**GET /webhooks.json**](https://developer.teamwork.com/webhooksapi#get_all_webhooks_)

```js
tw.webhooks.get()
```

### Get details of a specific webhook set on your account

[**GET /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#get_details_of_a_)

```js
tw.webooks.get(webhook_id)
```

### Update a specific webhook set on your account

[**PUT /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#update_a_specific)

```js
tw.webooks.update(webhook_id, {
	"webhook": {
		// --
	}
})
```

### Resume a specific webhook set on your account

[**PUT /webhooks/:id/resume.json**](https://developer.teamwork.com/webhooksapi#resume_a_specific)

```js
tw.webooks.resume(webhook_id)
```

### Pause a specific webhook on your account

[**PUT /webhooks/:id/pause.json**](https://developer.teamwork.com/webhooksapi#pause_a_specific_)

```js
tw.webooks.pause(webhook_id)
```

### Delete a specific webhook on your account

[**DELETE /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#delete_a_specific)

```js
tw.webooks.delete(webhook_id)
```

### Create a new webhook on your account

[**POST /webhooks.json**](https://developer.teamwork.com/webhooksapi#create_a_new_webh)

```js
tw.webhook.create({
	"webhook": {
		// --
	}
})
```

### Enable Webhooks on your Teamwork.com Projects account

[**PUT /webhooks/enable.json**](https://developer.teamwork.com/webhooksapi#enable_webhooks_o)

```js
tw.webhook.enable()
```

### Disable Webhooks on your Teamwork.com Projects account

[**PUT /webhooks/disable.json**](https://developer.teamwork.com/webhooksapi#disable_webhooks_)

```js
tw.webhook.disable()
```
