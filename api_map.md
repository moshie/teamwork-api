# Base
GET /account.json                               - tw.account() - ✓
GET /authenticate.json                          - tw.authenticate() - ✓

# Activity
GET /latestActivity.json                        - tw.activity.latest(options) - ✓
GET /projects/{project_id}/latestActivity.json  - tw.project.getActivity(project_id, options) - ✓
DELETE /activity/{id}.json                      - tw.activity.delete(activity_id) - ✓

# Invoices
GET /invoices.json                              - tw.invoices.get(options) - ✓
GET /projects/:id/invoices.json                 - tw.projects.getInvoices(project_id, options) - ✓
GET /invoices/:id.json                          - tw.invoices.get(options, invoice_id) - ✓
POST /invoices.json                             - tw.invoices.create(invoice_object) - ✓
POST /projects/:id/invoices.json                - tw.projects.createInvoice(project_id, invoice_object) - ✓
PUT /invoices/:id.json                          - tw.invoices.update(invoice_id, invoice_object) - ✓
DELETE /invoices/:id.json                       - tw.invoices.delete(invoice_id) - ✓
PUT /invoices/:id/complete.json                 - tw.invoices.complete(invoice_id) - ✓
PUT /invoices/:id/uncomplete.json               - tw.invoices.uncomplete(invoice_id) - ✓
GET /currencycodes.json                         - tw.invoices.currencyCodes() - ✓

# Expenses
GET /expenses.json                              - tw.expenses.get(options) - ✓
GET /projects/:id/expenses.json                 - tw.projects.getExpenses(project_id) - ✓
GET /expenses/:id.json                          - tw.expenses.get(options, expense_id) - ✓
POST /expenses.json                             - tw.expenses.create(expense_object) - ✓
POST /projects/:id/expenses.json                - tw.projects.createExpense(project_id, expense_object) - ✓
PUT /expenses/:id.json                          - tw.expenses.update(expense_id, expense_object, options) - ✓
DELETE /expenses/:id.json                       - tw.expenses.delete(expense_id) - ✓
PUT to /invoices/:invoiceid/lineitems.json      - tw.invoices.createExpense(invoice_id, expense_object) - ✓
PUT to /invoices/:invoiceid/lineitems.json      - tw.invoices.createTime(invoice_id, time_object) - ✓

# Boards
POST /projects/{project_id}/boards/columns.json     - tw.boards.createColumn(project_id) - ✓
GET /projects/{project_id}/boards/columns.json      - tw.boards.getColumns(project_id, options) - ✓
DELETE /boards/columns/{column_id}.json             - tw.boards.deleteColumn(column_id) - ✓
POST /boards/columns/{column_id}/cards.json         - tw.boards.addTask(column_id, card_object) - ✓
GET /boards/columns/{column_id}/cards.json          - tw.boards.getCards(column_id, options) - ✓
PUT /boards/columns/cards/{card_id}/move.json       - tw.boards.moveCard(card_id, move_object) - ✓
PUT /boards/columns/cards/{card_id}.json            - tw.boards.updateCard(card_id, card_object) - ✓
DELETE /boards/columns/cards/{card_id}.json         - tw.boards.deleteCard(card_id) - ✓

# Message Categories
POST /projects/{project_id}/messageCategories.json  - tw.projects.createMessageCategory(project_id, category_object) - ✓
GET /messageCategories/{id}.json                    - tw.messageCategories.get(category_id) - ✓
GET /projects/{project_id}/messageCategories.json   - tw.projects.getMessageCategories(project_id) - ✓
PUT /messageCategories/{id}.json                    - tw.messageCategories.update(category_id, category_object) - ✓
DELETE /messageCategories/{id}.json                 - tw.messageCategories.delete(category_id) - ✓

# File Categories
POST /projects/{project_id}/fileCategories.json     - tw.projects.createFileCategory(project_id, category_object) - ✓
GET /fileCategories/{id}.json                       - tw.fileCategories.get(category_id) - ✓
GET /projects/{project_id}/fileCategories.json      - tw.projects.getFileCategories(project_id) - ✓
PUT /fileCategories/{id}.json                       - tw.fileCategories.update(category_id, category_object) - ✓
DELETE /fileCategories/{id}.json                    - tw.fileCategories.delete(category_id) - ✓

