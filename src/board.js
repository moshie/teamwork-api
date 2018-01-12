'use strict'

const Teamwork = require('./teamwork')

class Board extends Teamwork {

    /**
     * List Columns
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getColumns(project_id, qs = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            uri: `/projects/${project_id}/boards/columns.json`,
            qs
        })
    }

    /**
     * Create a new Column
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    createColumn(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/boards/columns.json`,
            body
        })
    }

    /**
     * Delete a Column
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteColumn(column_id) {
        if (!column_id) {
            return this.handleError('No Column id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/boards/columns/${column_id}.json`
        })
    }

    /**
     * Add a Task from the Backlog to a Column
     * 
     * @param {Number}
     * @param {Object}
     * @return {Promise}
     */
    addTaskToColumn(column_id, body = {}) {
        if (!column_id) {
            return this.handleError('No Column id')
        }

        return this.query({
            method: 'POST',
            uri: `/boards/columns/${column_id}/cards.json`,
            body
        })
    }

    /**
     * List Cards in a Column
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    getCards(column_id, qs = {}) {
        if (!column_id) {
            return this.handleError('No Column id')
        }

        return this.query({
            uri: `/boards/columns/${column_id}/cards.json`,
            qs
        })  
    }

    /**
     * Move a Card
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    moveCard(card_id, body = {}) {
        if (!card_id) {
            return this.handleError('No Card id')
        }

        return this.query({
            method: 'PUT',
            uri: `/boards/columns/cards/${card_id}/move.json`,
            body
        })
    }

    /**
     * Edit a Card
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    updateCard(card_id, body = {}) {
        if (!card_id) {
            return this.handleError('No Card id')
        }

        return this.query({
            method: 'PUT',
            uri: `/boards/columns/cards/${card_id}.json`,
            body
        })
    }

    /**
     * Remove a Card
     * 
     * @param  {Number}
     * @return {Promise}
     */
    deleteCard(card_id) {
        if (!card_id) {
            return this.handleError('No Card id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/boards/columns/cards/${card_id}.json`
        })
    }

}

module.exports = Board