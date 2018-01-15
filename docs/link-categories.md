## Link Categories

### Creating categories

[**POST /projects/{project_id}/linkCategories.json**](https://developer.teamwork.com/linkcategories#creating_categori)

```js
tw.projects.createLinkCategory(project_id, {
	"category": {
		// --
	}
})
```

### Retrieve a single category

[**GET /linkCategories/{id}.json**](https://developer.teamwork.com/linkcategories#retrieve_a_single)

```js
tw.linkCategories.get(category_id)
```

### Retrieving all of a projects link categories

[**GET /projects/{project_id}/linkCategories.json**](https://developer.teamwork.com/linkcategories#retrieving_all_of)

```js
tw.projects.getLinkCategories(project_id)
```

### Updating a category

[**PUT /linkCategories/{id}.json**](https://developer.teamwork.com/linkcategories#updating_a_catego)

```js
tw.linkCategories.update(category_id, {
	"category": {
		// --
	}
})
```

### Destroying a Category

[**DELETE /linkCategories/{id}.json**](https://developer.teamwork.com/linkcategories#destroying_a_cate)

```js
tw.linkCategories.delete(category_id)
```
