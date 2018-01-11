## Links

[**GET /links.json**](https://developer.teamwork.com/links#list_all_links)

```js
tw.links.get()
```

[**GET /projects/{project_id}/links.json**](https://developer.teamwork.com/links#list_links_on_a_p)

```js
tw.projects.getLinks(project_id)
```

[**GET /links/{link_id}.json**](https://developer.teamwork.com/links#get_a_single_link)

```js
tw.links.get(link_id)
```

[**POST /projects/{project_id}/links.json**](https://developer.teamwork.com/links#create_a_single_l)

```js
tw.links.create(project_id, {
	"link": {
		// --
	}
})
```

[**PUT /links/{link_id}.json**](https://developer.teamwork.com/links#update_a_single_l)

```js
tw.links.update(link_id, {
	"link": {
		// --
	}
})
```

[**DELETE /links/{link_id}.json**](https://developer.teamwork.com/links#delete_a_single_l)

```js
tw.links.delete(link_id)
```