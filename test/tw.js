'use strict'

const { expect } = require('chai')

const tw = require('../src')
const { api, domain } = require('./helpers')

// API
//

const teamwork = require('../src/teamwork')
const activity = require('../src/activity')
const projects = require('../src/project')
const invoices = require('../src/invoice')
const expenses = require('../src/expense')
const boards = require('../src/board')
const messageCategories = require('../src/categories/message')
const fileCategories = require('../src/categories/file')
const notebookCategories = require('../src/categories/notebook')
const linkCategories = require('../src/categories/link')
const projectCategories = require('../src/categories/project')
const comments = require('../src/comment')
const calendar = require('../src/calendar')
const companies = require('../src/company')
const files = require('../src/file')
const messages = require('../src/message')
const milestones = require('../src/milestone')
const notebooks = require('../src/notebook')
const people = require('../src/people')
const status = require('../src/status')
const roles = require('../src/role')
const links = require('../src/link')
const risks = require('../src/risk')
const time = require('../src/time')
const tasklist = require('../src/task-list')
const tasks = require('../src/task')
const taskReminders = require('../src/task-reminder')
const tags = require('../src/tag')
const webhooks = require('../src/webhook')
const workload = require('../src/workload')

describe('#teamwork', function () {

    // Failures
    //
    it('throws an error when no api key is provided', function () {
        expect(tw).to.throw(Error, 'api_key or domain not provided')
    })

    it('throws an error when no subdomain is provided', function () {
        expect(() => tw(api)).to.throw(Error, 'api_key or domain not provided')
    })

    it('throws an error when no api key is provided on the environment', function () {
        process.env.TW_SUB = domain
        expect(tw).to.throw(Error, 'api_key or domain not provided')
        delete process.env.TW_SUB
    })

    it('throws an error when no subdomain is provided on the environment', function () {
        process.env.TW_API = api
        expect(tw).to.throw(Error, 'api_key or domain not provided')
        delete process.env.TW_API
    })

    it('throws an error when an invalid custom domain is passed', function () {
        expect(() => tw(api, 'mycompany.com', true)).to.throw(Error, 'custom domains must be fully qualified and include protocol without a trailing slash')
    })

    it('throws an error when a custom domain with no protocol', function () {
        expect(() => tw(api, 'tw.mycompany.com', true)).to.throw(Error, 'custom domains must be fully qualified and include protocol without a trailing slash')
    })

    // Success
    //
    it('returns the default teamwork class', function () {
        const instance = tw(api, domain)
        expect(instance).to.be.an.instanceof(teamwork)
    })

    it('returns the default teamwork class when env vars are provided', function () {
        process.env.TW_API = api
        process.env.TW_SUB = domain
        const instance = tw()
        expect(instance).to.be.an.instanceof(teamwork)
        delete process.env.TW_API
        delete process.env.TW_SUB
    })

    it('returns the default teamwork class when a custom domain is used', function () {
        const instance = tw(api, 'https://projects.mydomain.net', true)
        expect(instance).to.be.an.instanceof(teamwork)
    })

    it('returns correct Class instance when called', function () {
        const instance = tw(api, domain)
        
        const sub_api = [
            'teamwork', 'activity', 'projects', 'invoices', 'expenses', 'boards', 
            'messageCategories', 'fileCategories', 'notebookCategories', 'linkCategories',
            'projectCategories', 'comments', 'calendar', 'companies', 'files', 'messages',
            'milestones', 'notebooks', 'people', 'status', 'roles', 'links', 'risks', 'time',
            'tasklist', 'tasks', 'taskReminders', 'tags', 'webhooks', 'workload'
        ]

        sub_api.forEach((value) => {
            expect(instance[value]).to.be.an.instanceof(eval(value))
        })

    })

})