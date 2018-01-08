## Invoices

[**GET /invoices.json**](https://developer.teamwork.com/invoices#get_all_invoices_)

```
tw.invoices.get({
	type: 'active',
	projectStatus: 'active',
	page: 1
})
```

[**GET /projects/:id/invoices.json**](https://developer.teamwork.com/invoices#get_all_invoices_)

```
tw.projects.getInvoices(project_id, {
	type: 'active',
	page: 1
})
```

[**GET /invoices/:id.json**](https://developer.teamwork.com/invoices#get_a_single_invo)

```
tw.invoices.get({}, invoice_id)
```

[**POST /invoices.json**](https://developer.teamwork.com/invoices#create_a_new_invo)

```
tw.invoices.create({
	"invoice": {
		// --
	}
})
```

[**POST /projects/:id/invoices.json**](https://developer.teamwork.com/invoices#create_a_new_invo)

```
tw.projects.createInvoice(project_id, {
	"invoice": {
		// --
	}
})
```

[**PUT /invoices/:id.json**](https://developer.teamwork.com/invoices#update_a_specific)

```
tw.invoices.update(invoice_id, {
	"invoice": {
		// --
	}
})
```

[**DELETE /invoices/:id.json**](https://developer.teamwork.com/invoices#delete_a_specific)

```
tw.invoices.delete(invoice_id)
```

[**PUT /invoices/:id/complete.json**](https://developer.teamwork.com/invoices#mark_a_specific_i)

```
tw.invoices.complete(invoice_id)
```

[**PUT /invoices/:id/uncomplete.json**](https://developer.teamwork.com/invoices#mark_a_specific_i)

```
tw.invoices.incomplete(invoice_id)
```

[**GET /currencycodes.json**](https://developer.teamwork.com/invoices#get_a_list_of_val)

```
tw.invoices.currencyCodes()
```