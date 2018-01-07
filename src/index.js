"use strict"

function teamwork (api_key = '', domain = '') {

    api_key = !api_key ? process.env.TW_API : api_key
    domain = !domain ? process.env.TW_SUB : domain

    if (!api_key || !domain) {
        throw new Error('api_key or domain not provided')
    }

    const api = {
        teamwork: require('./teamwork'),
        activity: require('./activity'),
        projects: require('./project'),
        invoices: require('./invoice'),
        expenses: require('./expense'),
        boards: require('./board'),
        messageCategory: require('./categories/message'),
        fileCategory: require('./categories/file'),
        notebookCategory: require('./categories/notebook'),
        linkCategory: require('./categories/link'),
        projectCategory: require('./categories/project'),
        comments: require('./comment'),
        calendars: require('./calendar'),
        companies: require('./company'),
        files: require('./file'),
        messages: require('./message'),
        milestones: require('./milestone'),
        notebooks: require('./notebook'),
        people: require('./people'),
        status: require('./status'),
        roles: require('./role'),
        links: require('./link'),
        risks: require('./risk'),
        time: require('./time'),
        tasklists: require('./task-list'),
        taskReminders: require('./task-reminder'),
        tags: require('./tag'),
        webhooks: require('./webhook'),
        workload: require('./workload')
    }

    return new Proxy({}, {
        get: (target, name) => {
            return api[name] ? 
                new api[name](api_key, domain) : 
                new api['teamwork'](api_key, domain)[name]
        }
    })
}

module.exports = teamwork
