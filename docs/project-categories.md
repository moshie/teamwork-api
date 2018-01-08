## Project Categories

[**POST /projectcategories.json**](https://developer.teamwork.com/projectcategories#creating_project_)

```
tw.projectCategories.create({
	"category": {
		// --
	}
})
```

[**GET /projectCategories/{id}.json**](https://developer.teamwork.com/projectcategories#retrieve_a_single)

```
tw.projectCategories.get(category_id)
```

[**GET /projectCategories.json**](https://developer.teamwork.com/projectcategories#retrieve_all_proj)

```
tw.projectCategories.get()
```

[**PUT /projectCategories/{id}.json**](https://developer.teamwork.com/projectcategories#updating_a_projec)

```
tw.projectCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /projectCategories/{id}.json**](https://developer.teamwork.com/projectcategories#destroying_a_proj)

```
tw.projectCategories.delete(category_id)
```