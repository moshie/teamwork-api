## Message Categories

[**POST /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#creating_categori)

```
tw.projects.createMessageCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#retrieve_a_single)

```
tw.messageCategories.get(category_id)
```

[**GET /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#retrieving_all_of)

```
tw.projects.getMessageCategories(project_id)
```

[**PUT /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#updating_a_catego)

```
tw.messageCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#destroying_a_cate)

```
tw.messageCategories.delete(category_id)
```