## Message Categories

### Creating Categories

[**POST /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#creating_categori)

```js
tw.projects.createMessageCategory(project_id, {
	"category": {
		// --
	}
})
```

### Retrieve a Single Category

[**GET /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#retrieve_a_single)

```js
tw.messageCategories.get(category_id)
```

### Retrieving all of a Projects Categories

[**GET /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#retrieving_all_of)

```js
tw.projects.getMessageCategories(project_id)
```

### Updating a Category

[**PUT /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#updating_a_catego)

```js
tw.messageCategories.update(category_id, {
	"category": {
		// --
	}
})
```

### Destroying a Category

[**DELETE /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#destroying_a_cate)

```js
tw.messageCategories.delete(category_id)
```
