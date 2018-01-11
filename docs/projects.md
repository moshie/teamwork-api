## Projects

[**POST /projects.json**](https://developer.teamwork.com/projectsapi#create_project)

```js
tw.projects.create({
	"project": {

	}
})
```

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/projectsapi#update_project)

```js
tw.projects.update(project_id, {
	"project": {
		// --
	}
})
```

[**DELETE /projects/{id}.json**](https://developer.teamwork.com/projectsapi#delete_project)

```js
tw.projects.delete(project_id)
```

[**GET /projects.json**](https://developer.teamwork.com/projectsapi#retrieve_all_proj)

```js
tw.projects.get({
	status: 'ALL'
})
```

[**GET /projects/{project_id}.json**](https://developer.teamwork.com/projectsapi#retrieve_a_single)

```js
tw.projects.get({}, project_id)
```

[**GET /companies/{id}/projects.json**](https://developer.teamwork.com/projectsapi#retrieve_projects)

```js
tw.companies.getProjects(company_id)
```

[**GET /projects/starred.json**](https://developer.teamwork.com/projectsapi#retrieve_your_sta)

```js
tw.projects.getStarred()
```

[**PUT /projects/{project_id}/star.json**](https://developer.teamwork.com/projectsapi#star_a_project)

```js
tw.projects.star(project_id)
```

[**PUT /projects/{project_id}/unstar.json**](https://developer.teamwork.com/projectsapi#unstar_a_project)

```js
tw.projects.unStar(project_id)
```

[**GET /projects/{id}/box.json**](https://developer.teamwork.com/projectsapi#read_project_box_)

```js
tw.projects.box(project_id)
```

[**PUT /projects/{id}/box.json**](https://developer.teamwork.com/projectsapi#set_project_box_f)

```js
tw.projects.setBox(project_id, {
	"box": {
		// --
	}
})
```

[**GET /projects/{id}/googleDrive.json**](https://developer.teamwork.com/projectsapi#read_project_goog)

```js
tw.projects.googleDrive(project_id)
```

[**PUT /projects/{id}/googleDrive.json**](https://developer.teamwork.com/projectsapi#set_project_googl)

```js
tw.projects.setGoogleDrive(project_id, {
	"google-drive": {
		// --
	}
})
```

[**GET /projects/{project_id}/rates.json**](https://developer.teamwork.com/projectsapi#get_project_rates)

```js
tw.projects.getRates(project_id, {
	page: 1,
	pageSize: 2
})
```

[**POST /projects/{project_id}/rates.json**](https://developer.teamwork.com/projectsapi#set_project_rates)

```js
tw.projects.setRates(project_id, {
	"rates": {
		// --
	}
})
```

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/projectsapi#enable_and_disabl)

```js
tw.projects.features(project_id, {
	"project": {
		// --
	}
})
```
