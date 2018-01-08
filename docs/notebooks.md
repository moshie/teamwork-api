## Notebooks
[**GET /notebooks.json**](https://developer.teamwork.com/notebooks#list_all_notebook)

```
tw.notebooks.get({
	includeContent: true
})
```

[**GET /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/notebooks#list_notebooks_on)

```
tw.projects.getNotebooks(project_id, options)
```

[**GET /notebookCategories/{id}/notebooks.json**](https://developer.teamwork.com/notebooks#list_notebooks_in)

```
tw.notebookCategories.getNotebooks(category_id, options) 
```

[**GET /notebooks/{notebook_id}.json**](https://developer.teamwork.com/notebooks#get_a_single_note)

```
tw.notebooks.get({}, notebook_id)
```

[**POST /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/notebooks#create_a_single_n)

```
tw.projects.createNotebook(project_id, {
	"notebook": {
		// --
	}
})
```

[**PUT /notebooks/{notebook_id}.json**](https://developer.teamwork.com/notebooks#update_a_single_n)

```
tw.notebooks.update(notebook_id, {
	"notebook": {
		// --
	}
})
```

[**PUT /notebooks/{id}/lock.json**](https://developer.teamwork.com/notebooks#lock_a_single_not)

```
tw.notebooks.lock(notebook_id)
```

[**PUT /notebooks/{id}/unlock.json**](https://developer.teamwork.com/notebooks#unlock_a_single_n)

```
tw.notebooks.unlock(notebook_id)
```

[**DELETE /notebooks/{id}.json**](https://developer.teamwork.com/notebooks#delete_a_single_n)

```
tw.notebooks.delete(notebook_id)
```

[**PUT /notebooks/{notebook_id}/copy.json**](https://developer.teamwork.com/notebooks#copy_a_notebook_t)

```
tw.notebooks.copy(notebook_id, {
	// --
})
```

[**PUT /notebooks/{notebook_id}/move.json**](https://developer.teamwork.com/notebooks#move_a_notebook_t)

```
tw.notebooks.move(notebook_id, {
	// --
})
```