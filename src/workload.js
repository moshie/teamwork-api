"use strict"

const Teamwork = require('./teamwork')

class Workload extends Teamwork {

    /**
     * List the workload across all projects
     * 
     * @param  {Object}
     * @return {Promise}
     */
    get(qs = {}) {
        return this.query({
            uri: `/workload.json`,
            qs
        })
    }

}

module.exports = Workload