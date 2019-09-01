## Board

### List Columns

[**GET /projects/{project_id}/boards/columns.json**](https://developer.teamwork.com/projects/boards/list-columns)

```js
tw.boards.getColumns(project_id, query_string)
```

### Create a new Column

[**POST /projects/{project_id}/boards/columns.json**](https://developer.teamwork.com/projects/boards/create-a-new-column)

```js
tw.boards.createColumn(project_id, body)
```

### Delete a Column

[**DELETE /boards/columns/{column_id}.json**](https://developer.teamwork.com/projects/boards/delete-a-column)

```js
tw.boards.deleteColumn(column_id)
```

### Add a Task from the Backlog to a Column

[**POST /boards/columns/{column_id}/cards.json**](https://developer.teamwork.com/projects/boards/add-a-task-from-the-backlog-to-a-column)

```js
tw.boards.addTaskToColumn(column_id, body)
```

### List Cards in a Column

[**GET /boards/columns/{column_id}/cards.json**](https://developer.teamwork.com/projects/boards/list-cards-in-a-column)

```js
tw.boards.getCards(column_id, query_string)
```

### Move a Card

[**PUT /boards/columns/cards/{card_id}/move.json**](https://developer.teamwork.com/projects/boards/move-a-card)

```js
tw.boards.moveCard(card_id, body)
```

### Edit a Card

[**PUT /boards/columns/cards/{card_id}.json**](https://developer.teamwork.com/projects/boards/edit-a-card)

```js
tw.boards.updateCard(card_id, body)
```

### Remove a Card

[**DELETE /boards/columns/cards/{card_id}.json**](https://developer.teamwork.com/projects/boards/remove-a-card)

```js
tw.boards.deleteCard(card_id)
```
