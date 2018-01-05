"use strict"

const Teamwork = require('./teamwork')

class Role extends Teamwork {

    /**
     * Get a Role
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(role_id) {
        if (!role_id) {
            return this.handleError('No role id provided')
        }

        return this.query({
            path: `/roles/${role_id}.json`
        })
    }

    /**
     * Create a role
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, role_object = {}) {
        if (!project_id || !Object.keys(role_object).length) {
            return this.handleError('No project id or role request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/roles.json`
        }, role_object)
    }

    /**
     * Update a Role
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(role_id, role_object = {}) {
        if (!role_id || !Object.keys(role_object).length) {
            return this.handleError('No role id or role request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/roles/${role_id}.json`
        }, role_object)
    }

    /**
     * Delete a Role
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(role_id) {
        if (!role_id) {
            return this.handleError('No role id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/roles/${role_id}.json`
        })
    }

}

module.exports = Role