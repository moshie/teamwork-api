## Tags

[**GET /{resource}/{id}/tags.json**](https://developer.teamwork.com/tags#list_all_tags_for)

```js
resources = [projects, tasklists, tasks, milestones, messages, time, files, people, companies, notebooks, links]

tw.{resource}.getTags(resource_id, options)
```

[**PUT /{resource}/{id}/tags.json**](https://developer.teamwork.com/tags#update_tags_on_a_)

```js
resources = [projects, tasklists, tasks, milestones, messages, time, files, people, companies, notebooks, links]

tw.{resource}.updateTag(resource_id, options)
```

[**GET /tags.json**](https://developer.teamwork.com/tags#list_all_tags)

```js
tw.tags.get()
```

[**GET /tags/{tag_id}.json**](https://developer.teamwork.com/tags#get_a_single_tag)

```js
tw.tags.get(tag_id)
```

[**POST /tags.json**](https://developer.teamwork.com/tags#create_a_single_t)

```js
tw.tags.create({
	"tag": {
		// --
	}
})
```

[**PUT /tags/{tag_id}.json**](https://developer.teamwork.com/tags#update_a_single_t)

```js
tw.tags.update(tag_id, {
	"tag": {
		// --
	}
})
```

[**DELETE /tags/{tag_id}.json**](https://developer.teamwork.com/tags#delete_a_single_t)

```js
tw.tags.delete(tag_id)
```
