## Boards

### Create a new Column

[**POST /projects/{project_id}/boards/columns.json**](https://developer.teamwork.com/boards#create_a_new_colu)

```
tw.boards.createColumn(project_id, {
	"column": {
		// --
	}
})
```

### List Columns

[**GET /projects/{project_id}/boards/columns.json**](https://developer.teamwork.com/boards#list_columns)

```
tw.boards.getColumns(project_id, {
	page: 1,
	pageSize: 60,
	showDeleted: 0,
	deletedAfterDate: null,
	updatedAfterDate: null
})
```

### Delete a Column

[**DELETE /boards/columns/{column_id}.json**](https://developer.teamwork.com/boards#delete_a_column)

```
tw.boards.deleteColumn(column_id)
```

### Add a Task from the Backlog to a Column

[**POST /boards/columns/{column_id}/cards.json**](https://developer.teamwork.com/boards#add_a_task_from_t)

```
tw.boards.addTaskToColumn(column_id, {
	"card": {
		// --
	},
	"positionAfterId": -1
})
```

### List Cards in a Column

[**GET /boards/columns/{column_id}/cards.json**](https://developer.teamwork.com/boards#list_cards_in_a_c)

```
tw.boards.getCards(column_id, {
	page: 1,
	pageSize: 60,
	showDeleted: false,
	searchTerm: null,
	'responsible-party-ids': null,
	deletedAfterDate: null,
	updatedAfterDate: null
})
```

### Move a Card

[**PUT /boards/columns/cards/{card_id}/move.json**](https://developer.teamwork.com/boards#move_a_card)

```
tw.boards.moveCard(card_id, {
	// --
})
```

### Edit a Card

[**PUT /boards/columns/cards/{card_id}.json**](https://developer.teamwork.com/boards#edit_a_card)

```
tw.boards.updateCard(card_id, {
	"card": {
		// --
	}
})
```

### Remove a Card

[**DELETE /boards/columns/cards/{card_id}.json**](https://developer.teamwork.com/boards#remove_a_card)

```
tw.boards.deleteCard(card_id)
```