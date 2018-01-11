## Message Categories

[**POST /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#creating_categori)

```js
tw.projects.createMessageCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#retrieve_a_single)

```js
tw.messageCategories.get(category_id)
```

[**GET /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#retrieving_all_of)

```js
tw.projects.getMessageCategories(project_id)
```

[**PUT /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#updating_a_catego)

```js
tw.messageCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#destroying_a_cate)

```js
tw.messageCategories.delete(category_id)
```
