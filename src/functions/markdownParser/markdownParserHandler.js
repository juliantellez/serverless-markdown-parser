'use strict';

const markdownParserFunction = require('./markdownParserFunction')

const BAD_REQUEST = {
    statusCode: 400,
    body: 'Bad Request',
    message: 'Make sure you pass a markdown string',
}

const OK_REQUEST = body => ({
    statusCode: 200,
    body,
})

const markdownParserHandler = (event, context, callback) => {
    if (typeof event !== 'string') {
        return callback(null, BAD_REQUEST);
    } else {
        const body = markdownParserFunction(event)
        return callback(null, OK_REQUEST(body));
    }
};

module.exports.markdownParser = markdownParserHandler
