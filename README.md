# Teamwork Api Wrapper

A node wrapper around teamwork projects api making it easier to perform api requests.

## Installation

`$ npm install teamwork-api`

**Getting Started**

The api key and sub-domain are required to connect to teamwork's api, provide these as environment variables like so:

```
process.env.TW_API = '1234567890'
process.env.TW_SUB = 'subdomain'

var tw = require('teamwork-api')()

```

Alternativly pass them in as function arguments 


```
var tw = require('teamwork-api')('1234567890', 'subdomain')

```

## API Reference

[**GET /account.json**](https://developer.teamwork.com/account#get_account_detai)

```
tw.account()
```


[**GET /authenticate.json**](https://developer.teamwork.com/account#the_'authenti)

```
tw.authenticate()
```

### Activity

[**GET /latestActivity.json**](https://developer.teamwork.com/activity#latest_activity_a)                   

```
tw.activity.latest({
	maxItems: 60,
	onlyStarred: false
})
```

[**GET /projects/{project_id}/latestActivity.json**](https://developer.teamwork.com/activity#list_latest_activ)

```
tw.project.getActivity(project_id, {
	maxItems: 60
})
```
  
[**DELETE /activity/{id}.json**](https://developer.teamwork.com/activity#delete_an_activit)                      

```
tw.activity.delete(activity_id)
```

### Invoices

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

### Expenses

[**GET /expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)
                              
```
tw.expenses.get()
```

[**GET /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#get_all_expenses_)

```
tw.projects.getExpenses(project_id)
```

[**GET /expenses/:id.json**](https://developer.teamwork.com/expenses#get_a_single_expe)

```
tw.expenses.get(expense_id)
```

[**POST /expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```
tw.expenses.create({
	"expense": {
		// --
	}
})
```

[**POST /projects/:id/expenses.json**](https://developer.teamwork.com/expenses#create_a_new_expe)

```
tw.projects.createExpense(project_id, {
	"expense": {
		// --
	}
})
```

[**PUT /expenses/:id.json**](https://developer.teamwork.com/expenses#update_a_single_e)

```
tw.expenses.update(expense_id, {
	"expense": {
		// --
	}
})
```

[**DELETE /expenses/:id.json**](https://developer.teamwork.com/expenses#delete_a_single_e)

```
tw.expenses.delete(expense_id)
```

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_an_unbilled_e)

```
tw.invoices.createExpense(invoice_id, {
	"lineitems": {
		// --
	}
})
```

[**PUT to /invoices/:invoiceid/lineitems.json**](https://developer.teamwork.com/expenses#add_a_time_entry_)

```
tw.invoices.createTime(invoice_id, {
	"lineitems": {
		// --
	}
})
```

### Boards

[**POST /projects/{project_id}/boards/columns.json**](https://developer.teamwork.com/boards#create_a_new_colu)

```
tw.boards.createColumn(project_id, {
	"column": {
		// --
	}
})
```

[**GET /projects/{project_id}/boards/columns.json**](https://developer.teamwork.com/boards#list_columns)

```
tw.boards.getColumns(project_id, {
	page: 1,
	pageSize: 60,
	showDeleted: 0,
	deletedAfterDate: null,
	updatedAfterDate: null
})
```

[**DELETE /boards/columns/{column_id}.json**](https://developer.teamwork.com/boards#delete_a_column)

```
tw.boards.deleteColumn(column_id)
```

[**POST /boards/columns/{column_id}/cards.json**](https://developer.teamwork.com/boards#add_a_task_from_t)

```
tw.boards.addTask(column_id, {
	"card": {
		// --
	},
	"positionAfterId": -1
})
```

[**GET /boards/columns/{column_id}/cards.json**](https://developer.teamwork.com/boards#list_cards_in_a_c)

```
tw.boards.getCards(column_id, {
	page: 1,
	pageSize: 60,
	showDeleted: false,
	searchTerm: null,
	'responsible-party-ids': null,
	deletedAfterDate: null,
	updatedAfterDate: null
})
```

[**PUT /boards/columns/cards/{card_id}/move.json**](https://developer.teamwork.com/boards#move_a_card)

```
tw.boards.moveCard(card_id, {
	// --
})
```

[**PUT /boards/columns/cards/{card_id}.json**](https://developer.teamwork.com/boards#edit_a_card)

```
tw.boards.updateCard(card_id, {
	"card": {
		// --
	}
})
```

[**DELETE /boards/columns/cards/{card_id}.json**](https://developer.teamwork.com/boards#remove_a_card)

```
tw.boards.deleteCard(card_id)
```

### Message Categories

[**POST /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#creating_categori)

```
tw.projects.createMessageCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#retrieve_a_single)

```
tw.messageCategories.get(category_id)
```

[**GET /projects/{project_id}/messageCategories.json**](https://developer.teamwork.com/messagecategories#retrieving_all_of)

```
tw.projects.getMessageCategories(project_id)
```

[**PUT /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#updating_a_catego)

```
tw.messageCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /messageCategories/{id}.json**](https://developer.teamwork.com/messagecategories#destroying_a_cate)

```
tw.messageCategories.delete(category_id)
```

### File Categories

[**POST /projects/{project_id}/fileCategories.json**](https://developer.teamwork.com/filecategories#creating_categori)

```
tw.projects.createFileCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /fileCategories/{id}.json**](https://developer.teamwork.com/filecategories#retrieve_a_single)

```
tw.fileCategories.get(category_id)
```

[**GET /projects/{project_id}/fileCategories.json**](https://developer.teamwork.com/filecategories#retrieving_all_of)

```
tw.projects.getFileCategories(project_id)
```

[**PUT /fileCategories/{id}.json**](https://developer.teamwork.com/filecategories#updating_a_catego)

```
tw.fileCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /fileCategories/{id}.json**](https://developer.teamwork.com/filecategories#destroying_a_cate)

```
tw.fileCategories.delete(category_id)
```

# Notebook Categories

[**POST /projects/{project_id}/notebookCategories.json**](https://developer.teamwork.com/notebookcategories#creating_categori)

```
tw.projects.createNotebookCategory(project_id, {
	"category": {
		// --
	}
})
```

[**GET /notebookCategories/{id}.json**](https://developer.teamwork.com/notebookcategories#retrieve_a_single)

```
tw.notebookCategories.get(category_id)
```

[**GET /projects/{project_id}/notebookCategories.json**](https://developer.teamwork.com/notebookcategories#retrieving_all_of)

```
tw.projects.getNotebookCategories(project_id)
```

[**PUT /notebookCategories/{id}.json**](https://developer.teamwork.com/notebookcategories#updating_a_catego)

```
tw.notebookCategories.update(category_id, {
	"category": {
		// --
	}
})
```

[**DELETE /notebookCategories/{id}.json**](https://developer.teamwork.com/notebookcategories#destroying_a_cate)

```
tw.notebookCategories.delete(category_id)
```

# Link Categories

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

# Project Categories

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

# Comments

# TBA
resources = `[links, milestones, files, notebooks, tasks]`

GET /{resource}/{resource_id}/comments.json             

- tw.{resource}.getComments(resource_id, options)

POST /{resource}/{resource_id}/comments.json            

- tw.{resource}.createComment(resource_id, comment_object)


[**GET /comments/{comment_id}.json**](https://developer.teamwork.com/comments#retrieving_a_spec)

```
tw.comments.get(comment_id)
```

[**PUT /comments/{id}.json**](https://developer.teamwork.com/comments#updating_a_commen)

```
tw.comments.update(comment_id, {
	"comment": {
		// --
	}
})
```

[**DELETE /comments/{id}.json**](https://developer.teamwork.com/comments#destroying_a_comm)

```
tw.comments.delete(comment_id)
```

[**PUT /comments/{id}/markread.json**](https://developer.teamwork.com/comments#mark_a_comment_as)

```
tw.comments.read(comment_id)
```

# Calendar

[**GET /calendarevents.json**](https://developer.teamwork.com/events#get_events)

```
tw.calendar.getEvents({
	startdate: '',
	enddate: '',
	showDeleted: true,
	updatedAfterDate: '',
	eventTypeId: 0
})
```

[**GET /calendarevents/{id}.json**](https://developer.teamwork.com/events#get_an_event)

```
tw.calendar.getEvent(event_id)
```

[**POST /calendarevents.json**](https://developer.teamwork.com/events#create_an_event)

```
tw.calendar.createEvent({
	"event": {
		// --
		"repeat": {}
	}
})
```

[**PUT /calendarevents/{id}.json**](https://developer.teamwork.com/events#edit_an_event)

```
tw.calendar.updateEvent(event_id, {
	"event": {
		// --
	}
})
```

[**DELETE /calendarevents/{id}.json**](https://developer.teamwork.com/events#delete_event)

```
tw.calendar.deleteEvent(event_id)
```

[**GET /calendareventtypes.json**](https://developer.teamwork.com/events#get_event_types)

```
tw.calendar.getEventTypes()
```

[**POST /eventtypes.json**](https://developer.teamwork.com/events#create_an_event_t)

```
tw.calendar.createEventType({
	"eventtype": {
		// --
	}
})
```

[**DELETE /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/events#delete_an_event_t)

```
tw.calendar.deleteEventType(event_type_id)
```

[**PUT /eventtypes/{event_type_id}.json**](https://developer.teamwork.com/events#edit_an_event_typ)

```
tw.calendar.updateEventType(event_type_id, {
	"eventtype": {
		// --
	}
})
```

# Companies
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

# Files

[**POST /pendingfiles.json**](https://developer.teamwork.com/uploadingfiles)

```
tw.files.upload(file_path) // TBA
```

[**GET /tasks/{task_id}/files.json**](https://developer.teamwork.com/files#list_files_on_a_t)

```
tw.tasks.getFiles(task_id)
```

[**GET /projects/{project_id}/files.json**](https://developer.teamwork.com/files#list_files_on_a_p)

```
tw.projects.getFiles(project_id)
```

[**GET /files/{file_id}.json**](https://developer.teamwork.com/files#get_a_single_file)

```
tw.files.get(file_id)
```

[**POST /tasks/{task_id}/files.json**](https://developer.teamwork.com/files#add_a_file_to_a_t)

```
tw.tasks.createFile(task_id, {
	"task": {
		// --
	}
})
```

[**POST /projects/{project_id}/files.json**](https://developer.teamwork.com/files#add_a_file_to_a_p)

```
tw.projects.createFile(project_id, {
	"file": {
		// --
	}
})
```

[**POST /files/{file_id}.json**](https://developer.teamwork.com/files#add_a_new_file_ve)

```
tw.files.version(file_id, {
	"fileversion": {
		// --
	}
})
```

[**DELETE /files/{file_id}.json**](https://developer.teamwork.com/files#delete_a_file_fro)

```
tw.files.delete(file_id)
```

[**GET /files/{file_id}/sharedlink.json**](https://developer.teamwork.com/files#get_a_short_url_f)

```
tw.files.link(file_id, {
	version: 2
})
```

[**PUT /files/{file_id}/copy.json**](https://developer.teamwork.com/files#copy_or_move_a_fi)

```
tw.files.copy(file_id, {
	// --
})
```

[**PUT /files/{file_id}/move.json**](https://developer.teamwork.com/files#copy_or_move_a_fi)

```
tw.files.move(file_id, {
	// --
})
```

[**PUT /projects/{project_id}.json**](https://developer.teamwork.com/files#add_or_update_a_p)

```
tw.projects.logo(project_id, {
	"project": {
		// --
	}
})
```

### Messages

[**POST /projects/{project_id}/posts.json**](https://developer.teamwork.com/messages#create_a_message)

```
tw.projects.createMessage(project_id, {
	"post": {
		// --
	}
})
```

[**GET /posts/{id}.json**](https://developer.teamwork.com/messages#retrieve_a_single)

```
tw.messages.get(message_id)
```

[**GET /projects/{project_id}/posts.json**](https://developer.teamwork.com/messages#retrieve_latest_m)

```
tw.projects.getMessages(project_id, false)
```

[**GET /projects/{project_id}/cat/{category_id}/posts.json**](https://developer.teamwork.com/messages#retrieve_messages)

```
tw.projects.getCategoryMessages(project_id, category_id, false)
```

[**PUT /posts/{id}.json**](https://developer.teamwork.com/messages#update_message)

```
tw.messages.update(message_id, {
	"post": {
		// --
	}
})
```

[**GET /projects/{project_id}/posts/archive.json**](https://developer.teamwork.com/messages#get_archived_mess)

```
tw.projects.getMessages(project_id, true)
```

[**GET /projects/{project_id}/cat/{category_id}/posts/archive.json**](https://developer.teamwork.com/messages#get_archived_mess)

```
tw.projects.getCategoryMessages(project_id, category_id, true)
```

[**PUT /messages/{id}/archive.json**](https://developer.teamwork.com/messages#archive_a_message)

```
tw.messages.archive(message_id)
```

[**PUT /messages/{id}/unarchive.json**](https://developer.teamwork.com/messages#un-archive_a_mess)

```
tw.messages.unArchive(message_id)
```

[**DELETE /posts/{id}.json**](https://developer.teamwork.com/messages#destroy_message)

```
tw.messages.delete(message_id)
```

[**PUT /messages/{id}/markread.json**](https://developer.teamwork.com/messages#mark_message_read)

```
tw.messages.read(message_id)
```

# Message Replys

[**POST /messages/{message_id}/messageReplies.json**](https://developer.teamwork.com/messagereplies#create_a_message_)

```
tw.messages.createReply(message_id, {
	"messagereply": {
		// --
	}
})
```

[**GET /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#retrieve_a_single)

```
tw.messages.getReply(message_id)
```

[**GET /messages/{id}/replies.json**](https://developer.teamwork.com/messagereplies#retrieve_replies_)

```
tw.messages.getReplies(message_id, {
	page: 2,
	pageSize: 50
})
```

[**PUT /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#update_message_re)

```
tw.messages.updateReply(message_id, {
	"messagereply": {
		// --
	}
})
```

[**DELETE /messageReplies/{id}.json**](https://developer.teamwork.com/messagereplies#destroy_message_r)

```
tw.messages.deleteReply(message_id)
```

[**PUT /messageReplies/{id}/markread.json**](https://developer.teamwork.com/messagereplies#mark_message_repl)

```
tw.messages.readReply(message_id)
```

# Milestones

[**GET /milestones.json**](https://developer.teamwork.com/milestones#list_all_mileston)

```
tw.milestones.get({
	page: 1,
	pageSize: 200
})
```

[**GET /projects/{project_id}/milestones.json**](https://developer.teamwork.com/milestones#list_milestones_o)

```
tw.projects.getMilestones(project_id, {
	getProgress: true
})
```

[**GET /milestones/{milestone_id}.json**](https://developer.teamwork.com/milestones#get_a_single_mile)

```
tw.milestones.get({
	getProgress: true
}, milestone_id)
```

[**PUT /milestones/{id}/complete.json**](https://developer.teamwork.com/milestones#complete)

```
tw.milestone.complete(milestone_id)
```

[**PUT /milestones/{id}/uncomplete.json**](https://developer.teamwork.com/milestones#uncomplete)

```
tw.milestone.incomplete(milestone_id)
```

[**POST /projects/{project_id}/milestones.json**](https://developer.teamwork.com/milestones#create_a_single_m)

```
tw.projects.createMilestone({
	"milestone": {
		// --
	}
})
```

[**PUT /milestones/{milestone_id}.json**](https://developer.teamwork.com/milestones#update)

```
tw.milestone.update(milestone_id, {
	"milestone": {
		// --
	}
})
```

[**DELETE /milestones/{id}.json**](https://developer.teamwork.com/milestones#delete)

```
tw.milestone.delete(milestone_id)
```

# Notebooks
[**GET /notebooks.json**](https://developer.teamwork.com/notebooks#list_all_notebook)

```
tw.notebooks.get({
	includeContent: true
})
```

[**GET /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/notebooks#list_notebooks_on)

```
tw.projects.getNotebooks(project_id, options)
```

[**GET /notebookCategories/{id}/notebooks.json**](https://developer.teamwork.com/notebooks#list_notebooks_in)

```
tw.notebookCategories.getNotebooks(category_id, options) 
```

[**GET /notebooks/{notebook_id}.json**](https://developer.teamwork.com/notebooks#get_a_single_note)

```
tw.notebooks.get({}, notebook_id)
```

[**POST /projects/{project_id}/notebooks.json**](https://developer.teamwork.com/notebooks#create_a_single_n)

```
tw.projects.createNotebook(project_id, {
	"notebook": {
		// --
	}
})
```

[**PUT /notebooks/{notebook_id}.json**](https://developer.teamwork.com/notebooks#update_a_single_n)

```
tw.notebooks.update(notebook_id, {
	"notebook": {
		// --
	}
})
```

[**PUT /notebooks/{id}/lock.json**](https://developer.teamwork.com/notebooks#lock_a_single_not)

```
tw.notebooks.lock(notebook_id)
```

[**PUT /notebooks/{id}/unlock.json**](https://developer.teamwork.com/notebooks#unlock_a_single_n)

```
tw.notebooks.unlock(notebook_id)
```

[**DELETE /notebooks/{id}.json**](https://developer.teamwork.com/notebooks#delete_a_single_n)

```
tw.notebooks.delete(notebook_id)
```

[**PUT /notebooks/{notebook_id}/copy.json**](https://developer.teamwork.com/notebooks#copy_a_notebook_t)

```
tw.notebooks.copy(notebook_id, {
	// --
})
```

[**PUT /notebooks/{notebook_id}/move.json**](https://developer.teamwork.com/notebooks#move_a_notebook_t)

```
tw.notebooks.move(notebook_id, {
	// --
})
```

# People

[**GET /people.json**](https://developer.teamwork.com/people#get_people)

```
tw.people.get({
	page: 2,
	pageSize: 50
})
```

[**GET /people/{person_id}.json**](https://developer.teamwork.com/people#retrieve_a_specif)

```
tw.people.get({}, person_id)
```

[**PUT /people/{id}.json**](https://developer.teamwork.com/people#edit_user)

```
tw.people.update(person_id, {
	"person": {
		// --
	}
})
```

[**POST /people.json**](https://developer.teamwork.com/people#add_a_new_user)

```
tw.people.create()
```

[**DELETE /people/{id}.json**](https://developer.teamwork.com/people#delete_user)

```
tw.people.delete(person_id)
```

[**GET /me.json**](https://developer.teamwork.com/people#get_current_user_)

```
tw.people.me()
```

[**GET /stats.json**](https://developer.teamwork.com/people#current_user_summ)

```
tw.people.stats({
	getPermissions: true,
	onlymyprojects: 1,
	onlyMyEvents: true,
	eventsInNext: 1
})
```

[**GET /projects/{project_id}/people.json**](https://developer.teamwork.com/people#get_all_people_(w)

```
tw.projects.getPeople()
```

[**GET /companies/{company_id}/people.json**](https://developer.teamwork.com/people#get_people_(withi)
tw.companies.getPeople() - ✓

[**GET /people/APIKeys.json**](https://developer.teamwork.com/people#retrieve_a_api_ke)

```
tw.people.apiKeys()
```

[**PUT /people/{person_id}.json**](https://developer.teamwork.com/people#unassign_a_user_f)

```
tw.people.unassignAll(person_id, {
	"person": {
		// --
	}
})
```

# Status
[**POST /people/{person_id}/status.json**](https://developer.teamwork.com/people-status#create_status)

```
tw.status.create(person_id, {
	"userstatus": {
		// --
	}
})
```

[**PUT /me/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```
tw.status.updateMe(status_id, {
	"userstatus": {
		// --
	}
})
```

[**PUT /people/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```
tw.status.update(status_id, {
	"userstatus": {
		// --
	}
})
```

[**PUT /people/{person_id}/status/{status_id}.json**](https://developer.teamwork.com/people-status#update_status)

```
tw.status.update(status_id, person_id, {
	"userstatus": {
		// --
	}
})
```

[**DELETE /me/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```
tw.status.deleteMe(status_id)
```

[**DELETE /people/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```
tw.status.delete(status_id)
```

[**DELETE /people/{person_id}/status/{status_id}.json**](https://developer.teamwork.com/people-status#delete_status)

```
tw.status.delete(status_id, person_id)
```

[**GET /me/status.json**](https://developer.teamwork.com/people-status#retrieve_a_person)

```
tw.status.get()
```

[**GET /people/{user_id}/status.json**](https://developer.teamwork.com/people-status#retrieve_a_person)

```
tw.status.get(user_id)
```

[**GET /people/status.json**](https://developer.teamwork.com/people-status#retrieve_everybod)

```
tw.people.status()
```

# Permissions

[**POST /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#add_a_new_user_to)

```
tw.projects.addPeople(project_id, person_id)
```

[**PUT /projects/{id}/people.json**](https://developer.teamwork.com/permissions#add/remove_multip)

```
tw.projects.people(project_id, {
	"add": {
		// --
	},
	"remove": {
		// --
	}
})
```

[**DELETE /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#remove_a_user_fro)

```
tw.projects.removePeople(project_id, person_id)
```

[**GET /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#get_a_users_permi)

```
tw.projects.getPermissions(project_id, person_id)
```

[**PUT /projects/{id}/people/{id}.json**](https://developer.teamwork.com/permissions#update_a_users_pe)

```
tw.projects.updatePermissions(project_id, person_id, {
	"permissions": {
		// --
	}
})
```

# Projects
POST /projects.json                                             - tw.projects.create(project_object) - ✓
PUT /projects/{project_id}.json                                 - tw.projects.update(project_id, project_object) - ✓
DELETE /projects/{id}.json                                      - tw.projects.delete(project_id) - ✓
GET /projects.json                                              - tw.projects.get(options) - ✓
GET /projects/{project_id}.json                                 - tw.projects.get(options, project_id) - ✓
GET /companies/{id}/projects.json                               - tw.companies.getProjects(company_id) - ✓
GET /projects/starred.json                                      - tw.projects.getStarred() - ✓
PUT /projects/{project_id}/star.json                            - tw.projects.star(project_id) - ✓
PUT /projects/{project_id}/unstar.json                          - tw.projects.unStar(project_id) - ✓
GET /projects/{id}/box.json                                     - tw.projects.box(project_id) - ✓
PUT /projects/{id}/box.json                                     - tw.projects.setBox(project_id, box_object) - ✓
GET /projects/{id}/googleDrive.json                             - tw.projects.googleDrive(project_id) - ✓
PUT /projects/{id}/googleDrive.json                             - tw.projects.setGoogleDrive(project_id, google_drive_object) - ✓
GET /projects/{project_id}/rates.json                           - tw.projects.getRates(project_id, options) - ✓
POST /projects/{project_id}/rates.json                          - tw.projects.setRates(project_id, rates_object) - ✓
PUT /projects/{project_id}.json                                 - tw.projects.features(project_id, features_object) - ✓

# Project Roles
GET /projects/{id}/roles.json                                   - tw.projects.getRoles(project_id) - ✓
POST /projects/{id}/roles.json                                  - tw.roles.create(project_id, role_object) - ✓
PUT /roles/{id}.json                                            - tw.roles.update(role_id, role_object) - ✓
DELETE /roles/{id}.json                                         - tw.roles.delete(role_id) - ✓
GET /roles/{role_id}.json                                       - tw.roles.get(role_id) - ✓

# Project Email Address
GET /projects/{id}/emailaddress.json                            - tw.projects.getEmailAddress(project_id) - ✓
PUT /projects/{id}/emailaddress.json                            - tw.project.setEmailAddress(project_id, email_object) - ✓

# Links
GET /links.json                                                 - tw.links.get() - ✓
GET /projects/{project_id}/links.json                           - tw.projects.getLinks(project_id) - ✓
GET /links/{link_id}.json                                       - tw.links.get(link_id) - ✓
POST /projects/{project_id}/links.json                          - tw.links.create(project_id, link_object) - ✓
PUT /links/{link_id}.json                                       - tw.links.update(link_id, link_object) - ✓
DELETE /links/{link_id}.json                                    - tw.links.delete(link_id) - ✓

# Risks
GET /projects/{project_id}/risks.json                           - tw.projects.getRisks(risk_id, project_id) - ✓
GET /risks/{risk_id}.json                                       - tw.risks.get(risk_id) - ✓

# Search
GET /search.json                                                - tw.search(options) - ✓

# Time Tracking
POST /tasks/{taskid}/time_entries.json                          - tw.tasks.createTime(task_id, time_object)
GET /tasklists/{id}/time/total.json                             - tw.tasklists.totalTime(tasklist_id, options)
GET /tasks/{id}/time/total.json                                 - tw.tasks.totalTime(task_id, options)
PUT tasks/{task_id}/estimatedtime.json                          - tw.tasks.estimatedTime(task_id)

GET /time_entries.json                                          - tw.time.get(options) - ✓
GET /time_entries/{id}.json                                     - tw.time.get(options, time_id) - ✓
PUT /time_entries/{id}.json                                     - tw.time.update(time_id, time_object, options) - ✓
DELETE /time_entries/{id}.json                                  - tw.time.delete(time_id) - ✓

GET /projects/{project_id}/time_entries.json                    - tw.projects.getTime(project_id, options) - ✓
GET /todo_items/{todo_item_id}/time_entries.json                - tw.time.todos(todo_id) - ✓
POST /projects/{project_id}/time_entries.json                   - tw.projects.createTime(project_id, time_object) - ✓

GET /time/total.json                                            - tw.time.total(options) - ✓
GET /projects/{id}/time/total.json                              - tw.projects.totalTime(options, project_id) - ✓
GET /projects/time/total.json                                   - tw.projects.totalTime(options) - ✓
GET to /people/{person_id}/loggedtime.json                      - tw.people.loggedTime(person_id, options) - ✓

# Task lists
GET /projects/{project_id}/tasklists.json                       - tw.projects.getTasklists(project_id, options) - ✓

PUT /projects/{project_id}/tasklists/reorder.json               - tw.tasklist.reorder(project_id, tasklist_object) - ✓
POST /projects/{project_id}/tasklists.json                      - tw.tasklist.create(project_id, tasklist_object, options) - ✓
GET /tasklists/{id}.json                                        - tw.tasklist.get(tasklist_id) - ✓
PUT /tasklists/{id}.json                                        - tw.tasklist.update(tasklist_id, tasklist_object) - ✓
DELETE /tasklists/{id}.json                                     - tw.tasklist.delete(tasklist_id) - ✓
PUT /tasklist/{tasklist_id}/copy.json                           - tw.tasklist.copy(tasklist_id, tasklist_object) - ✓
PUT to /tasklist/{tasklist_id}/move.json                        - tw.tasklist.move(tasklist_id, tasklist_object) - ✓
GET /tasklists/templates.json                                   - tw.tasklist.templates() - ✓

# Tasks
GET /tasks.json                                                 - tw.tasks.get(options, task_id) - ✓
GET /tasks/{id}.json                                            - tw.tasks.get(options, task_id) - ✓
PUT /tasks/{id}.json                                            - tw.tasks.update(task_id, task_object) - ✓
DELETE /tasks/{id}.json                                         - tw.tasks.delete(task_id) - ✓
POST /tasklists/{id}/tasks.json                                 - tw.tasks.create(tasklist_id, task_object, options) - ✓
POST /tasks/{id}.json                                           - tw.tasks.subtask(task_id, task_object, options) - ✓
PUT /tasks/{id}/complete.json                                   - tw.tasks.complete(task_id) - ✓
PUT /tasks/{id}/uncomplete.json                                 - tw.tasks.incomplete(task_id) - ✓
GET /tasks/{id}/dependencies.json                               - tw.tasks.dependencies(task_id) - ✓
PUT /tasklists/{id}/tasks/reorder.json                          - tw.tasks.reorder(tasklist_id, task_object) - ✓
GET /completedtasks.json                                        - tw.tasks.completed(options) - ✓
PUT /tasks/{task_id}.json                                       - tw.tasks.completedDate(task_id, task_object) - ✓
GET /tasks/{task_id}/followers.json                             - tw.tasks.getFollowers(task_id) - ✓
PUT /tasks/{task_id}.json                                       - tw.tasks.setFollowers(task_id, task_object) - ✓
PUT /tasks/{task_id}.json                                       - tw.tasks.removeFollowers(task_id, tasks_object) - ✓
POST /tasklists/{task_list_id}/quickadd.json                    - tw.tasklist.quickadd(task_list_id, tasks_object) - ✓
GET /projects/{id}/tasks.json                                   - tw.projects.getTasks(project_id, options) - ✓
GET /tasklists/{id}/tasks.json                                  - tw.tasklist.getTasks(tasklist_id, options) - ✓

# Task reminders
GET /tasks/:id/reminders.json                                   - tw.taskReminder.get(task_id) - ✓
POST /tasks/:id/reminders.json                                  - tw.taskReminder.create(task_id, reminder_object) - ✓
PUT /tasks/:id/reminders/:id.json                               - tw.tasks.update(reminder_object = {}, reminder_id, task_id) - ✓
DELETE /tasks/:id/reminders/:id.json                            - tw.tasks.deleteReminder(reminder_id, task_id) - ✓

# Tags
resources = [projects, tasklists, tasks, milestones, messages, timelogs, files, users, companys, notebooks, links]
GET /{resource}/{id}/tags.json                                  - tw.{resources}.tags(resource_id, options)

GET /tags.json                                                  - tw.tags.get() - ✓
GET /tags/{tag_id}.json                                         - tw.tags.get(tag_id) - ✓
POST /tags.json                                                 - tw.tags.create(tag_object) - ✓
PUT /tags/{tag_id}.json                                         - tw.tags.update(tag_id, tag_object) - ✓
DELETE /tags/{tag_id}.json                                      - tw.tags.delete(tag_id) - ✓

# Webhooks
GET /webhooks/events.json                                       - tw.webhooks.getEvents() - ✓
GET /webhooks.json                                              - tw.webhooks.get() - ✓
GET /webhooks/:id.json                                          - tw.webooks.get(webhook_id) - ✓
PUT /webhooks/:id.json                                          - tw.webooks.update(webhook_id, webhook_object) - ✓
PUT /webhooks/:id/resume.json                                   - tw.webooks.resume(webhook_id) - ✓
PUT /webhooks/:id/pause.json                                    - tw.webooks.pause(webhook_id) - ✓
DELETE /webhooks/:id.json                                       - tw.webooks.delete(webhook_id) - ✓
POST /webhooks.json                                             - tw.webhook.create(webhook_object) - ✓
PUT /webhooks/enable.json                                       - tw.webhook.enable() - ✓
PUT /webhooks/disable.json                                      - tw.webhook.disable() - ✓

# Workload
GET /workload.json                                              - tw.workload.get(options) - ✓