# Notebook Categories
POST /projects/{project_id}/notebookCategories.json     - tw.projects.createNotebookCategory(project_id, category_object) - ✓
GET /notebookCategories/{id}.json                       - tw.notebookCategories.get(category_id) - ✓
GET /projects/{project_id}/notebookCategories.json      - tw.projects.getNotebookCategories(project_id) - ✓
PUT /notebookCategories/{id}.json                       - tw.notebookCategories.update(category_id, category_object) - ✓
DELETE /notebookCategories/{id}.json                    - tw.notebookCategories.delete(category_id) - ✓

# Link Categories
POST /projects/{project_id}/linkCategories.json         - tw.projects.createLinkCategory(project_id, category_object) - ✓
GET /linkCategories/{id}.json                           - tw.linkCategories.get(category_id) - ✓
GET /projects/{project_id}/linkCategories.json          - tw.projects.getLinkCategories(project_id) - ✓
PUT /linkCategories/{id}.json                           - tw.linkCategories.update(category_id, category_object) - ✓
DELETE /linkCategories/{id}.json                        - tw.linkCategories.delete(category_id) - ✓

# Project Categories
POST /projectcategories.json                            - tw.projectCategories.create(category_object) - ✓
GET /projectCategories/{id}.json                        - tw.projectCategories.get(category_id) - ✓
GET /projectCategories.json                             - tw.projectCategories.get() - ✓
PUT /projectCategories/{id}.json                        - tw.projectCategories.update(category_id, category_object) - ✓
DELETE /projectCategories/{id}.json                     - tw.projectCategories.delete(category_id) - ✓

# Comments
resources = [links, milestones, files, notebooks, tasks]
GET /{resource}/{resource_id}/comments.json             - tw.{resource}.getComments(resource_id, options)
POST /{resource}/{resource_id}/comments.json            - tw.{resource}.createComment(resource_id, comment_object)

GET /comments/{comment_id}.json                         - tw.comments.get(comment_id) - ✓
PUT /comments/{id}.json                                 - tw.comments.update(comment_id, comment_object) - ✓
DELETE /comments/{id}.json                              - tw.comments.delete(comment_id) - ✓
PUT /comments/{id}/markread.json                        - tw.comments.read(comment_id) - ✓

# Calendar
GET /calendarevents.json                                - tw.calendar.getEvents(options) - ✓
GET /calendarevents/{id}.json                           - tw.calendar.getEvent(event_id) - ✓
POST /calendarevents.json                               - tw.calendar.createEvent(event_object) - ✓
POST /calendarevents.json                               - tw.calendar.createEvent(event_object) // Reoccuring - ✓
PUT /calendarevents/{id}.json                           - tw.calendar.updateEvent(event_id, event_object) - ✓
DELETE /calendarevents/{id}.json                        - tw.calendar.deleteEvent(event_id) - ✓
GET /calendareventtypes.json                            - tw.calendar.getEventTypes() - ✓
POST /eventtypes.json                                   - tw.calendar.createEventType(event_type_object) - ✓
DELETE /eventtypes/{event_type_id}.json                 - tw.calendar.deleteEventType(event_type_id) - ✓
PUT /eventtypes/{event_type_id}.json                    - tw.calendar.updateEventType(event_type_id, event_type_object) - ✓

# Companies
POST /companies.json                                    - tw.companies.create(company_object) - ✓
PUT /companies/{company_id}.json                        - tw.companies.update(company_id, company_object) - ✓
DELETE /companies/{id}.json                             - tw.companies.delete(company_id) - ✓
GET /companies/{company_id}.json                        - tw.companies.get(company_id) - ✓
GET /companies.json                                     - tw.companies.get() - ✓
GET /projects/{project_id}/companies.json               - tw.projects.getCompanies(project_id) - ✓

