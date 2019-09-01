'use strict'

const Teamwork = require('./teamwork')

class Project extends Teamwork {

    /**
     * Get activity for a project
     * 
     * @method GET
     * @uri /projects/{project_id}/latestActivity.json
     * @url https://developer.teamwork.com/projects/activity/list-latest-activity-for-a-specific-project
     * @example tw.projects.getActivity(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/invoices.json
     * @url https://developer.teamwork.com/projects/invoices/get-all-invoices-on-a-single-project
     * @example tw.projects.getInvoices(project_id, query_string)
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
     * @method POST
     * @uri /projects/{project_id}/invoices.json
     * @url https://developer.teamwork.com/projects/invoices/create-a-new-invoice-in-a-project
     * @example tw.projects.createInvoice(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/expenses.json
     * @url https://developer.teamwork.com/projects/expenses/get-all-expenses-on-a-single-project
     * @example tw.projects.getExpenses(project_id)
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
     * @method POST
     * @uri /projects/{project_id}/expenses.json
     * @url https://developer.teamwork.com/projects/expenses/create-a-new-expense-in-a-project
     * @example tw.projects.createExpense(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/messageCategories.json
     * @url https://developer.teamwork.com/projects/message-categories/retrieving-all-of-a-message-categories
     * @example tw.projects.getMessageCategories(project_id)
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
     * @method POST
     * @uri /projects/{project_id}/messageCategories.json
     * @url https://developer.teamwork.com/projects/message-categories/creating-message-categories
     * @example tw.projects.createMessageCategory(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/fileCategories.json
     * @url https://developer.teamwork.com/projects/file-categories/retrieving-all-of-a-file-categories
     * @example tw.projects.getFileCategories(project_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getFileCategories(project_id) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/fileCategories.json`
        })
    }

    /**
     * Create a File Category on a Project
     * 
     * @method POST
     * @uri /projects/{project_id}/fileCategories.json
     * @url https://developer.teamwork.com/projects/file-categories/creating-file-categories
     * @example tw.projects.createFileCategory(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/notebookCategories.json
     * @url https://developer.teamwork.com/projects/notebook-categories/retrieving-all-of-a-notebook-categories
     * @example tw.projects.getNotebookCategories(project_id)
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
     * @method POST
     * @uri /projects/{project_id}/notebookCategories.json
     * @url https://developer.teamwork.com/projects/notebook-categories/creating-notebook-categories
     * @example tw.projects.createNotebookCategory(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/linkCategories.json
     * @url https://developer.teamwork.com/projects/link-categories/retrieving-all-of-a-link-categories
     * @example tw.projects.getLinkCategories(project_id)
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
     * @method POST
     * @uri /projects/{project_id}/linkCategories.json
     * @url https://developer.teamwork.com/projects/link-categories/creating-link-categories
     * @example tw.projects.createLinkCategory(project_id, body)
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
     * @method GET
     * @uri /projects/${project_id}/companies.json
     * @url https://developer.teamwork.com/projects/companies/retrieving-companies-within-a-project
     * @example tw.projects.getCompanies(project_id)
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
     * @method GET
     * @uri /projects/{project_id}/files.json
     * @url https://developer.teamwork.com/projects/files/list-files-on-a-project
     * @example tw.projects.getFiles(project_id)
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
     * Add a File on a Project
     * 
     * @method POST
     * @uri /projects/{project_id}/files.json
     * @url https://developer.teamwork.com/projects/files/add-a-file-to-a-project
     * @example tw.projects.createFile(project_id, body)
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
     * @method PUT
     * @uri /projects/{project_id}.json
     * @url https://developer.teamwork.com/projects/files/add-or-update-a-project-logo
     * @example tw.projects.logo(project_id, body)
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
     * @method POST
     * @uri /projects/{project_id}/posts.json
     * @url https://developer.teamwork.com/projects/messages/create-a-message
     * @example tw.projects.createMessage(project_id, body)
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
     * @method GET
     * @uri /projects/${project_id}/posts/archive.json
     * @url https://developer.teamwork.com/projects/messages/get-archived-messages
     * @example tw.projects.getMessages(project_id, archived)
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
     * @method GET
     * @uri /projects/{project_id}/cat/{category_id}/posts/archive.json
     * @url https://developer.teamwork.com/projects/messages/get-archived-messages-by-category
     * @example tw.projects.getCategoryMessages(project_id, category_id, archived)
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
     * @method GET
     * @uri /projects/{project_id}/milestones.json
     * @url https://developer.teamwork.com/projects/milestones/list-milestones-on-a-project
     * @example tw.projects.getMilestones(project_id, query_string)
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
     * @method POST
     * @uri /projects/{project_id}/milestones.json
     * @url https://developer.teamwork.com/projects/milestones/create-a-single-milestone
     * @example tw.projects.createMilestone(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/notebooks.json
     * @url https://developer.teamwork.com/projects/notebooks/list-notebooks-on-a-project
     * @example tw.projects.getNotebooks(project_id, query_string)
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
     * @method POST
     * @uri /projects/{project_id}/notebooks.json
     * @url https://developer.teamwork.com/projects/notebooks/create-a-single-notebook
     * @example tw.projects.createNotebook(project_id, body)
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
     * @method GET
     * @uri /projects/{project_id}/people.json
     * @url https://developer.teamwork.com/projects/people/get-all-people-within-a-project
     * @example tw.projects.getPeople(project_id)
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
     * @method POST
     * @uri /projects/${project_id}/people/${person_id}.json
     * @url https://developer.teamwork.com/projects/people/add-people-to-existing-project
     * @example tw.projects.addPeople(project_id, person_id)
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
     * @method PUT
     * @uri /projects/${project_id}/people.json
     * @url https://developer.teamwork.com/projects/permissions/add-remove-multiple-people-to-from-a-project
     * @example tw.projects.people(project_id, body)
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
     * @method POST
     * @uri /projects/${project_id}/people.json
     * @url https://developer.teamwork.com/projects/people/remove-people-from-a-project
     * @example tw.projects.removePeople(project_id, body)
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    removePeople(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/people.json`,
            body
        })
    }

    /**
     * Get a Persons project permissions
     * 
     * @method GET
     * @uri /projects/${project_id}/people/${person_id}.json
     * @url https://developer.teamwork.com/projects/permissions/get-a-users-permissions-on-a-project
     * @example tw.projects.getPermissions(project_id, person_id)
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
     * @method PUT
     * @uri /projects/${project_id}/people/${person_id}.json
     * @url https://developer.teamwork.com/projects/permissions/update-a-users-permissions-on-a-project
     * @example tw.projects.updatePermissions(project_id, person_id, body)
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
     * @method POST
     * @uri /projects.json
     * @url https://developer.teamwork.com/projects/projects/create-project
     * @example tw.projects.create(body)
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/projects.json',
            body
        })
    }

    /**
     * Update a project
     * 
     * @method PUT
     * @uri /projects/{project_id}.json
     * @url https://developer.teamwork.com/projects/projects/update-project
     * @example tw.projects.update(project_id, body)
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
     * @method DELETE
     * @uri /projects/{project_id}.json
     * @url https://developer.teamwork.com/projects/projects/delete-project
     * @example tw.projects.delete(project_id)
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
     * @method GET
     * @uri /projects/{project_id}.json
     * @url https://developer.teamwork.com/projects/projects/retrieve-a-single-project
     * @example tw.projects.get(query_string, project_id)
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
     * @method GET
     * @uri /projects/starred.json
     * @url https://developer.teamwork.com/projects/projects/retrieve-your-starred-projects
     * @example tw.projects.getStarred()
     * 
     * @return {Promise}
     */
    getStarred() {
        return this.query({
            uri: '/projects/starred.json'
        })
    }

