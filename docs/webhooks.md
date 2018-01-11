## Webhooks

[**GET /webhooks/events.json**](https://developer.teamwork.com/webhooksapi#get_a_list_of_all)

```js
tw.webhooks.getEvents()
```

[**GET /webhooks.json**](https://developer.teamwork.com/webhooksapi#get_all_webhooks_)

```js
tw.webhooks.get()
```

[**GET /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#get_details_of_a_)

```js
tw.webooks.get(webhook_id)
```

[**PUT /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#update_a_specific)

```js
tw.webooks.update(webhook_id, {
	"webhook": {
		// --
	}
})
```

[**PUT /webhooks/:id/resume.json**](https://developer.teamwork.com/webhooksapi#resume_a_specific)

```js
tw.webooks.resume(webhook_id)
```

[**PUT /webhooks/:id/pause.json**](https://developer.teamwork.com/webhooksapi#pause_a_specific_)

```js
tw.webooks.pause(webhook_id)
```

[**DELETE /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#delete_a_specific)

```js
tw.webooks.delete(webhook_id)
```

[**POST /webhooks.json**](https://developer.teamwork.com/webhooksapi#create_a_new_webh)

```js
tw.webhook.create({
	"webhook": {
		// --
	}
})
```

[**PUT /webhooks/enable.json**](https://developer.teamwork.com/webhooksapi#enable_webhooks_o)

```js
tw.webhook.enable()
```

[**PUT /webhooks/disable.json**](https://developer.teamwork.com/webhooksapi#disable_webhooks_)

```js
tw.webhook.disable()
```
