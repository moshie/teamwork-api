## Tags

### List All Tags For A Resource

[**GET /{resource}/{id}/tags.json**](https://developer.teamwork.com/tags#list_all_tags_for)

```js
resources = [projects, tasklists, tasks, milestones, messages, time, files, people, companies, notebooks, links]

tw.{resource}.getTags(resource_id, options)
```

### Update Tags On A Resource

[**PUT /{resource}/{id}/tags.json**](https://developer.teamwork.com/tags#update_tags_on_a_)

```js
resources = [projects, tasklists, tasks, milestones, messages, time, files, people, companies, notebooks, links]

tw.{resource}.updateTag(resource_id, options)
```

### List All Tags

[**GET /tags.json**](https://developer.teamwork.com/tags#list_all_tags)

```js
tw.tags.get()
```

### Get a single tag

[**GET /tags/{tag_id}.json**](https://developer.teamwork.com/tags#get_a_single_tag)

```js
tw.tags.get(tag_id)
```

### Create a single tag

[**POST /tags.json**](https://developer.teamwork.com/tags#create_a_single_t)

```js
tw.tags.create({
	"tag": {
		// --
	}
})
```

### Update a single tag

[**PUT /tags/{tag_id}.json**](https://developer.teamwork.com/tags#update_a_single_t)

```js
tw.tags.update(tag_id, {
	"tag": {
		// --
	}
})
```

### Delete a single tag

[**DELETE /tags/{tag_id}.json**](https://developer.teamwork.com/tags#delete_a_single_t)

```js
tw.tags.delete(tag_id)
```
