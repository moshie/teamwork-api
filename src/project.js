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
            `/projects/{project_id}/cat/{category_id}/posts/archive.json` :
            `/projects/{project_id}/cat/{category_id}/posts.json`

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

}

module.exports = Project