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
        project: require('./project'),
        invoice: require('./invoice'),
        expense: require('./expense'),
        board: require('./board'),
        messageCategory: require('./categories/message'),
        fileCategory: require('./categories/file'),
        notebookCategory: require('./categories/notebook'),
        linkCategory: require('./categories/link'),
        projectCategory: require('./categories/project'),
        comment: require('./comment'),
        calendar: require('./calendar'),
        company: require('./company'),
        file: require('./file'),
        message: require('./message'),
        milestone: require('./milestone'),
        notebook: require('./notebook'),
        people: require('./people'),
        status: require('./status'),
        roles: require('./role'),
        links: require('./link'),
        risks: require('./risk'),
        time: require('./time'),
        tasklist: require('./task-list'),
        taskReminder: require('./task-reminder'),
        tag: require('./tag'),
        webhook: require('./webhook'),
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
