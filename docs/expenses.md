## Expenses

[**GET /expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)

```js
tw.expenses.get()
```

[**GET /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)

```js
tw.projects.getExpenses(project_id)
```

[**GET /expenses/:id.json**](https://developer.teamwork.com/expenses#get_a_single_expe)

```js
tw.expenses.get(expense_id)
```

[**POST /expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```js
tw.expenses.create({
	"expense": {
		// --
	}
})
```

[**POST /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```js
tw.projects.createExpense(project_id, {
	"expense": {
		// --
	}
})
```

[**PUT /expenses/:id.json**](https://developer.teamwork.com/expenses#update_a_single_e)

```js
tw.expenses.update(expense_id, {
	"expense": {
		// --
	}
})
```

[**DELETE /expenses/:id.json**](https://developer.teamwork.com/expenses#delete_a_single_e)

```js
tw.expenses.delete(expense_id)
```

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_an_unbilled_e)

```js
tw.invoices.createExpense(invoice_id, {
	"lineitems": {
		// --
	}
})
```

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_a_time_entry_)

```js
tw.invoices.createTime(invoice_id, {
	"lineitems": {
		// --
	}
})
```
