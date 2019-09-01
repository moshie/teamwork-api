'use strict'

const Teamwork = require('./teamwork')

class Clocking extends Teamwork {

    /**
     * Update a clock in entry
     * 
     * @method PUT
     * @uri /clockin/{clock_id}.json
     * @url https://developer.teamwork.com/projects/clock-in-clock-out/edit-a-clock-in
     * @example tw.clocking.update(clock_id, body)
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
     * @method POST
     * @uri /clockin.json
     * @url https://developer.teamwork.com/projects/clock-in-clock-out/clock-a-person-in
     * @example tw.clocking.create(body)
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
     * @method POST
     * @uri /me/clock{in | out}.json
     * @url https://developer.teamwork.com/projects/clock-in-clock-out/clock-me-out
     * @example tw.clocking.me('in' || 'out')
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