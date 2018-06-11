const chai = require('chai')

const markdownParser = require('./markdownParserFunction')
const mocks = require('./markdownParserMocks')

describe('markdownParser', () => {
  it('should parse markdown', () => {
    const value = markdownParser(mocks.goodJson)
    const expected ={ 
        slug: 'create-a-serverless-blog',
        title: 'Create a Serverless Blog',
        subTitle: 'TODO',
        description: 'TODO',
        language: 'en',
        coverImage: '<string>',
        tags: [ 'serverless' ],
        content: '<h1 id="serverless-blog">Serverless Blog</h1>\n' 
    }

    chai.assert.deepEqual(value, expected)
  })
  it('should parse markdown with malformed JSON', () => {
    const value = markdownParser(mocks.badJson)
    const expected = { content: '<h1 id="serverless-blog">Serverless Blog</h1>\n' }

    chai.assert.deepEqual(value, expected)
  })
  it('should parse markdown without metadata', () => {
      const mock = '# Serverless Blog'
      const value = markdownParser(mock)
      const expected = { content: '<h1 id="serverless-blog">Serverless Blog</h1>\n' }
      chai.assert.deepEqual(value, expected)
  })
})