# Files
POST /pendingfiles.json                                 - tw.files.upload(file_path) - TODO
GET /tasks/{task_id}/files.json                         - tw.tasks.getFiles(task_id)
POST /tasks/{task_id}/files.json                        - tw.tasks.createFile(task_id, file_object)

GET /projects/{project_id}/files.json                   - tw.projects.getFiles(project_id) - ✓
GET /files/{file_id}.json                               - tw.files.get(file_id) - ✓
POST /projects/{project_id}/files.json                  - tw.projects.createFile(project_id, file_object) - ✓
POST /files/{file_id}.json                              - tw.files.version(file_id, file_object) - ✓
DELETE /files/{file_id}.json                            - tw.files.delete(file_id) - ✓
GET /files/{file_id}/sharedlink.json                    - tw.files.link(file_id, options) - ✓
PUT /files/{file_id}/copy.json                          - tw.files.copy(file_id, file_object) - ✓
PUT /files/{file_id}/move.json                          - tw.files.move(file_id, file_object) - ✓
PUT /projects/{project_id}.json                         - tw.projects.logo(project_id, file_object) - ✓

# Messages
POST /projects/{project_id}/posts.json                              - tw.projects.createMessage(project_id, message_object) - ✓
GET /posts/{id}.json                                                - tw.messages.get(message_id) - ✓
GET /projects/{project_id}/posts.json                               - tw.projects.getMessages(project_id, archived: false) - ✓
GET /projects/{project_id}/posts/archive.json                       - tw.projects.getMessages(project_id, archived: true) - ✓
GET /projects/{project_id}/cat/{category_id}/posts.json             - tw.projects.getCategoryMessages(project_id, category_id, archived: false) - ✓
GET /projects/{project_id}/cat/{category_id}/posts/archive.json     - tw.projects.getCategoryMessages(project_id, category_id, archived: true) - ✓
PUT /posts/{id}.json                                                - tw.messages.update(message_id, message_object) - ✓
PUT /messages/{id}/archive.json                                     - tw.messages.archive(message_id) - ✓
PUT /messages/{id}/unarchive.json                                   - tw.messages.unArchive(message_id) - ✓
DELETE /posts/{id}.json                                             - tw.messages.delete(message_id) - ✓
PUT /messages/{id}/markread.json                                    - tw.messages.read(message_id) - ✓

# Message Replys
POST /messages/{message_id}/messageReplies.json                     - tw.messages.createReply(message_id, message_object) - ✓
GET /messageReplies/{id}.json                                       - tw.messages.getReply(message_id) - ✓
GET /messages/{id}/replies.json                                     - tw.messages.getReplies(message_id, options) - ✓
PUT /messageReplies/{id}.json                                       - tw.messages.updateReply(message_id, message_object) - ✓
DELETE /messageReplies/{id}.json                                    - tw.messages.deleteReply(message_id) - ✓
PUT /messageReplies/{id}/markread.json                              - tw.messages.readReply(message_id) - ✓

# Milestones
GET /milestones.json                                            - tw.milestones.get(options) - ✓
GET /milestones/{milestone_id}.json                             - tw.milestones.get(options, milestone_id) - ✓
GET /projects/{project_id}/milestones.json                      - tw.projects.getMilestones(project_id, options) - ✓
PUT /milestones/{id}/complete.json                              - tw.milestone.complete(milestone_id) - ✓
PUT /milestones/{id}/uncomplete.json                            - tw.milestone.incomplete(milestone_id) - ✓
POST /projects/{project_id}/milestones.json                     - tw.projects.createMilestone(milestone_object) - ✓
PUT /milestones/{milestone_id}.json                             - tw.milestone.update(milestone_id, milestone_object) - ✓
DELETE /milestones/{id}.json                                    - tw.milestone.delete(milestone_id) - ✓

