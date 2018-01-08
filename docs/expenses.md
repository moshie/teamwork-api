## Expenses

[**GET /expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)
                              
```
tw.expenses.get()
```

[**GET /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)

```
tw.projects.getExpenses(project_id)
```

[**GET /expenses/:id.json**](https://developer.teamwork.com/expenses#get_a_single_expe)

```
tw.expenses.get(expense_id)
```

[**POST /expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```
tw.expenses.create({
	"expense": {
		// --
	}
})
```

[**POST /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```
tw.projects.createExpense(project_id, {
	"expense": {
		// --
	}
})
```

[**PUT /expenses/:id.json**](https://developer.teamwork.com/expenses#update_a_single_e)

```
tw.expenses.update(expense_id, {
	"expense": {
		// --
	}
})
```

[**DELETE /expenses/:id.json**](https://developer.teamwork.com/expenses#delete_a_single_e)

```
tw.expenses.delete(expense_id)
```

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_an_unbilled_e)

```
tw.invoices.createExpense(invoice_id, {
	"lineitems": {
		// --
	}
})
```

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_a_time_entry_)

```
tw.invoices.createTime(invoice_id, {
	"lineitems": {
		// --
	}
})
```
