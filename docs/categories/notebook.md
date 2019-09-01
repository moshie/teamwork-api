## Notebook

### Get a Notebook Category

[**GET /notebookCategories/{category_id}.json**](https://developer.teamwork.com/projects/notebook-categories/retrieve-a-single-notebook-category)

```js
tw.notebookCategories.get(category_id)
```

### Update a Notebook Category

[**PUT /notebookCategories/{category_id}.json**](https://developer.teamwork.com/projects/notebook-categories/updating-a-notebook-category)

```js
tw.notebookCategories.update(category_id, body)
```

### Delete a Notebook Category

[**DELETE /notebookCategories/{category_id}.json**](https://developer.teamwork.com/projects/notebook-categories/updating-a-notebook-category)

```js
tw.notebookCategories.delete(category_id)
```

### Get a Notebooks from a Notebook Category

[**GET /notebookCategories/{category_id}/notebooks.json**](https://developer.teamwork.com/projects/notebooks/list-notebooks-in-a-specific-category)

```js
tw.notebookCategories.getNotebooks(category_id, query_string)
```