# Notebooks
GET /notebooks.json                                             - tw.notebooks.get(options) - ✓
GET /notebooks/{notebook_id}.json                               - tw.notebooks.get(options, notebook_id) - ✓
GET /projects/{project_id}/notebooks.json                       - tw.projects.getNotebooks(project_id, options) - ✓
POST /projects/{project_id}/notebooks.json                      - tw.projects.createNotebook(project_id, notebook_object) - ✓
GET /notebookCategories/{id}/notebooks.json                     - tw.notebookCategories.getNotebooks(category_id, options) - ✓
PUT /notebooks/{notebook_id}.json                               - tw.notebooks.update(notebook_id, notebook_object) - ✓
PUT /notebooks/{id}/lock.json                                   - tw.notebooks.lock(notebook_id) - ✓
PUT /notebooks/{id}/unlock.json                                 - tw.notebooks.unlock(notebook_id) - ✓
DELETE /notebooks/{id}.json                                     - tw.notebooks.delete(notebook_id) - ✓
PUT /notebooks/{notebook_id}/copy.json                          - tw.notebooks.copy(notebook_id, notebook_object) - ✓
PUT /notebooks/{notebook_id}/move.json                          - tw.notebooks.move(notebook_id, notebook_object) - ✓

# People
GET /people.json                                                - tw.people.get(options) - ✓
GET /people/{person_id}.json                                    - tw.people.get(options, person_id) - ✓
PUT /people/{id}.json                                           - tw.people.update(person_id, person_object) - ✓
POST /people.json                                               - tw.people.create() - ✓
DELETE /people/{id}.json                                        - tw.people.delete(person_id) - ✓
GET /me.json                                                    - tw.people.me() - ✓
GET /stats.json                                                 - tw.people.stats(options) - ✓
GET /projects/{project_id}/people.json                          - tw.projects.getPeople() - ✓
GET /companies/{company_id}/people.json                         - tw.companies.getPeople() - ✓
GET /people/APIKeys.json                                        - tw.people.apiKeys() - ✓
PUT /people/{person_id}.json                                    - tw.people.unassignAll(person_id, person_object) - ✓

# Status
POST /people/{person_id}/status.json                            - tw.status.create(person_id, status_object) - ✓
PUT /me/status/{status_id}.json                                 - tw.status.updateMe(status_id, status_object) - ✓
PUT /people/status/{status_id}.json                             - tw.status.update(status_id, status_object) - ✓
PUT /people/{person_id}/status/{status_id}.json                 - tw.status.update(status_id, person_id, status_object) - ✓

DELETE /me/status/{status_id}.json                              - tw.status.deleteMe(status_id) - ✓
DELETE /people/status/{status_id}.json                          - tw.status.delete(status_id) - ✓
DELETE /people/{person_id}/status/{status_id}.json              - tw.status.delete(status_id, person_id) - ✓

GET /me/status.json                                             - tw.status.get() - ✓
GET /people/{user_id}/status.json                               - tw.status.get(user_id) - ✓

GET /people/status.json                                         - tw.people.status() - ✓

# Permissions
POST /projects/{id}/people/{id}.json                            - tw.projects.addPeople(project_id, person_id)
PUT /projects/{id}/people.json                                  - tw.projects.people(project_id, people_object)
DELETE /projects/{id}/people/{id}.json                          - tw.projects.removePeople(project_id, person_id)
GET /projects/{id}/people/{id}.json                             - tw.projects.getPermissions(project_id, person_id)
PUT /projects/{id}/people/{id}.json                             - tw.projects.updatePermissions(project_id, person_id, permissons_object)

# Projects
POST /projects.json                                             - tw.projects.create(project_object)
PUT /projects/{project_id}.json                                 - tw.projects.update(project_id, project_object)
DELETE /projects/{id}.json                                      - tw.projects.delete(project_id)
GET /projects.json                                              - tw.projects.get(options)
GET /projects/{project_id}.json                                 - tw.projects.get(options, project_id)
GET /companies/{id}/projects.json                               - tw.companies.getProjects(company_id)
GET /projects/starred.json                                      - tw.projects.getStarred()
PUT /projects/{project_id}/star.json                            - tw.projects.star(project_id)
PUT /projects/{project_id}/unstar.json                          - tw.projects.unStar(project_id)
GET /projects/{id}/box.json                                     - tw.projects.box(project_id)
PUT /projects/{id}/box.json                                     - tw.projects.setBox(project_id, box_object)
GET /projects/{id}/googleDrive.json                             - tw.projects.googleDrive(project_id)
PUT /projects/{id}/googleDrive.json                             - tw.projects.setGoogleDrive(project_id, google_drive_object)
GET /projects/{project_id}/rates.json                           - tw.projects.getRates(project_id, options)
POST /projects/{project_id}/rates.json                          - tw.projects.setRates(project_id, rates_object)
PUT /projects/{project_id}.json                                 - tw.projects.features(project_id, features_object)

