## Expenses

### Get all expenses across your projects

[**GET /expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)

```js
tw.expenses.get()
```

### Get all expenses on a single project

[**GET /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)

```js
tw.projects.getExpenses(project_id)
```

### Get a single expense

[**GET /expenses/:id.json**](https://developer.teamwork.com/expenses#get_a_single_expe)

```js
tw.expenses.get(expense_id)
```

### Create a new expense

[**POST /expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```js
tw.expenses.create({
	"expense": {
		// --
	}
})
```

### Create a new expense in a project

[**POST /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```js
tw.projects.createExpense(project_id, {
	"expense": {
		// --
	}
})
```

### Update a single expense

[**PUT /expenses/:id.json**](https://developer.teamwork.com/expenses#update_a_single_e)

```js
tw.expenses.update(expense_id, {
	"expense": {
		// --
	}
})
```

### Delete a single expense

[**DELETE /expenses/:id.json**](https://developer.teamwork.com/expenses#delete_a_single_e)

```js
tw.expenses.delete(expense_id)
```

### Add an unbilled expense to an Invoice

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_an_unbilled_e)

```js
tw.invoices.createExpense(invoice_id, {
	"lineitems": {
		// --
	}
})
```

### Add a time entry to an Invoice

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_a_time_entry_)

```js
tw.invoices.createTime(invoice_id, {
	"lineitems": {
		// --
	}
})
```
