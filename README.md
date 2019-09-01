# Teamwork Api

A wrapper around teamwork api making it easier to perform requests.

[![Travis](https://img.shields.io/travis/moshie/teamwork-api.svg?style=for-the-badge)](https://travis-ci.org/moshie/teamwork-api)
[![Version](https://img.shields.io/npm/v/teamwork-api.svg?style=for-the-badge)](https://www.npmjs.com/package/teamwork-api)
[![Licence](https://img.shields.io/npm/l/teamwork-api.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Installation

```bash
$ npm install teamwork-api
```

**Getting Started**

The api key and sub-domain are required to connect to teamwork's api, provide these as environment variables like so:

```js
process.env.TW_API = '1234567890'
process.env.TW_SUB = 'subdomain'

const tw = require('teamwork-api')()
```

Alternativly pass them in as function arguments 

```js
const tw = require('teamwork-api')('1234567890', 'subdomain')
```

## Contributing

I am happy for people to contribute to this project, fix or add new features.

Be sure when adding / modifying methods that the doc blocks are correct.

The documentation is built based on these comments using `npm run docs`.

Further to this ensure when you commit you are using `npm run commit` as this will help when semantic versioning the code.

Happy coding 💻...

## API Reference

[Account](/docs/teamwork.md)

[Activity](/docs/activity.md)

[Invoices](/docs/invoice.md)

[Expenses](/docs/expense.md)

[Boards](/docs/board.md)

[Message Categories](/docs/categories/message.md)

[File Categories](/docs/categories/file.md)

[Notebook Categories](/docs/categories/notebook.md)

[Link Categories](/docs/categories/link.md)

[Clock In / Clock Out](/docs/clocking.md)

[Project Categories](/docs/categories/project.md)

[Comments](/docs/comment.md) 

[Calendar Events](/docs/calendar.md)
 
[Companies](/docs/company.md)

[Files](/docs/file.md)

[Messages](/docs/message.md)

[Milestones](/docs/milestone.md)

[Notebooks](/docs/notebook.md)

[People](/docs/people.md)

[Status](/docs/status.md)

[Projects](/docs/project.md)

[Links](/docs/link.md)

[Risks](/docs/risk.md)

[Time](/docs/time.md)

[Task Lists](/docs/task-list.md)

[Tasks](/docs/task.md)

[Task Reminders](/docs/task-reminder.md)

[Tags](/docs/tag.md)

[Webhooks](/docs/webhook.md)

[Workload](/docs/workload.md)

[Trashcan](/docs/trashcan.md)