## Link Categories

[**POST /projects/{project_id}/linkCategories.json**](https://developer.teamwork.com/linkcategories#creating_categori)

```
tw.projects.createLinkCategory(project_id, {
	"category": {
		// --
	}
})
```
         
[**GET /linkCategories/{id}.json**](https://developer.teamwork.com/linkcategories#retrieve_a_single)

```
tw.linkCategories.get(category_id)
```
                           
[**GET /projects/{project_id}/linkCategories.json**](https://developer.teamwork.com/linkcategories#retrieving_all_of)

```
tw.projects.getLinkCategories(project_id)
```

[**PUT /linkCategories/{id}.json**](https://developer.teamwork.com/linkcategories#updating_a_catego)

```
tw.linkCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /linkCategories/{id}.json**](https://developer.teamwork.com/linkcategories#destroying_a_cate)

```
tw.linkCategories.delete(category_id)
```