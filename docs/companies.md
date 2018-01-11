## Companies

[**POST /companies.json**](https://developer.teamwork.com/companies#create_company)

```js
tw.companies.create({
	"company": {
		// --
	}
})
```

[**PUT /companies/{company_id}.json**](https://developer.teamwork.com/companies#update_company)

```js
tw.companies.update(company_id, {
	"company": {
		// --
	}
})
```

[**DELETE /companies/{id}.json**](https://developer.teamwork.com/companies#delete_company)

```js
tw.companies.delete(company_id)
```

[**GET /companies/{company_id}.json**](https://developer.teamwork.com/companies#retrieve_a_single)

```js
tw.companies.get(company_id)
```

[**GET /companies.json**](https://developer.teamwork.com/companies#retrieve_companie)

```js
tw.companies.get()
```

[**GET /projects/{project_id}/companies.json**](https://developer.teamwork.com/companies#retrieving_compan)

```js
tw.projects.getCompanies(project_id)
```
