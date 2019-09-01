## Invoice

### Get invoices or invoice

[**GET /invoices.json | /invoices/{invoice_id}.json**](https://developer.teamwork.com/projects/invoices/get-all-invoices-across-your-projects)

```js
tw.invoices.get(query_string, invoice_id)
```

### Create an invoice

[**POST /invoices.json**](https://developer.teamwork.com/projects/invoices/create-a-new-invoice-in-a-project)

```js
tw.invoices.create(body)
```

### Update an invoice

[**PUT /invoices/{invoice_id}.json**](https://developer.teamwork.com/projects/invoices/update-a-specific-invoice)

```js
tw.invoices.update(invoice_id, body)
```

### Delete an invoice

[**DELETE /invoices/{invoice_id}.json**](https://developer.teamwork.com/projects/invoices/delete-a-specific-invoice)

```js
tw.invoices.delete(invoice_id)
```

### Mark invoice as complete

[**PUT /invoices/{invoice_id}/complete.json**](https://developer.teamwork.com/projects/invoices/mark-a-specific-invoice-as-complete)

```js
tw.invoices.complete(invoice_id)
```

### Mark invoice as incomplete

[**PUT /invoices/{invoice_id}/uncomplete.json**](https://developer.teamwork.com/projects/invoices/mark-a-specific-invoice-as-not-complete)

```js
tw.invoices.incomplete(invoice_id)
```

### Get the Currency Codes

[**GET /currencycodes.json**](https://developer.teamwork.com/projects/invoices/get-a-list-of-valid-currency-codes)

```js
tw.invoices.currencyCodes()
```

### Create Expense Entry on an Invoice

[**PUT /invoices/{invoice_id}/lineitems.json**](https://developer.teamwork.com/projects/expenses/add-an-unbilled-expense-to-an-invoice)

```js
tw.invoices.createExpense(invoice_id, body)
```

### Create time on an Invoice

[**PUT /invoices/{invoice_id}/lineitems.json**](https://developer.teamwork.com/projects/invoices/add-a-time-entry-to-an-invoice)

```js
tw.invoices.createExpense(invoice_id, body)
```
