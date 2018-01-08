## Webhooks

[**GET /webhooks/events.json**](https://developer.teamwork.com/webhooksapi#get_a_list_of_all)

```
tw.webhooks.getEvents()
```

[**GET /webhooks.json**](https://developer.teamwork.com/webhooksapi#get_all_webhooks_)

```
tw.webhooks.get()
```

[**GET /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#get_details_of_a_)

```
tw.webooks.get(webhook_id)
```

[**PUT /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#update_a_specific)

```
tw.webooks.update(webhook_id, {
	"webhook": {
		// --
	}
})
```

[**PUT /webhooks/:id/resume.json**](https://developer.teamwork.com/webhooksapi#resume_a_specific)

```
tw.webooks.resume(webhook_id)
```

[**PUT /webhooks/:id/pause.json**](https://developer.teamwork.com/webhooksapi#pause_a_specific_)

```
tw.webooks.pause(webhook_id)
```

[**DELETE /webhooks/:id.json**](https://developer.teamwork.com/webhooksapi#delete_a_specific)

```
tw.webooks.delete(webhook_id)
```

[**POST /webhooks.json**](https://developer.teamwork.com/webhooksapi#create_a_new_webh)

```
tw.webhook.create({
	"webhook": {
		// --
	}
})
```

[**PUT /webhooks/enable.json**](https://developer.teamwork.com/webhooksapi#enable_webhooks_o)

```
tw.webhook.enable()
```

[**PUT /webhooks/disable.json**](https://developer.teamwork.com/webhooksapi#disable_webhooks_)

```
tw.webhook.disable()
```
