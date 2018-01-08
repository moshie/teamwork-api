## Comments

# TBA
resources = `[links, milestones, files, notebooks, tasks]`

GET /{resource}/{resource_id}/comments.json             

- tw.{resource}.getComments(resource_id, options)

POST /{resource}/{resource_id}/comments.json            

- tw.{resource}.createComment(resource_id, comment_object)


[**GET /comments/{comment_id}.json**](https://developer.teamwork.com/comments#retrieving_a_spec)

```
tw.comments.get(comment_id)
```

[**PUT /comments/{id}.json**](https://developer.teamwork.com/comments#updating_a_commen)

```
tw.comments.update(comment_id, {
	"comment": {
		// --
	}
})
```

[**DELETE /comments/{id}.json**](https://developer.teamwork.com/comments#destroying_a_comm)

```
tw.comments.delete(comment_id)
```

[**PUT /comments/{id}/markread.json**](https://developer.teamwork.com/comments#mark_a_comment_as)

```
tw.comments.read(comment_id)
```