    /**
     * Star a project
     * 
     * @method PUT
     * @uri /projects/${project_id}/star.json
     * @url https://developer.teamwork.com/projects/projects/star-a-project
     * @example tw.projects.star(project_id)
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
     * @method PUT
     * @uri /projects/{project_id}/unstar.json
     * @url https://developer.teamwork.com/projects/projects/unstar-a-project
     * @example tw.projects.unStar(project_id)
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
     * Get rates from a project
     * 
     * @method GET
     * @uri /projects/{project_id}/rates.json
     * @url https://developer.teamwork.com/projects/projects/get-project-rates
     * @example tw.projects.getRates(project_id, query_string)
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
     * @method POST
     * @uri /projects/{project_id}/rates.json
     * @url https://developer.teamwork.com/projects/projects/set-project-rates
     * @example tw.projects.setRates(project_id, body)
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
     * @method PUT
     * @uri /projects/${project_id}.json
     * @url https://developer.teamwork.com/projects/projects/enable-and-disable-projects-features
     * @example tw.projects.features(project_id, body)
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
     * @method GET
     * @uri /projects/${project_id}/roles.json
     * @url https://developer.teamwork.com/projects/project-roles/list-roles-on-a-project
     * @example tw.projects.getRoles(project_id)
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
     * @method GET
     * @uri /projects/${project_id}/emailaddress.json
     * @url https://developer.teamwork.com/projects/project-email-addresses/get-project-email-address
     * @example tw.projects.getEmailAddress(project_id)
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
     * @method PUT
     * @uri /projects/${project_id}/emailaddress.json
     * @url https://developer.teamwork.com/projects/project-email-addresses/update-project-email-address
     * @example tw.projects.setEmailAddress(project_id, body)
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
     * @method GET
     * @uri /projects/${project_id}/links.json
     * @url https://developer.teamwork.com/projects/links/list-links-on-a-project
     * @example tw.projects.getLinks(project_id)
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
     * @method GET
     * @uri /projects/${project_id}/risks.json
     * @url https://developer.teamwork.com/projects/risks/retrieve-all-risks-in-a-project
     * @example tw.projects.getRisks(project_id)
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
     * @method GET
     * @uri /projects/${project_id}/time_entries.json
     * @url https://developer.teamwork.com/projects/time-tracking/retrieve-all-time-entries-for-a-project
     * @example tw.projects.getTime(project_id, query_string)
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
     * @method POST
     * @uri /projects/${project_id}/time_entries.json
     * @url https://developer.teamwork.com/projects/time-tracking/create-a-time-entry
     * @example tw.projects.createTime(project_id, body)
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
     * Get a Time Total or Time Totals from a project
     * 
     * @method GET
     * @uri /projects/time/total.json
     * @url https://developer.teamwork.com/projects/time-tracking/total-time-on-a-project
     * @example tw.projects.totalTime(query_string, project_id)
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    totalTime(qs = {}, project_id) {
        return this.query({
            uri: !project_id ?
                '/projects/time/total.json' :
                `/projects/${project_id}/time/total.json`,
            qs
        })
    }

    /**
     * Get Task lists from a project
     * 
     * @method GET
     * @uri /projects/{project_id}/tasklists.json
     * @url https://developer.teamwork.com/projects/task-lists/get-all-task-lists-for-a-project
     * @example tw.projects.getTasklists(project_id, query_string)
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
     * @method GET
     * @uri /projects/${project_id}/tasks.json
     * @url https://developer.teamwork.com/projects/tasks/get-all-tasks-on-a-given-project
     * @example tw.projects.getTasks(project_id, query_string)
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

    /**
     * Get Tags from a project
     * 
     * @method GET
     * @uri /projects/${project_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource
     * @example tw.projects.getTags(project_id, query_string)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTags(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/tags.json`,
            qs
        })
    }

    /**
     * Update a Tag on a project
     * 
     * @method PUT
     * @uri /projects/${project_id}/tags.json
     * @url https://developer.teamwork.com/projects/tags/update-tags-on-a-resource
     * @example tw.projects.updateTag(project_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateTag(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'PUT',
            uri: `/projects/${project_id}/tags.json`,
            body
        })
    }

}

module.exports = Project