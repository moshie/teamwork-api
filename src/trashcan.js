'use strict'

const Teamwork = require('./teamwork')

class Trashcan extends Teamwork {

    /**
     * Get a Project Resources in the trashcan
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(project_id) {
        if (!project_id) {
            return this.handleError('No project id')
        }

        return this.query({
            uri: `/trashcan/projects/${project_id}.json`
        })
    }

}

module.exports = Trashcan