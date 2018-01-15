exports.api = api = '1234567890'

exports.domain = domain = 'testing'

exports.tw = require('../src')(api, domain)

exports.host = `https://${domain}.teamwork.com`