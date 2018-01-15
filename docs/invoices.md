## Invoices

### Get all invoices across your projects

[**GET /invoices.json**](https://developer.teamwork.com/invoices#get_all_invoices_)

```js
tw.invoices.get({
	type: 'active',
	projectStatus: 'active',
	page: 1
})
```

### Get all invoices on a single project

[**GET /projects/:id/invoices.json**](https://developer.teamwork.com/invoices#get_all_invoices_)

```js
tw.projects.getInvoices(project_id, {
	type: 'active',
	page: 1
})
```

### Get a single invoice

[**GET /invoices/:id.json**](https://developer.teamwork.com/invoices#get_a_single_invo)

```js
tw.invoices.get({}, invoice_id)
```

### Create a new invoice in a project

[**POST /invoices.json**](https://developer.teamwork.com/invoices#create_a_new_invo)

```js
tw.invoices.create({
	"invoice": {
		// --
	}
})
```

### Create a new invoice in a project

[**POST /projects/:id/invoices.json**](https://developer.teamwork.com/invoices#create_a_new_invo)

```js
tw.projects.createInvoice(project_id, {
	"invoice": {
		// --
	}
})
```

### Update a specific invoice

[**PUT /invoices/:id.json**](https://developer.teamwork.com/invoices#update_a_specific)

```js
tw.invoices.update(invoice_id, {
	"invoice": {
		// --
	}
})
```

### Delete a specific invoice

[**DELETE /invoices/:id.json**](https://developer.teamwork.com/invoices#delete_a_specific)

```js
tw.invoices.delete(invoice_id)
```

### Mark a specific invoice as complete

[**PUT /invoices/:id/complete.json**](https://developer.teamwork.com/invoices#mark_a_specific_i)

```js
tw.invoices.complete(invoice_id)
```

### Mark a specific invoice as not complete

[**PUT /invoices/:id/uncomplete.json**](https://developer.teamwork.com/invoices#mark_a_specific_i)

```js
tw.invoices.incomplete(invoice_id)
```

### Get a list of valid currency codes

[**GET /currencycodes.json**](https://developer.teamwork.com/invoices#get_a_list_of_val)

```js
tw.invoices.currencyCodes()
```