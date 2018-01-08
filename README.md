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

[Account](/docs/base.md)

[Activity](/docs/activity.md)

[Invoices](/docs/invoices.md)

[Expenses](/docs/expenses.md)

[Boards](/docs/boards.md)

[Message Categories](/docs/message-categories.md)

[File Categories](/docs/file-categories.md)

[Notebook Categories](/docs/notebook-categories.md)

[Link Categories](/docs/link-categories.md)

[Project Categories](/docs/project-categories.md)

[Comments](/docs/comments.md)

[Calendar Events](/docs/calendar.md)

[Companies](/docs/companies.md)

[Files](/docs/files.md)

[Messages](/docs/messages.md)

[Message Replies](/docs/message-replies.md)

[Milestones](/docs/milestones.md)

[Notebooks](/docs/notebooks.md)

[People](/docs/people.md)

[Status](/docs/status.md)

[Permissions](/docs/permissions.md)

[Projects](/docs/projects.md)

[Project Roles](/docs/project-roles.md)

[Project Email Addresses](/docs/project-email-address.md)

[Links](/docs/links.md)

[Risks](/docs/risks.md)

[Search](/docs/search.md)

[Time](/docs/time.md)

[Task Lists](/docs/task-lists.md)

[Tasks](/docs/tasks.md)

[Task Reminders](/docs/task-reminders.md)

[Tags](/docs/tags.md)

[Webhooks](/docs/webhooks.md)

[Workload](/docs/workload.md)