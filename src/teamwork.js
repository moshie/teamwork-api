'use strict'

var axios = require('axios')

class Teamwork {
    constructor(api_key, domain, custom_domain) {
        this.api_key = api_key
        this.domain = domain
        this.europe = domain.indexOf('.eu') === -1
        this.customDomain = custom_domain
    }

    /**
   * Get account information
   *
   * @method GET
   * @uri /account.json
   * @url https://developer.teamwork.com/projects/account/get-account
   * @example tw.teamwork.account()
   *
   * @return {Promise}
   */
    account() {
        return this.query({
            uri: '/account.json'
        })
    }

    /**
   * Authenticate a user
   *
   * @method GET
   * @uri /authenticate.json
   * @url https://developer.teamwork.com/projects/authentication-questions/authentication
   * @example tw.teamwork.authenticate()
   *
   * @return {Promise}
   */
    authenticate() {
        return this.query({
            uri: '/authenticate.json',
            baseURL: this.customDomain
                ? this.domain
                : 'https://' +
          (this.europe
              ? 'authenticate.teamwork.com'
              : 'authenticate.eu.teamwork.com')
        })
    }

    /**
   * Search
   *
   * @method GET
   * @uri /search.json
   * @url https://developer.teamwork.com/projects/search/search
   * @example tw.teamwork.search(query_string)
   *
   * @param {Object}
   * @return {Promise}
   */
    search(qs = {}) {
        return this.query({
            uri: '/search.json',
            qs
        })
    }

    handleError(message = 'Fatal error occured') {
        return Promise.reject(message)
    }

    /**
   * Execute api query
   *
   * @example tw.teamwork.query(options)
   *
   * @param  {Object}
   * @param  {Object}
   * @return {Promise}
   */
    query(options = {}) {
        options = Object.assign(
            {
                method: 'GET',
                baseURL: this.customDomain
                    ? this.domain
                    : `https://${this.domain}.teamwork.com`,
                url: '/',
                auth: {
                    username: this.api_key,
                    password: 'xx'
                }
            },
            options,
            {
                url: options.uri || '/',
                data: options.body || null,
                params: options.qs || {}
            }
        )

        return axios(options).then(({ data }) => data)
    }
}

module.exports = Teamwork
