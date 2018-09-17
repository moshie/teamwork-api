'use strict'

const Teamwork = require('./teamwork')

class Owner extends Teamwork {
    /**
     * Get projects with setted Project Owner
     *
     * @param  {Object}
     * @param  {Number}
     * @return {Promise}
     */
  async get(qs = {}, project_id) {
    let r = await this.query({
      uri: !project_id ?
        '/projects.json?includeProjectOwner=true' :
        `/projects/${project_id}.json?includeProjectOwner=true`,
      qs
    })
    r.projects = r.projects.filter((el) => {
      return !!el.owner
    })
    return r
  }

    /**
     * Set a Project Owner
     *
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
  set (project_id, body = {}) {
    return this.query({
      method: 'PUT',
      uri: `/projects/${project_id}.json`,
      body
    })
  }

    /**
     * Delete a Project Owner
     *
     * @param  {Number}
     * @return {Promise}
     */
  delete (project_id) {
    let body = {
      'project': {
        'projectOwnerId': '0'
      }
    }
    if (!project_id) {
      return this.handleError('No Project id')
    }

    return this.query({
      method: 'PUT',
      uri: `/projects/${project_id}.json`,
      body
    })
  }
}

module.exports = Owner
