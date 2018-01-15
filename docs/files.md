## Files

### Upload a file

[**POST /pendingfiles.json**](https://developer.teamwork.com/uploadingfiles)

```js
tw.files.upload(file_path)
```

### List Files on a Task

[**GET /tasks/{task_id}/files.json**](https://developer.teamwork.com/files#list_files_on_a_t)

```js
tw.tasks.getFiles(task_id)
```

### List Files on a Project

[**GET /projects/{project_id}/files.json**](https://developer.teamwork.com/files#list_files_on_a_p)

```js
tw.projects.getFiles(project_id)
```

### Get a Single File

[**GET /files/{file_id}.json**](https://developer.teamwork.com/files#get_a_single_file)

```js
tw.files.get(file_id)
```

### Add a File to a Task

[**POST /tasks/{task_id}/files.json**](https://developer.teamwork.com/files#add_a_file_to_a_t)

```js
tw.tasks.createFile(task_id, {
	"task": {
		// --
	}
})
```

### Add a File to a Project

[**POST /projects/{project_id}/files.json**](https://developer.teamwork.com/files#add_a_file_to_a_p)

```js
tw.projects.createFile(project_id, {
	"file": {
		// --
	}
})
```

### Add a new File Version to a File

[**POST /files/{file_id}.json**](https://developer.teamwork.com/files#add_a_new_file_ve)

```js
tw.files.version(file_id, {
	"fileversion": {
		// --
	}
})
```

### Delete a File from a Project

[**DELETE /files/{file_id}.json**](https://developer.teamwork.com/files#delete_a_file_fro)

```js
tw.files.delete(file_id)
```

### Get a short URL for sharing a file

[**GET /files/{file_id}/sharedlink.json**](https://developer.teamwork.com/files#get_a_short_url_f)

```js
tw.files.link(file_id, {
	version: 2
})
```

### Copy a file to another project

[**PUT /files/{file_id}/copy.json**](https://developer.teamwork.com/files#copy_or_move_a_fi)

```js
tw.files.copy(file_id, {
	// --
})
```

### Move a file to another project

[**PUT /files/{file_id}/move.json**](https://developer.teamwork.com/files#copy_or_move_a_fi)

```js
tw.files.move(file_id, {
	// --
})
```

### Add or update a Project logo

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/files#add_or_update_a_p)

```js
tw.projects.logo(project_id, {
	"project": {
		// --
	}
})
```