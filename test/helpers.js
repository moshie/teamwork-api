require('dotenv').config()

exports.tw = require('../src')()

exports.host = `https://${process.env.TW_SUB}.teamwork.com`