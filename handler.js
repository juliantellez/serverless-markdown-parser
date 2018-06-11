'use strict';

const markdownParser = require('./src/functions/markdownParser')

const parseToHtml = (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(markdownParser(event)),
    };  
    callback(null, response);
};

module.exports.parseToHtml = parseToHtml
