## Company

### Create a company

[**POST /companies.json**](https://developer.teamwork.com/projects/companies/create-a-company)

```js
tw.companies.create(body)
```

### Update Company

[**PUT /companies/{company_id}.json**](https://developer.teamwork.com/projects/companies/update-a-company)

```js
tw.companies.update(company_id, body)
```

### Delete a Company

[**DELETE /companies/{company_id}.json**](https://developer.teamwork.com/projects/companies/delete-a-company)

```js
tw.companies.delete(company_id)
```

### Get Companies or a Company

[**GET /companies.json | /companies/{company_id}.json**](https://developer.teamwork.com/projects/companies/retrieve-companies)

```js
tw.companies.get(company_id)
```

### Get People from a company

[**GET /companies/{company_id}/people.json**](https://developer.teamwork.com/projects/people/get-people-within-a-company)

```js
tw.companies.getPeople(company_id)
```

### Get Projects from a company

[**GET /companies/{company_id}/projects.json**](https://developer.teamwork.com/projects/projects/retrieve-projects-assigned-to-a-specific-company)

```js
tw.companies.getProjects(company_id)
```

### Get Tags from a Company

[**GET /companys/{company_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.companies.getTags(company_id, query_string)
```

### Update a Tag on a Company

[**PUT /companys/{company_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.companies.updateTag(company_id, body)
```
