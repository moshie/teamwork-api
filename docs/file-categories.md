## File Categories

[**POST /projects/{project_id}/fileCategories.json**](https://developer.teamwork.com/filecategories#creating_categori)

```js
tw.projects.createFileCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /fileCategories/{id}.json**](https://developer.teamwork.com/filecategories#retrieve_a_single)

```js
tw.fileCategories.get(category_id)
```

[**GET /projects/{project_id}/fileCategories.json**](https://developer.teamwork.com/filecategories#retrieving_all_of)

```js
tw.projects.getFileCategories(project_id)
```

[**PUT /fileCategories/{id}.json**](https://developer.teamwork.com/filecategories#updating_a_catego)

```js
tw.fileCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /fileCategories/{id}.json**](https://developer.teamwork.com/filecategories#destroying_a_cate)

```js
tw.fileCategories.delete(category_id)
```
