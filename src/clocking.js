'use strict'

const Teamwork = require('./teamwork')

class Clocking extends Teamwork {

    /**
     * Update a clock in entry 
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(clock_id, body = {}) {
        if (!clock_id) {
            return this.handleError('No clock in id')
        }

        return this.query({
            method: 'PUT',
            uri: `/clockin/${clock_id}.json`,
            body
        })
    }

    /**
     * Create clock in for another user
     * 
     * @param  {Object}
     * @return {Promise}
     */
    create(body = {}) {
        return this.query({
            method: 'POST',
            uri: '/clockin.json',
            body
        })
    }

    /**
     * clock yourself in or out
     * 
     * @param  {String}
     * @return {Promise}
     */
    me(status = 'in') {
        if (!['in', 'out'].includes(status.toLowerCase())) {
            return this.handleError('status must be in or out')
        }

        return this.query({
            method: 'POST',
            uri: `/me/clock${status.toLowerCase()}.json`
        })
    }

}

module.exports = Clocking