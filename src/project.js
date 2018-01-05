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
    getActivity(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/latestActivity.json`, options)
        })
    }

    /**
     * Get invoices for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getInvoices(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/invoices.json`, options)
        })
    }

    /**
     * Create an invoice on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createInvoice(project_id, invoice_object = {}) {
        if (!project_id || !Object.keys(invoice_object).length) {
            return this.handleError('No project id or Invoice request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/invoices.json`
        }, invoice_object)
    }

    /**
     * Get Expenses for a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getExpenses(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/expenses.json`
        })
    }

    /**
     * Create an expense on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createExpense(project_id, expense_object = {}) {
        if (!project_id || !Object.keys(invoice_object).length) {
            return this.handleError('No project id or Expense request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/invoices.json`
        }, invoice_object)
    }

    /**
     * Get Message Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getMessageCategories(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/messageCategories.json`
        })
    }

    /**
     * Create a message Category on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createMessageCategory(project_id, category_object = {}) {
        if (!project_id || !Object.keys(category_object).length) {
            return this.handleError('No project id or Category request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/messageCategories.json`
        }, category_object)
    }

    /**
     * Get File Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getFileCategories(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/messageCategories.json`
        })
    }

    /**
     * Create a File Category on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createFileCategory(project_id, category_object = {}) {
        if (!project_id || !Object.keys(category_object).length) {
            return this.handleError('No project id or Category request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/fileCategories.json`
        }, category_object)
    }

    /**
     * Get Notebook Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getNotebookCategories(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/notebookCategories.json`
        })
    }

    /**
     * Create a Notebook Category on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createNotebookCategory(project_id, category_object = {}) {
        if (!project_id || !Object.keys(category_object).length) {
            return this.handleError('No project id or Category request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/notebookCategories.json`
        }, category_object)
    }

    /**
     * Get Link Categories in a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getLinkCategories(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/linkCategories.json`
        })
    }

    /**
     * Create a Link Category on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createLinkCategory(project_id, category_object = {}) {
        if (!project_id || !Object.keys(category_object).length) {
            return this.handleError('No project id or Category request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/linkCategories.json`
        }, category_object)
    }
    
    /**
     * Get Companies on a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getCompanies(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/companies.json`
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
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/files.json`
        })
    }

    /**
     * Create a File on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createFile(project_id, file_object = {}) {
        if (!project_id || !Object.keys(file_object).length) {
            return this.handleError('No project id or File request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/files.json`
        }, file_object)
    }

    /**
     * Set the Project Logo
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    logo(project_id, file_object = {}) {
        if (!project_id || !Object.keys(file_object).length) {
            return this.handleError('No project id or File request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}.json`
        }, file_object)
    }

    /**
     * Create a Message on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createMessage(project_id, message_object = {}) {
        if (!project_id || !Object.keys(message_object).length) {
            return this.handleError('No project id or Message request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/posts.json`
        }, message_object)
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
            return this.handleError('No project id provided')
        }

        const path = archived ?
            `/projects/${project_id}/posts/archive.json` : 
            `/projects/${project_id}/posts.json`

        return this.query({
            path
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
        if (!project_id || !category_id) {
            return this.handleError('No project id or category id provided')
        }

        const path = archived ? 
            `/projects/${project_id}/cat/${category_id}/posts/archive.json` :
            `/projects/${project_id}/cat/${category_id}/posts.json`

        return this.query({
            path
        })
    }

    /**
     * Get Milestones from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getMilestones(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/milestones.json`, options)
        })
    }

    /**
     * Create a Milestone on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createMilestone(project_id, milestone_object = {}) {
        if (!project_id || !Object.keys(milestone_object).length) {
            return this.handleError('No project id or Milestone request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/milestones.json`
        }, milestone_object)
    }

    /**
     * Get Notebooks from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getNotebooks(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/notebooks.json`, options)
        })
    }

    /**
     * Create a Notebook on a Project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createNotebook(project_id, notebook_object = {}) {
        if (!project_id || !Object.keys(notebook_object).length) {
            return this.handleError('No project id or Notebook request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/notebooks.json`
        }, notebook_object)
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
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/people.json`
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
        if (!project_id || !person_id) {
            return this.handleError('No project id or person id provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/people/${person_id}.json`
        })
    }

    /**
     * Add / Remove multiple people from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    people(project_id, people_object = {}) {
        if (!project_id || !Object.keys(people_object).length) {
            return this.handleError('No project id or people request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/people.json`
        }, people_object)
    }

    /**
     * Remove a Person from a project
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    removePeople(project_id, person_id) {
        if (!project_id || !person_id) {
            return this.handleError('No project id or person id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/projects/${project_id}/people/${person_id}.json`
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
        if (!project_id || !person_id) {
            return this.handleError('No project id or person id provided')
        }

        return this.query({
            path: `/projects/${project_id}/people/${person_id}.json`
        })
    }

    /**
     * Update a Persons project permissions
     * 
     * @param  {Number}
     * @param  {Number}
     * @return {Promise}
     */
    updatePermissions(project_id, person_id, permissons_object = {}) {
        if (!project_id || !person_id || !Object.keys(permissons_object).length) {
            return this.handleError('No project id or person id or permissions request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/people/${person_id}.json`
        }, permissons_object)
    }

    /**
     * Create project
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(project_object = {}) {
        if (!Object.keys(project_object).length) {
            return this.handleError('No project request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects.json`
        }, project_object)
    }

    /**
     * Update a project
     * 
     * @param  {Object}
     * @return {Promise}
     */
    update(project_id, project_object = {}) {
        if (!project_id || !Object.keys(project_object).length) {
            return this.handleError('No project id or project request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}.json`
        }, project_object)
    }

    /**
     * Delete a Project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/projects/${project_id}.json`
        })
    }

    /**
     * Get Projects or a Project
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    get(options = {}, project_id) {
        const path = !project_id ? 
            this.params('/projects.json', options) : 
            this.params(`/projects/${project_id}.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Get Starred projects
     * 
     * @return {Promise}
     */
    getStarred() {
        return this.query({
            path: `/projects/starred.json`
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
            return this.handleError('No project id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/star.json`
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
            return this.handleError('No project id provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/unstar.json`
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
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/box.json`
        })
    }

    /**
     * Set a box
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setBox(project_id, box_object = {}) {
        if (!project_id || !Object.keys(box_object).length) {
            return this.handleError('No project id or box request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/box.json`
        }, box_object)
    }

    /**
     * Get google drive box
     * 
     * @param  {Number}
     * @return {Promise}
     */
    googleDrive(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/googleDrive.json`
        })
    }

    /**
     * Set a google drive box
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setGoogleDrive(project_id, google_drive_object = {}) {
        if (!project_id || !Object.keys(google_drive_object).length) {
            return this.handleError('No project id or google drive request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/googleDrive.json`
        }, google_drive_object)
    }

    /**
     * Get rates from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getRates(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/rates.json`, options)
        })
    }

    /**
     * Set rates for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setRates(project_id, rates_object = {}) {
        if (!project_id || !Object.keys(rates_object).length) {
            return this.handleError('No project id or rates request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/rates.json`
        }, rates_object)
    }

    /**
     * Enable disable features
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    features(project_id, features_object = {}) {
        if (!project_id || !Object.keys(features_object).length) {
            return this.handleError('No project id or features request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}.json`
        }, features_object)
    }

    /**
     * Get Roles on a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getRoles(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/roles.json`
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
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/emailaddress.json`
        })
    }

    /**
     * Set Email Address for a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    setEmailAddress(project_id, email_object = {}) {
        if (!project_id || !Object.keys(email_object).length) {
            return this.handleError('No project id or email request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/projects/${project_id}/emailaddress.json`
        }, email_object)
    }

    /**
     * Get Links from a project
     * 
     * @param  {Number}
     * @return {Promise}
     */
    getLinks(project_id) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/links.json`
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
            return this.handleError('No project id provided')
        }

        return this.query({
            path: `/projects/${project_id}/risks.json`
        })
    }

    /**
     * Get Time from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTime(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/time_entries.json`, options)
        })
    }

    /**
     * Create a time entry on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createTime(project_id, time_object = {}) {
        if (!project_id || !Object.keys(time_object).length) {
            return this.handleError('No project id or Time request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/time_entries.json`
        }, time_object)
    }

    /**
     * Get total time from a project or all projects
     * 
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
    getRates(options = {}, project_id) {
        const path = !project_id ?
            this.params(`/projects/time/total.json`, options) : 
            this.params(`/projects/${project_id}/time/total.json`, options)

        return this.query({
            path
        })
    }

    /**
     * Get Task lists from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTasklists(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/tasklists.json`, options)
        })
    }

    /**
     * Get Tasks from a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getTasks(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/tasks.json`, options)
        })
    }

}

module.exports = Project