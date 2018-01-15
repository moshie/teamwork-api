## Links

### List All Links

[**GET /links.json**](https://developer.teamwork.com/links#list_all_links)

```js
tw.links.get()
```

### List Links on a Project

[**GET /projects/{project_id}/links.json**](https://developer.teamwork.com/links#list_links_on_a_p)

```js
tw.projects.getLinks(project_id)
```

### Get a Single Link

[**GET /links/{link_id}.json**](https://developer.teamwork.com/links#get_a_single_link)

```js
tw.links.get(link_id)
```

### Create a Single Link

[**POST /projects/{project_id}/links.json**](https://developer.teamwork.com/links#create_a_single_l)

```js
tw.links.create(project_id, {
	"link": {
		// --
	}
})
```

### Update a Single Link

[**PUT /links/{link_id}.json**](https://developer.teamwork.com/links#update_a_single_l)

```js
tw.links.update(link_id, {
	"link": {
		// --
	}
})
```

### Delete a Single Link

[**DELETE /links/{link_id}.json**](https://developer.teamwork.com/links#delete_a_single_l)

```js
tw.links.delete(link_id)
```