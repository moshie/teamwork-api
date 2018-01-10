## Companies

[**POST /companies.json**](https://developer.teamwork.com/companies#create_company)

```
tw.companies.create({
	"company": {
		// --
	}
})
```

[**PUT /companies/{company_id}.json**](https://developer.teamwork.com/companies#update_company)

```
tw.companies.update(company_id, {
	"company": {
		// --
	}
})
```

[**DELETE /companies/{id}.json**](https://developer.teamwork.com/companies#delete_company)

```
tw.companies.delete(company_id)
```

[**GET /companies/{company_id}.json**](https://developer.teamwork.com/companies#retrieve_a_single)

```
tw.companies.get(company_id)
```

[**GET /companies.json**](https://developer.teamwork.com/companies#retrieve_companie)

```
tw.companies.get()
```

[**GET /projects/{project_id}/companies.json**](https://developer.teamwork.com/companies#retrieving_compan)

```
tw.projects.getCompanies(project_id)
```