# Project Roles
GET /projects/{id}/roles.json                                   - tw.projects.getRoles(project_id)
POST /projects/{id}/roles.json                                  - tw.roles.create(project_id, role_object)
PUT /roles/{id}.json                                            - tw.roles.update(role_id, role_object)
DELETE /roles/{id}.json                                         - tw.roles.delete(role_id)
GET /roles/{role_id}.json                                       - tw.roles.get(role_id)

# Project Email Address
GET /projects/{id}/emailaddress.json                            - tw.projects.getEmailAddress(project_id)
PUT /projects/{id}/emailaddress.json                            - tw.project.setEmailAddress(project_id)

# Links
GET /links.json                                                 - tw.links.get()
GET /projects/{project_id}/links.json                           - tw.projects.getLinks(project_id)
GET /links/{link_id}.json                                       - tw.links.get(link_id)
POST /projects/{project_id}/links.json                          - tw.links.create(project_id, link_object)
PUT /links/{link_id}.json                                       - tw.links.update(link_id, link_object)
DELETE /links/{link_id}.json                                    - tw.links.delete(link_id)

# Risks
GET /projects/{project_id}/risks.json                           - tw.risks.get(risk_id, project_id)
GET /risks/{risk_id}.json                                       - tw.risks.get(risk_id)

# Search
GET /search.json                                                - tw.search(options)

# Time Tracking
GET /time_entries.json                                          - tw.time.get(options)
GET /projects/{project_id}/time_entries.json                    - tw.projects.getTime(project_id, options)
GET /todo_items/{todo_item_id}/time_entries.json                - tw.time.todos(todo_id)
POST /projects/{project_id}/time_entries.json                   - tw.projects.createTime(project_id, time_object)
POST /tasks/{taskid}/time_entries.json                          - tw.tasks.createTime(task_id, time_object)
GET /time_entries/{id}.json                                     - tw.time.get(options, time_id)
PUT /time_entries/{id}.json                                     - tw.time.update(time_id, time_object, options)
DELETE /time_entries/{id}.json                                  - tw.time.delete(time_id)

GET /time/total.json                                            - tw.time.total(options)
GET /projects/{id}/time/total.json                              - tw.projects.totalTime(options, project_id)
GET /tasklists/{id}/time/total.json                             - tw.tasklists.totalTime(tasklist_id, options)
GET /tasks/{id}/time/total.json                                 - tw.tasks.totalTime(task_id, options)

GET /projects/time/total.json                                   - tw.projects.totalTime(options)
PUT tasks/{task_id}/estimatedtime.json                          - tw.tasks.estimatedTime(task_id)
GET to /people/{person_id}/loggedtime.json                      - tw.people.loggedTime(person_id, options)

# Task lists
GET /projects/{project_id}/tasklists.json                       - tw.tasklists.get(tasklist_id, project_id, options)
GET /tasklists/{id}.json                                        - tw.tasklists.get(tasklist_id, project_id, options)
PUT /tasklists/{id}.json                                        - tw.tasklists.update(tasklist_id, tasklist_object)
POST /projects/{project_id}/tasklists.json                      - tw.projects.createTasklist(project_id, tasklist_object, options)
DELETE /tasklists/{id}.json                                     - tw.tasklists.delete(tasklist_id)
PUT /projects/{project_id}/tasklists/reorder.json               - tw.tasklists.update(project_id, tasklist_object)
PUT /tasklist/{tasklist_id}/copy.json                           - tw.tasklist.copy(tasklist_id, tasklist_object)
PUT to /tasklist/{tasklist_id}/move.json                        - tw.tasklist.move(tasklist_id, tasklist_object)
GET /tasklists/templates.json                                   - tw.tasklist.templates()

