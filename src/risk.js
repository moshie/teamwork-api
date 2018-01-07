"use strict"

const Teamwork = require('./teamwork')

class Risk extends Teamwork {

    /**
     * Get risk or risks
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(risk_id) {
        if (!risk_id) {
            return this.handleError('No Risk id')
        }

        return this.query({
            uri: `/risks/${risk_id}.json`
        })
    }

}

module.exports = Risk