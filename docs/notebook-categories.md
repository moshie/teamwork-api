## Notebook Categories

[**POST /projects/{project_id}/notebookCategories.json**](https://developer.teamwork.com/notebookcategories#creating_categori)

```
tw.projects.createNotebookCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /notebookCategories/{id}.json**](https://developer.teamwork.com/notebookcategories#retrieve_a_single)

```
tw.notebookCategories.get(category_id)
```

[**GET /projects/{project_id}/notebookCategories.json**](https://developer.teamwork.com/notebookcategories#retrieving_all_of)

```
tw.projects.getNotebookCategories(project_id)
```

[**PUT /notebookCategories/{id}.json**](https://developer.teamwork.com/notebookcategories#updating_a_catego)

```
tw.notebookCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /notebookCategories/{id}.json**](https://developer.teamwork.com/notebookcategories#destroying_a_cate)

```
tw.notebookCategories.delete(category_id)
```