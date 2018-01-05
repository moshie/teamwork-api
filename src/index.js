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
        invoices: require('./invoice'),
        expenses: require('./expense'),
        boards: require('./board'),
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
        status: require('./status')
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
