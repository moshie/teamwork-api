"use strict"

const Teamwork = require('./teamwork')

class Project extends Teamwork {

    /**
     * Get activity for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getActivity(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/latestActivity.json`,
            body
        })
    }

    /**
     * Get invoices for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getInvoices(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/invoices.json`,
            qs
        })
    }

    /**
     * Create an invoice on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createInvoice(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/invoices.json`,
            body
        })
    }

    /**
     * Get Expenses for a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getExpenses(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/expenses.json`
        })
    }

    /**
     * Create an expense on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createExpense(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/invoices.json`,
            body
        })
    }

    /**
     * Get Message Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getMessageCategories(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/messageCategories.json`
        })
    }

    /**
     * Create a message Category on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createMessageCategory(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/messageCategories.json`,
            body
        })
    }

    /**
     * Get File Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getFileCategories(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/messageCategories.json`
        })
    }

    /**
     * Create a File Category on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createFileCategory(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/fileCategories.json`,
            body
        })
    }

    /**
     * Get Notebook Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getNotebookCategories(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/notebookCategories.json`
        })
    }

    /**
     * Create a Notebook Category on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createNotebookCategory(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/notebookCategories.json`,
            body
        })
    }

    /**
     * Get Link Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getLinkCategories(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/linkCategories.json`
        })
    }

    /**
     * Create a Link Category on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createLinkCategory(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/linkCategories.json`,
            body
        })
    }
    
    /**
     * Get Companies on a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getCompanies(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/companies.json`
        })
    }

    /**
     * Get Files from a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getFiles(project_id) {
        if (!project_id) {
            return this.handleError('No Project id provided')
        }

        return this.query({
            uri: `/projects/${project_id}/files.json`
        })
    }

    /**
     * Create a File on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createFile(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/files.json`,
            body
        })
    }

    /**
     * Set the Project Logo
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    logo(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}.json`,
            body
        })
    }

    /**
     * Create a Message on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createMessage(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/posts.json`,
            body
        })
    }

    /**
     * Get Archived / Unarchived Messages from a project
     * 
     * @param  {Number}
     * @param  {Boolean}
     * @return {Promise}
     */
    getMessages(project_id, archived = false) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: archived ? 
                `/projects/${project_id}/posts/archive.json` : 
                `/projects/${project_id}/posts.json`
        })
    }

    /**
     * Get Archived / Unarchived Category Messages
     * 
     * @param  {Number}
     * @param  {Number}
     * @param  {Boolean}
     * @return {Promise}
     */
    getCategoryMessages(project_id, category_id, archived = false) {
        if (!project_id && !category_id) {
            return this.handleError('No Project id or Category id provided')
        }

        return this.query({
            uri: archived ? 
                `/projects/${project_id}/cat/${category_id}/posts/archive.json` :
                `/projects/${project_id}/cat/${category_id}/posts.json`
        })
    }

    /**
     * Get Milestones from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getMilestones(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/milestones.json`,
            qs
        })
    }

    /**
     * Create a Milestone on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createMilestone(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/milestones.json`,
            body
        })
    }

    /**
     * Get Notebooks from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getNotebooks(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/notebooks.json`,
            qs
        })
    }

    /**
     * Create a Notebook on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createNotebook(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/notebooks.json`,
            body
        })
    }

    /**
     * Get People from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getPeople(project_id) {
        if (!project_id) {
            return this.handleError('No project id')
        }

        return this.query({
            uri: `/projects/${project_id}/people.json`
        })
    }

    /**
     * Add a Person to a project
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    addPeople(project_id, person_id) {
        if (!project_id && !person_id) {
            return this.handleError('No Project id or Person id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/people/${person_id}.json`
        })
    }

    /**
     * Add / Remove multiple people from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    people(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/people.json`,
            body
        })
    }

    /**
     * Remove a Person from a project
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    removePeople(project_id, person_id) {
        if (!project_id && !person_id) {
            return this.handleError('No Project id or Person id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/projects/${project_id}/people/${person_id}.json`
        })
    }

    /**
     * Get a Persons project permissions
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    getPermissions(project_id, person_id) {
        if (!project_id && !person_id) {
            return this.handleError('No Project id or Person id')
        }

        return this.query({
            uri: `/projects/${project_id}/people/${person_id}.json`
        })
    }

    /**
     * Update a Persons project permissions
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    updatePermissions(project_id, person_id, body = {}) {
        if (!project_id && !person_id) {
            return this.handleError('No Project id or Person id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/people/${person_id}.json`,
            body
        })
    }

    /**
     * Create project
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: `/projects.json`,
            body
        })
    }

    /**
     * Update a project
     * 
     * @param  {Object}
     * @return {Promise}
     */
    update(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}.json`,
            body
        })
    }

    /**
     * Delete a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/projects/${project_id}.json`
        })
    }

    /**
     * Get Projects or a Project
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(qs = {}, project_id) {
        return this.query({
            uri: !project_id ? 
                '/projects.json' : 
                `/projects/${project_id}.json`,
            qs
        })
    }

    /**
     * Get Starred projects
     * 
     * @return {Promise}
     */
    getStarred() {
        return this.query({
            uri: `/projects/starred.json`
        })
    }

    /**
     * Star a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    star(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/star.json`
        })
    }

    /**
     * Unstar a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    unStar(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/unstar.json`
        })
    }

    /**
     * Get a box
     * 
     * @param  {Number}
     * @return {Promise}
     */
    box(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/box.json`
        })
    }

    /**
     * Set a box
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setBox(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/box.json`,
            body
        })
    }

    /**
     * Get google drive box
     * 
     * @param  {Number}
     * @return {Promise}
     */
    googleDrive(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/googleDrive.json`
        })
    }

    /**
     * Set a google drive box
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setGoogleDrive(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/googleDrive.json`,
            body
        })
    }

    /**
     * Get rates from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getRates(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/rates.json`,
            qs
        })
    }

    /**
     * Set rates for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setRates(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/rates.json`,
            body
        })
    }

    /**
     * Enable disable features
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    features(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}.json`,
            body
        })
    }

    /**
     * Get Roles on a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getRoles(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/roles.json`
        })
    }

    /**
     * Get Email Addresses from a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getEmailAddress(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/emailaddress.json`
        })
    }

    /**
     * Set Email Address for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setEmailAddress(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/emailaddress.json`,
            body
        })
    }

    /**
     * Get Links from a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getLinks(project_id) {
        if (!project_id) {
            return this.handleError('No project id')
        }

        return this.query({
            uri: `/projects/${project_id}/links.json`
        })
    }

    /**
     * Get Risks from a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getRisks(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/risks.json`
        })
    }

    /**
     * Get Time from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTime(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/time_entries.json`,
            qs
        })
    }

    /**
     * Create a time entry on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createTime(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/time_entries.json`,
            body
        })
    }

    /**
     * Get total time from a project or all projects
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    getRates(qs = {}, project_id) {
        return this.query({
            uri: !project_id ?
                `/projects/time/total.json` : 
                `/projects/${project_id}/time/total.json`,
            qs
        })
    }

    /**
     * Get Task lists from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTasklists(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/tasklists.json`,
            qs
        })
    }

    /**
     * Get Tasks from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTasks(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/tasks.json`,
            qs
        })
    }

}

module.exports = Project