const chai = require('chai')

const handler = require('./markdownParserHandler')
const mocks = require('./markdownParserMocks')

describe('markdowParser handler', () => {
    it('should compose a response', () => {
        const markdownParser = handler.markdownParser

        const event = mocks.goodJson
        const context = {}
        const callback = (err, response) => {
            chai.assert.exists(response)
            chai.assert.exists(response.statusCode)
            chai.assert.exists(response.body)
        }
        
        markdownParser(
            event,
            context,
            callback
        )
    })
    it('should handle a malformed event', () => {
        const markdownParser = handler.markdownParser

        const event = {}
        const context = {}
        const callback = (err, response) => {
            chai.assert.exists(response)
            chai.assert.exists(response.statusCode)
            chai.assert.equal(response.statusCode, 400)
            chai.assert.exists(response.body)
            chai.assert.exists(response.message)
        }
        
        markdownParser(
            event,
            context,
            callback
        )
    })
})