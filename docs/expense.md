## Expense

### Get invoices or invoice

[**GET /expenses.json | /expenses/{expense_id}.json**](https://developer.teamwork.com/projects/expenses/get-all-expenses-across-your-projects)

```js
tw.expenses.get(expense_id)
```

### Create an expense

[**POST /expenses.json**](https://developer.teamwork.com/projects/expenses/create-a-new-expense-in-a-project)

```js
tw.expenses.create(body)
```

### Update an expense

[**PUT /expenses/{expense_id}.json**](https://developer.teamwork.com/projects/expenses/update-a-single-expense)

```js
tw.expenses.update(expense_id, body)
```

### Delete an expense

[**DELETE /expenses/{expense_id}.json**](https://developer.teamwork.com/projects/expenses/delete-a-single-expense)

```js
tw.expenses.delete(expense_id)
```
