## Webhook

### Get webhook Events

[**GET /webhooks/events.json**](https://developer.teamwork.com/projects/webhooks/get-a-list-of-all-webhook-events-that-can-be-used)

```js
tw.webhooks.getEvents()
```

### Get webhooks or webhook

[**GET /webhooks.json | /webhooks/${webhook_id}.json**](https://developer.teamwork.com/projects/webhooks/get-all-webhooks-set-on-your-account)

```js
tw.webhooks.get(webhook_id)
```

### Create a Webhook

[**POST /webhooks.json**](https://developer.teamwork.com/projects/webhooks/create-a-new-webhook-on-your-account)

```js
tw.webhooks.create(body)
```

### Update a Webhook

[**PUT /webhooks/${webhook_id}.json**](https://developer.teamwork.com/projects/webhooks/update-a-specific-webhook-set-on-your-account)

```js
tw.webhooks.update(webhook_id, body)
```

### Resume a Webhook

[**PUT /webhooks/${webhook_id}/resume.json**](https://developer.teamwork.com/projects/webhooks/resume-a-specific-webhook-set-on-your-account)

```js
tw.webhooks.resume(webhook_id)
```

### Pause a Webhook

[**PUT /webhooks/${webhook_id}/pause.json**](https://developer.teamwork.com/projects/webhooks/pause-a-specific-webhook-set-on-your-account)

```js
tw.webhooks.pause(webhook_id)
```

### Delete a webhook

[**DELETE /webhooks/${webhook_id}.json**](https://developer.teamwork.com/projects/webhooks/delete-a-specific-webhook-on-your-account)

```js
tw.webhooks.delete(webhook_id)
```

### Enable Webhooks

[**PUT /webhooks/enable.json**](https://developer.teamwork.com/projects/webhooks/enable-webhooks-on-your-teamwork-com-projects-account)

```js
tw.webhooks.enable()
```

### Disable Webhooks

[**PUT /webhooks/disable.json**](https://developer.teamwork.com/projects/webhooks/disable-webhooks-on-your-teamwork-com-projects-account)

```js
tw.webhooks.disable()
```
