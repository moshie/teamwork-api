const {tw, host} = require('./helpers')
const nock = require('nock')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

// Mocked Data
const getColumnsJson = require('./mocked-responses/getColumns')
const postColumnsJson = require('./mocked-responses/postColumns')
const plainStatusOk = require('./mocked-responses/plainStatusOk')
const taskToColumnJson = require('./mocked-responses/taskToColumn')
const getCardsJson = require('./mocked-responses/getCards')

describe('#Boards', function () {

    it('GET /projects/{project_id}/boards/columns.json', function () {
        nock(host)
            .get('/projects/12345/boards/columns.json')
            .reply(200, getColumnsJson)

        let promise = tw.boards.getColumns(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('columns').that.is.an('array'),
            promise.should.eventually.have.deep.property('columns', getColumnsJson.columns),
            promise.should.eventually.have.property('people').that.is.an('object'),
            promise.should.eventually.have.deep.property('people', getColumnsJson.people)
        ])
    })

    it('POST /projects/{project_id}/boards/columns.json', function () {
        let request = {
            "column": {
                "name": "new card name",
                "color": "#1ABC9C"
            }
        }

        nock(host)
            .post('/projects/12345/boards/columns.json', request)
            .reply(200, postColumnsJson)


        let promise = tw.boards.createColumn(12345, request)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.a('string'),
            promise.should.eventually.have.property('id').that.is.equal('10001')
        ])
    })

    it('DELETE /boards/columns/{column_id}.json', function () {
        nock(host)
            .delete('/boards/columns/12345.json')
            .reply(200, plainStatusOk)

        let promise = tw.boards.deleteColumn(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('POST /boards/columns/{column_id}/cards.json', function () {
        let request = {
            "card": {
                "taskId": 12345
            },
            "positionAfterId": -1
        }

        nock(host)
            .post('/boards/columns/12345/cards.json', request)
            .reply(200, taskToColumnJson)


        let promise = tw.boards.addTaskToColumn(12345, request)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('cardId').that.is.a('string'),
            promise.should.eventually.have.property('cardId').that.is.equal('1002'),
            promise.should.eventually.have.property('taskId').that.is.a('string'),
            promise.should.eventually.have.property('taskId').that.is.equal('12345')
        ])
    })

    it('GET /boards/columns/{column_id}/cards.json', function () {
        nock(host)
            .get('/boards/columns/12345/cards.json')
            .reply(200, getCardsJson)

        let promise = tw.boards.getCards(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string'),
            promise.should.eventually.have.property('people').that.is.an('object'),
            promise.should.eventually.have.deep.property('people', getCardsJson.people),
            promise.should.eventually.have.property('column').that.is.an('object'),
            promise.should.eventually.have.deep.property('column', getCardsJson.column),
            promise.should.eventually.have.property('cards').that.is.an('array'),
            promise.should.eventually.have.deep.property('cards', getCardsJson.cards)
        ])
    })

    it('PUT /boards/columns/cards/{card_id}/move.json', function () {
        let request = {
            "cardId": 101,
            "positionAfterId": 0,
            "columnId": 1003
        }

        nock(host)
            .put('/boards/columns/cards/12345/move.json', request)
            .reply(200, plainStatusOk)

        let promise = tw.boards.moveCard(12345, request)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('PUT /boards/columns/cards/{card_id}.json', function () {
        let request = {
            "card": {
                "content": "my updated card",
                "taskListId": "123456789",
                "start-date": "",
                "due-date": "",
                "responsible-party-id": "0",
                "estimated-minutes": 0,
                "priority": "none",
                "progress": "0",
                "tags": ""
            }
        }

        nock(host)
            .put('/boards/columns/cards/12345.json', request)
            .reply(200, plainStatusOk)

        let promise = tw.boards.updateCard(12345, request)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

    it('DELETE /boards/columns/cards/{card_id}.json', function () {
        nock(host)
            .delete('/boards/columns/cards/12345.json')
            .reply(200, plainStatusOk)

        let promise = tw.boards.deleteCard(12345)

        return Promise.all([
            promise.should.eventually.be.an('object'),
            promise.should.eventually.have.property('STATUS', 'OK').that.is.a('string')
        ])
    })

})