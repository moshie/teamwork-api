"use strict"

function isJson (data) {
    try {
        return JSON.parse(data)
    } catch (e) {
        return {}
    }
}

module.exports = isJson