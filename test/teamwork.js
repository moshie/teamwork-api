const tw = require('../src')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

chai.should()

describe('#Teamwork', function () {

    it('should throw an error if no api key or domain are provided', function () {
        (function () {
            tw()
        }).should.throw(Error)
    })

})