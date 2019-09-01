## Project

### Get activity for a project

[**GET /projects/{project_id}/latestActivity.json**](https://developer.teamwork.com/projects/activity/list-latest-activity-for-a-specific-project)

```js
tw.projects.getActivity(project_id, body)
```

### Get invoices for a project

[**GET /projects/{project_id}/invoices.json**](https://developer.teamwork.com/projects/invoices/get-all-invoices-on-a-single-project)

```js
tw.projects.getInvoices(project_id, query_string)
```

### Create an invoice on a project

[**POST /projects/{project_id}/invoices.json**](https://developer.teamwork.com/projects/invoices/create-a-new-invoice-in-a-project)

```js
tw.projects.createInvoice(project_id, body)
```

### Get Expenses for a project

[**GET /projects/{project_id}/expenses.json**](https://developer.teamwork.com/projects/expenses/get-all-expenses-on-a-single-project)

```js
tw.projects.getExpenses(project_id)
```

### Create an expense on a project

[**POST /projects/{project_id}/expenses.json**](https://developer.teamwork.com/projects/expenses/create-a-new-expense-in-a-project)

```js
tw.projects.createExpense(project_id, body)
```

### Get Message Categories in a Project

[**GET /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/projects/message-categories/retrieving-all-of-a-message-categories)

```js
tw.projects.getMessageCategories(project_id)
```

### Create a message Category on a project

[**POST /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/projects/message-categories/creating-message-categories)

```js
tw.projects.createMessageCategory(project_id, body)
```

### Get File Categories in a Project

[**GET /projects/{project_id}/fileCategories.json**](https://developer.teamwork.com/projects/file-categories/retrieving-all-of-a-file-categories)

```js
tw.projects.getFileCategories(project_id)
```

### Create a File Category on a Project

[**POST /projects/{project_id}/fileCategories.json**](https://developer.teamwork.com/projects/file-categories/creating-file-categories)

```js
tw.projects.createFileCategory(project_id, body)
```

### Get Notebook Categories in a Project

[**GET /projects/{project_id}/notebookCategories.json**](https://developer.teamwork.com/projects/notebook-categories/retrieving-all-of-a-notebook-categories)

```js
tw.projects.getNotebookCategories(project_id)
```

### Create a Notebook Category on a Project

[**POST /projects/{project_id}/notebookCategories.json**](https://developer.teamwork.com/projects/notebook-categories/creating-notebook-categories)

```js
tw.projects.createNotebookCategory(project_id, body)
```

### Get Link Categories in a Project

[**GET /projects/{project_id}/linkCategories.json**](https://developer.teamwork.com/projects/link-categories/retrieving-all-of-a-link-categories)

```js
tw.projects.getLinkCategories(project_id)
```

### Create a Link Category on a Project

[**POST /projects/{project_id}/linkCategories.json**](https://developer.teamwork.com/projects/link-categories/creating-link-categories)

```js
tw.projects.createLinkCategory(project_id, body)
```

### Get Companies on a Project

[**GET /projects/{project_id}/companies.json**](https://developer.teamwork.com/projects/companies/retrieving-companies-within-a-project)

```js
tw.projects.getCompanies(project_id)
```

### Get Files from a project

[**GET /projects/{project_id}/files.json**](https://developer.teamwork.com/projects/files/list-files-on-a-project)

```js
tw.projects.getFiles(project_id)
```

### Add a File on a Project

[**POST /projects/{project_id}/files.json**](https://developer.teamwork.com/projects/files/add-a-file-to-a-project)

```js
tw.projects.createFile(project_id, body)
```

### Set the Project Logo

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/projects/files/add-or-update-a-project-logo)

```js
tw.projects.logo(project_id, body)
```

### Create a Message on a Project

[**POST /projects/{project_id}/posts.json**](https://developer.teamwork.com/projects/messages/create-a-message)

```js
tw.projects.createMessage(project_id, body)
```

### Get Archived / Unarchived Messages from a project

[**GET /projects/{project_id}/posts/archive.json**](https://developer.teamwork.com/projects/messages/get-archived-messages)

```js
tw.projects.getMessages(project_id, archived)
```

### Get Archived / Unarchived Category Messages

[**GET /projects/{project_id}/cat/{category_id}/posts/archive.json**](https://developer.teamwork.com/projects/messages/get-archived-messages-by-category)

```js
tw.projects.getCategoryMessages(project_id, category_id, archived)
```

### Get Milestones from a project

[**GET /projects/{project_id}/milestones.json**](https://developer.teamwork.com/projects/milestones/list-milestones-on-a-project)

```js
tw.projects.getMilestones(project_id, query_string)
```

### Create a Milestone on a Project

[**POST /projects/{project_id}/milestones.json**](https://developer.teamwork.com/projects/milestones/create-a-single-milestone)

```js
tw.projects.createMilestone(project_id, body)
```

### Get Notebooks from a project

[**GET /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/projects/notebooks/list-notebooks-on-a-project)

```js
tw.projects.getNotebooks(project_id, query_string)
```

### Create a Notebook on a Project

[**POST /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/projects/notebooks/create-a-single-notebook)

```js
tw.projects.createNotebook(project_id, body)
```

### Get People from a project

[**GET /projects/{project_id}/people.json**](https://developer.teamwork.com/projects/people/get-all-people-within-a-project)

```js
tw.projects.getPeople(project_id)
```

### Add a Person to a project

[**POST /projects/${project_id}/people/{person_id}.json**](https://developer.teamwork.com/projects/people/add-people-to-existing-project)

```js
tw.projects.addPeople(project_id, person_id)
```

### Add / Remove multiple people from a project

[**PUT /projects/{project_id}/people.json**](https://developer.teamwork.com/projects/permissions/add-remove-multiple-people-to-from-a-project)

```js
tw.projects.people(project_id, body)
```

### Remove a Person from a project

[**POST /projects/{project_id}/people.json**](https://developer.teamwork.com/projects/people/remove-people-from-a-project)

```js
tw.projects.removePeople(project_id, body)
```

### Get a Persons project permissions

[**GET /projects/${project_id}/people/{person_id}.json**](https://developer.teamwork.com/projects/permissions/get-a-users-permissions-on-a-project)

```js
tw.projects.getPermissions(project_id, person_id)
```

### Update a Persons project permissions

[**PUT /projects/${project_id}/people/{person_id}.json**](https://developer.teamwork.com/projects/permissions/update-a-users-permissions-on-a-project)

```js
tw.projects.updatePermissions(project_id, person_id, body)
```

### Create project

[**POST /projects.json**](https://developer.teamwork.com/projects/projects/create-project)

```js
tw.projects.create(body)
```

### Update a project

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/projects/projects/update-project)

```js
tw.projects.update(project_id, body)
```

### Delete a Project

[**DELETE /projects/{project_id}.json**](https://developer.teamwork.com/projects/projects/delete-project)

```js
tw.projects.delete(project_id)
```

### Get Projects or a Project

[**GET /projects/{project_id}.json**](https://developer.teamwork.com/projects/projects/retrieve-a-single-project)

```js
tw.projects.get(query_string, project_id)
```

### Get Starred projects

[**GET /projects/starred.json**](https://developer.teamwork.com/projects/projects/retrieve-your-starred-projects)

```js
tw.projects.getStarred()
```

### Star a project

[**PUT /projects/{project_id}/star.json**](https://developer.teamwork.com/projects/projects/star-a-project)

```js
tw.projects.star(project_id)
```

### Unstar a project

[**PUT /projects/{project_id}/unstar.json**](https://developer.teamwork.com/projects/projects/unstar-a-project)

```js
tw.projects.unStar(project_id)
```

### Get rates from a project

[**GET /projects/{project_id}/rates.json**](https://developer.teamwork.com/projects/projects/get-project-rates)

```js
tw.projects.getRates(project_id, query_string)
```

### Set rates for a project

[**POST /projects/{project_id}/rates.json**](https://developer.teamwork.com/projects/projects/set-project-rates)

```js
tw.projects.setRates(project_id, body)
```

### Enable disable features

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/projects/projects/enable-and-disable-projects-features)

```js
tw.projects.features(project_id, body)
```

### Get Roles on a project

[**GET /projects/{project_id}/roles.json**](https://developer.teamwork.com/projects/project-roles/list-roles-on-a-project)

```js
tw.projects.getRoles(project_id)
```

### Get Email Addresses from a project

[**GET /projects/{project_id}/emailaddress.json**](https://developer.teamwork.com/projects/project-email-addresses/get-project-email-address)

```js
tw.projects.getEmailAddress(project_id)
```

### Set Email Address for a project

[**PUT /projects/{project_id}/emailaddress.json**](https://developer.teamwork.com/projects/project-email-addresses/update-project-email-address)

```js
tw.projects.setEmailAddress(project_id, body)
```

### Get Links from a project

[**GET /projects/{project_id}/links.json**](https://developer.teamwork.com/projects/links/list-links-on-a-project)

```js
tw.projects.getLinks(project_id)
```

### Get Risks from a project

[**GET /projects/{project_id}/risks.json**](https://developer.teamwork.com/projects/risks/retrieve-all-risks-in-a-project)

```js
tw.projects.getRisks(project_id)
```

### Get Time from a project

[**GET /projects/{project_id}/time_entries.json**](https://developer.teamwork.com/projects/time-tracking/retrieve-all-time-entries-for-a-project)

```js
tw.projects.getTime(project_id, query_string)
```

### Create a time entry on a project

[**POST /projects/{project_id}/time_entries.json**](https://developer.teamwork.com/projects/time-tracking/create-a-time-entry)

```js
tw.projects.createTime(project_id, body)
```

### Get a Time Total or Time Totals from a project

[**GET /projects/time/total.json**](https://developer.teamwork.com/projects/time-tracking/total-time-on-a-project)

```js
tw.projects.totalTime(query_string, project_id)
```

### Get Task lists from a project

[**GET /projects/{project_id}/tasklists.json**](https://developer.teamwork.com/projects/task-lists/get-all-task-lists-for-a-project)

```js
tw.projects.getTasklists(project_id, query_string)
```

### Get Tasks from a project

[**GET /projects/{project_id}/tasks.json**](https://developer.teamwork.com/projects/tasks/get-all-tasks-on-a-given-project)

```js
tw.projects.getTasks(project_id, query_string)
```

### Get Tags from a project

[**GET /projects/{project_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.projects.getTags(project_id, query_string)
```

### Update a Tag on a project

[**PUT /projects/{project_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.projects.updateTag(project_id, body)
```
