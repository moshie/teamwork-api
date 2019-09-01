'use strict'

const Teamwork = require('./teamwork')

class Workload extends Teamwork {

    /**
     * List the workload across all projects
     * 
     * @method GET
     * @uri /workload.json
     * @url https://developer.teamwork.com/projects/workload/get-workload
     * @example tw.workload.get(query_string)
     * 
     * @param  {Object}
     * @return {Promise}
     */
    get(qs = {}) {
        return this.query({
            uri: '/workload.json',
            qs
        })
    }

}

module.exports = Workload