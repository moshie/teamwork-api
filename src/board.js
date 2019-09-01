'use strict'

const Teamwork = require('./teamwork')

class Board extends Teamwork {

    /**
     * List Columns
     * 
     * @method GET
     * @uri /projects/{project_id}/boards/columns.json
     * @url https://developer.teamwork.com/projects/boards/list-columns
     * @example tw.boards.getColumns(project_id, query_string)
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
     * @method POST
     * @uri /projects/{project_id}/boards/columns.json
     * @url https://developer.teamwork.com/projects/boards/create-a-new-column
     * @example tw.boards.createColumn(project_id, body)
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
     * @method DELETE
     * @uri /boards/columns/{column_id}.json
     * @url https://developer.teamwork.com/projects/boards/delete-a-column
     * @example tw.boards.deleteColumn(column_id)
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
     * @method POST
     * @uri /boards/columns/{column_id}/cards.json
     * @url https://developer.teamwork.com/projects/boards/add-a-task-from-the-backlog-to-a-column
     * @example tw.boards.addTaskToColumn(column_id, body)
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
     * @method GET
     * @uri /boards/columns/{column_id}/cards.json
     * @url https://developer.teamwork.com/projects/boards/list-cards-in-a-column
     * @example tw.boards.getCards(column_id, query_string)
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
     * @method PUT
     * @uri /boards/columns/cards/{card_id}/move.json
     * @url https://developer.teamwork.com/projects/boards/move-a-card
     * @example tw.boards.moveCard(card_id, body)
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
     * @method PUT
     * @uri /boards/columns/cards/{card_id}.json
     * @url https://developer.teamwork.com/projects/boards/edit-a-card
     * @example tw.boards.updateCard(card_id, body)
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
     * @method DELETE
     * @uri /boards/columns/cards/{card_id}.json
     * @url https://developer.teamwork.com/projects/boards/remove-a-card
     * @example tw.boards.deleteCard(card_id)
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