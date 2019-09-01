## Time

### Get times or time

[**GET /time_entries.json | /time_entries/{time_id}.json**](https://developer.teamwork.com/projects/time-tracking/retrieve-all-time-entries-across-all-projects)

```js
tw.time.get(query_string, time_id)
```

### Update time

[**PUT /time_entries/{time_id}.json**](https://developer.teamwork.com/projects/time-tracking/update-a-time-entry)

```js
tw.time.update(time_id, body)
```

### Delete a time entry

[**DELETE /time_entries/{time_id}.json**](https://developer.teamwork.com/projects/time-tracking/delete-a-time-entry)

```js
tw.time.delete(time_id)
```

### Retrieve total time

[**GET /time/total.json**](https://developer.teamwork.com/projects/time-tracking/time-totals-across-projects)

```js
tw.time.total(query_string)
```

### Get Tags from a Time log

[**GET /timelogs/{time_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.time.getTags(time_id, query_string)
```

### Update a Tag on a Time Log

[**PUT /timelogs/{time_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-a-single-tag)

```js
tw.tasks.updateTag(time_id, body)
```
