'use strict'

const Teamwork = require('./teamwork')

class Risk extends Teamwork {

    /**
     * Get risk or risks
     * 
     * @method GET
     * @uri /risks/{risk_id}.json
     * @url https://developer.teamwork.com/projects/risks/get-all-risks
     * @example tw.risks.get(query_string, risk_id)
     * 
     * @param  {Object}
     * @param  {String}
     * @return {Promise}
     */
    get(qs = {}, risk_id) {
        return this.query({
            uri: !risk_id ? 
                '/risks.json' : 
                `/risks/${risk_id}.json`,
            qs
        })
    }

}

module.exports = Risk