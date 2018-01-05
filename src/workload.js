"use strict"

const Teamwork = require('./teamwork')

class Workload extends Teamwork {

    /**
     * List the workload across all projects
     * 
     * @param  {Object}
     * @return {Promise}
     */
    get(options = {}) {
        return this.query({
            path: this.params(`/workload.json`, options)
        })
    }

}

module.exports = Workload