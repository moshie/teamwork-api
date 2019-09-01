## File

### Get a File

[**GET /files/{file_id}.json**](https://developer.teamwork.com/projects/files/get-a-single-file)

```js
tw.files.get(file_id)
```

### Create a File Version

[**POST /files/{file_id}.json**](https://developer.teamwork.com/projects/files/add-a-new-file-version-to-a-file)

```js
tw.files.version(file_id, body)
```

### Delete a File

[**DELETE /files/{file_id}.json**](https://developer.teamwork.com/projects/files/delete-a-file-from-a-project)

```js
tw.files.delete(file_id)
```

### Get a File share link

[**GET /files/{file_id}/sharedlink.json**](https://developer.teamwork.com/projects/files/get-a-short-url-for-sharing-a-file)

```js
tw.files.link(file_id, query_string)
```

### Copy File

[**PUT /files/{file_id}/copy.json**](https://developer.teamwork.com/projects/files/copy-a-file-to-another-project)

```js
tw.files.copy(file_id, body)
```

### Move File

[**PUT /files/{file_id}/move.json**](https://developer.teamwork.com/projects/files/move-a-file-to-another-project)

```js
tw.files.move(file_id, body)
```

### Upload a file

[**POST /pendingfiles.json**](https://developer.teamwork.com/projects/file-uploading/upload-a-file)

```js
tw.files.upload(file)
```

### Get Comments for a File

[**GET /files/{file_id}/comments.json**](https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types)

```js
tw.files.getComments(file_id, query_string)
```

### Create a Comment for a File

[**POST /files/{file_id}/comments.json**](https://developer.teamwork.com/projects/comments/creating-a-comment)

```js
tw.files.createComment(file_id, body)
```

### Get Tags from a File

[**GET /files/{file_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.files.getTags(file_id, query_string)
```

### Update a Tag on a File

[**PUT /files/{file_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.files.updateTag(file_id, body)
```
