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
            return this.handleError('No Role id')
        }

        return this.query({
            uri: `/roles/${role_id}.json`
        })
    }

    /**
     * Create a role
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/roles.json`,
            body
        })
    }

    /**
     * Update a Role
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(role_id, body = {}) {
        if (!role_id) {
            return this.handleError('No Role id')
        }

        return this.query({
            method: 'PUT',
            uri: `/roles/${role_id}.json`,
            body
        })
    }

    /**
     * Delete a Role
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(role_id) {
        if (!role_id) {
            return this.handleError('No Role id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/roles/${role_id}.json`
        })
    }

}

module.exports = Role