'use strict'

function teamwork (api_key = '', domain = '', custom_domain = false) {

    api_key = !api_key ? process.env.TW_API : api_key
    domain = !domain ? process.env.TW_SUB : domain

    if (!api_key || !domain) {
        throw new Error('api_key or domain not provided')
    } if (custom_domain &&
      !/^((\b(f|F)(t|T)(p|P)\b|\b(h|H)(t|T)(t|T)(p|P)\b|\b(h|H)(t|T)(t|T)(p|P)(s|S)\b)+(:\/\/[0-9a-zA-Z])|[0-9a-zA-Z])+\.+[0-9a-zA-Z]+(\.([0-9a-zA-z])+)+$/.test(domain)){
        throw new Error('custom domains must be fully qualified and include protocol without a trailing slash')
    }

    const api = {
        teamwork: require('./teamwork'),
        activity: require('./activity'),
        projects: require('./project'),
        invoices: require('./invoice'),
        expenses: require('./expense'),
        boards: require('./board'),
        messageCategories: require('./categories/message'),
        fileCategories: require('./categories/file'),
        notebookCategories: require('./categories/notebook'),
        linkCategories: require('./categories/link'),
        projectCategories: require('./categories/project'),
        comments: require('./comment'),
        calendar: require('./calendar'),
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
        tasklist: require('./task-list'),
        tasks: require('./task'),
        taskReminders: require('./task-reminder'),
        tags: require('./tag'),
        webhooks: require('./webhook'),
        workload: require('./workload'),
        trashcan: require('./trashcan'),
        clocking: require('./clocking')
    }

    const base = new api['teamwork'](api_key, domain, custom_domain)

    return new Proxy(base, {
        get: (target, name) => {
            return api[name] ?
                new api[name](api_key, domain, custom_domain) :
                base[name]
        }
    })
}

module.exports = teamwork
