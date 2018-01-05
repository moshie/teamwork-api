"use strict"

const Teamwork = require('./teamwork')

class Board extends Teamwork {

    /**
     * Get Columns on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getColumns(project_id, options = {}) {
        if (!project_id) {
            return this.handleError('No project id provided')
        }

        return this.query({
            path: this.params(`/projects/${project_id}/boards/columns.json`, options)
        })
    }

    /**
     * Create a column on a project
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createColumn(project_id, column_object = {}) {
        if (!project_id || !Object.keys(column_object).length) {
            return this.handleError('No Project id or column request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/projects/${project_id}/boards/columns.json`
        }, column_object)
    }

    /**
     * Delete a Column
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteColumn(column_id) {
        if (!column_id) {
            return this.handleError('No column id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/boards/columns/${column_id}.json`
        })
    }

    /**
     * Add Task to a Column
     * 
     * @param {Number}
     * @param {Object}
     * @return {Promise}
     */
    addTask(column_id, task_object = {}) {
        if (!column_id || !Object.keys(task_object).length) {
            return this.handleError('No column id or task request object provided')
        }

        return this.query({
            method: 'POST',
            path: `/boards/columns/${column_id}/cards.json`
        }, task_object)
    }

    /**
     * Get Tasks / Cards from a Column
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getCards(column_id, options = {}) {
        if (!column_id) {
            return this.handleError('No column id provided')
        }

        return this.query({
            path: this.params(`/boards/columns/${column_id}/cards.json`, options)
        })
    }

    /**
     * Move Task / Card between columns
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    moveCard(card_id, move_object = {}) {
        if (!card_id || !Object.keys(move_object).length) {
            return this.handleError('No card id or move request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/boards/columns/cards/${card_id}/move.json`
        }, move_object)
    }

    /**
     * Update Task / Card
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateCard(card_id, card_object = {}) {
        if (!card_id || !Object.keys(card_object).length) {
            return this.handleError('No card id or card request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/boards/columns/cards/${card_id}.json`
        }, card_object)
    }

    /**
     * Delete Task / Card
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteCard(card_id) {
        if (!card_id) {
            return this.handleError('No card id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/boards/columns/cards/${card_id}.json`
        })
    }

}

module.exports = Board