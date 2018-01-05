"use strict"

const https = require('https')
const qs = require('querystring')

const isJson = require('./is-json')

class Teamwork {

    /**
     * Teamwork Constructor
     * 
     * @param  {String}
     * @param  {String}
     * @return {Object}
     */
    constructor(api_key, domain) {
        this.api_key = api_key
        this.domain = domain
        this.europe = domain.indexOf('.eu') === -1
    }
    
    /**
     * Get account information
     * 
     * @return {Promise}
     */
    account() {
        return this.query({
            path: '/account.json'
        })
    }

    /** 
     * Authenticate a user
     * 
     * @return {Promise}
     */
    authenticate() {
        return this.query({
            path: '/authenticate.json',
            hostname: this.europe ? 'authenticate.teamwork.com' : 'authenticate.eu.teamwork.com'
        })
    }

    /** 
     * Search
     * 
     * @return {Promise}
     */
    search(options) {
        return this.query({
            path: this.params(`/search.json`, options)
        })
    }

    /**
     * Convert options to query string params
     * 
     * @param  {String}
     * @param  {Object}
     * @return {String}
     */
    params(path = '/', queryParams = {}) {
        return `${path}${qs.stringify(queryParams)}`
    }

    /**
     * handle Errors
     * 
     * @param  {String}
     * @return {Promise}
     */
    handleError(message = 'Fatal error occured') {
        return Promise.reject(message)
    }

    /**
     * Execute api query
     * 
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    query(options = {}, postData = {}) {

        const headers = {
            'Content-Type': 'application/json'
        }

        if (!Object.keys(postData).length) {
            var stringData = JSON.stringify(postData)
            headers['Content-Length'] = Buffer.byteLength(stringData)
        }

        options = Object.assign({
            hostname: `${this.domain}.teamwork.com`,
            path: '/',
            auth: this.api_key,
            headers
        }, options)

        return new Promise((resolve, reject) => {
            const request = https.request(options, (response) => {
                var data = ''
    
                response.setEncoding('utf8')
    
                response.on('data', (chunk) => {
                    data += chunk
                })
    
                response.on('end', () => {
                    resolve({
                        headers: response.headers,
                        status_code: response.statusCode,
                        data: isJson(data)
                    })
                })
    
            })

            request.on('error', (error) => {
                reject(error)
            })

            if (!Object.keys(postData).length) {
                request.write(stringData)
            }

            request.end()

        })
    }

}

module.exports = Teamwork