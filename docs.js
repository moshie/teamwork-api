#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const parse = require('comment-parser')
var recursive = require('recursive-readdir')

const docs = path.join(__dirname, 'docs')

function directoryExists(directory) {
    return new Promise((resolve) => {
        fs.stat(directory, (error, stats) => {
            if (error || !stats.isDirectory()) {
                return resolve(false)
            }

            resolve(true)
        })
    })
}

function removeDirectory(directory) {
    return new Promise((resolve, reject) => {
        rimraf(directory, {}, (error) => {
            if (error) {
                return reject(error)
            }

            resolve()
        })
    })
}

function createDirectory(directory) {
    new Promise((resolve, reject) => {
        fs.mkdir(directory, (error) => {
            if (error) {
                return reject(error)
            }

            return resolve()
        })
    })
}

function resetDirectory(directory) {
    return directoryExists(directory)
        .then(condition => {
            return condition ? 
                removeDirectory(directory) :
                Promise.resolve()
        })
        .then(() => createDirectory(directory))
        .then(() => createDirectory(
            path.join(directory, 'categories')
        ))
        .catch(console.error)
}


function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) {
                reject(error)
            }

            resolve(data.toString())
        })
    })
}

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')
}

function getTag(tags, name) {

    const found = tags.filter(tag => {
        return tag.tag == name
    })

    if (!found.length) {
        return ''
    }

    var matches = found[0].source.match(/\s(.*)/)

    return matches[1]
}

function markdown(file, blocks) {

    var name = path.basename(file, '.js')

    var content = [
        `## ${titleCase(name)}`,
        '',
        ...blocks.map(block => {
            return [
                `### ${block.description}`,
                '',
                `[**${getTag(block.tags, 'method')} ${getTag(block.tags, 'uri')}**](${getTag(block.tags, 'url')})`,
                '',
                '```js',
                `${getTag(block.tags, 'example')}`,
                '```',
                ''
            ].join('\n')
        })
    ]

    return content.join('\n')
}

function createFile(file, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, (error) => {
            if (error) {
                return reject(error)
            }

            resolve()
        })
    })
}

resetDirectory(docs)
    .then(() => recursive(
        path.resolve(__dirname, 'src'), 
        [file => path.basename(file) == 'index.js'])
    )
    .then(files => {

        var promises = files.map(file => {
            
            return readFile(file)
                .then(data => parse(data, { dotted_names: false }))
                .then(blocks => markdown(file, blocks))
                .then(content => createFile(
                    path.join(docs, file.replace(path.resolve(__dirname, 'src'), '').replace('.js', '.md')),
                    content
                ))
        })

        return Promise.all(promises)
    })
    .catch(console.error)

