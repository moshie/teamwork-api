## Companies

### Create Company

[**POST /companies.json**](https://developer.teamwork.com/companies#create_company)

```js
tw.companies.create({
	"company": {
		// --
	}
})
```

### Update Company

[**PUT /companies/{company_id}.json**](https://developer.teamwork.com/companies#update_company)

```js
tw.companies.update(company_id, {
	"company": {
		// --
	}
})
```

### Delete Company

[**DELETE /companies/{id}.json**](https://developer.teamwork.com/companies#delete_company)

```js
tw.companies.delete(company_id)
```

### Retrieve a Single Company

[**GET /companies/{company_id}.json**](https://developer.teamwork.com/companies#retrieve_a_single)

```js
tw.companies.get(company_id)
```

### Retrieve Companies

[**GET /companies.json**](https://developer.teamwork.com/companies#retrieve_companie)

```js
tw.companies.get()
```

### Retrieving Companies within a Project

[**GET /projects/{project_id}/companies.json**](https://developer.teamwork.com/companies#retrieving_compan)

```js
tw.projects.getCompanies(project_id)
```
