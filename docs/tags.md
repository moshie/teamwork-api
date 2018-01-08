## Tags
resources = [projects, tasklists, tasks, milestones, messages, timelogs, files, users, companys, notebooks, links]
GET /{resource}/{id}/tags.json                                  - tw.{resources}.tags(resource_id, options)

[**GET /tags.json**](https://developer.teamwork.com/tags#list_all_tags)

```
tw.tags.get()
```

[**GET /tags/{tag_id}.json**](https://developer.teamwork.com/tags#get_a_single_tag)

```
tw.tags.get(tag_id)
```

[**POST /tags.json**](https://developer.teamwork.com/tags#create_a_single_t)

```
tw.tags.create({
	"tag": {
		// --
	}
})
```

[**PUT /tags/{tag_id}.json**](https://developer.teamwork.com/tags#update_a_single_t)

```
tw.tags.update(tag_id, {
	"tag": {
		// --
	}
})
```

[**DELETE /tags/{tag_id}.json**](https://developer.teamwork.com/tags#delete_a_single_t)

```
tw.tags.delete(tag_id)
```