# Tasks
GET /tasks.json                                                 - tw.tasks.get(options, task_id)
GET /projects/{id}/tasks.json                                   - tw.projects.getTasks(project_id, options)
GET /tasklists/{id}/tasks.json                                  - tw.tasklist.getTasks(tasklist_id, options)
GET /tasks/{id}.json                                            - tw.tasks.get(options, task_id)
GET /tasks/{id}/dependencies.json                               - tw.tasks.dependencies(task_id)
PUT /tasks/{id}/complete.json                                   - tw.tasks.complete(task_id)
PUT /tasks/{id}/uncomplete.json                                 - tw.tasks.incomplete(task_id)
POST /tasklists/{id}/tasks.json                                 - tw.tasks.create(task_object, options)
POST /tasks/{id}.json                                           - tw.tasks.create(task_id, task_object, options) // sub task
PUT /tasks/{id}.json                                            - tw.tasks.update(task_id, task_object)
DELETE /tasks/{id}.json                                         - tw.tasks.delete(task_id)
PUT /tasklists/{id}/tasks/reorder.json                          - tw.tasks.reorder(task_id, task_object)
GET /completedtasks.json                                        - tw.tasks.completed(options)
PUT /tasks/{task_id}.json                                       - tw.tasks.completedDate(task_id, task_object)
GET /tasks/{task_id}/followers.json                             - tw.tasks.getFollowers(task_id)
PUT /tasks/{task_id}.json                                       - tw.tasks.setFollowers(task_id, task_object)
PUT /tasks/{task_id}.json                                       - tw.tasks.removeFollowers(task_id)
POST /tasklists/{task_list_id}/quickadd.json                    - tw.tasklist.add(task_list_id, tasks_object)

# Task reminders
GET /tasks/:id/reminders.json                                   - tw.tasks.getReminders(task_id)
POST /tasks/:id/reminders.json                                  - tw.tasks.setReminder(task_id, reminder_object)
PUT /tasks/:id/reminders/:id.json                               - tw.tasks.updateReminder(task_id, reminder_object)
PUT /taskreminders/:id.json                                     - tw.reminders.update(task_id, reminder_object)
DELETE /tasks/:id/reminders/:id.json                            - tw.tasks.deleteReminder(task_id)
DELETE /taskreminders/:id.json                                  - tw.reminders.delete(task_id)

# Tags
resources = [projects, tasklists, tasks, milestones, messages, timelogs, files, users, companys, notebooks, links]
GET /tags.json                                                  - tw.tags.get()
GET /tags/{tag_id}.json                                         - tw.tags.get(tag_id)
POST /tags.json                                                 - tw.tags.create(tag_object)
PUT /tags/{tag_id}.json                                         - tw.tags.update(tag_id, tag_object)
DELETE /tags/{tag_id}.json                                      - tw.tags.delete(tag_id)
GET /{resource}/{id}/tags.json                                  - tw.{resources}.tags(resource_id, options)

# Webhooks
GET /webhooks/events.json                                       - tw.webhooks.getEvents()
GET /webhooks.json                                              - tw.webhooks.get()
GET /webhooks/:id.json                                          - tw.webooks.get(webhook_id)
PUT /webhooks/:id.json                                          - tw.webooks.update(webhook_id, webhook_object)
PUT /webhooks/:id/resume.json                                   - tw.webooks.resume(webhook_id)
PUT /webhooks/:id/pause.json                                    - tw.webooks.pause(webhook_id)
DELETE /webhooks/:id.json                                       - tw.webooks.delete(webhook_id)
POST /webhooks.json                                             - tw.webhook.create(webhook_id)
PUT /webhooks/enable.json                                       - tw.webhook.enable()
PUT /webhooks/disable.json                                      - tw.webhook.disable()

# Workload
GET /workload.json                                              - tw.workload.get(options)
