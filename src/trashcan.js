'use strict'

const Teamwork = require('./teamwork')

class Trashcan extends Teamwork {

    /**
     * Get a Project Resources in the trashcan
     * 
     * @method GET
     * @uri /trashcan/projects/${project_id}.json
     * @url https://developer.teamwork.com/projects/trashcan/get-a-project-resources-in-the-trashcan
     * @example tw.trashcan.get(time_id, body)
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