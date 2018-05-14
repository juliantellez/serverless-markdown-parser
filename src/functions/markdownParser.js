const parseMarkdown = require('marked')

const parseMetadata = string => {
    let metadata = {}

    try {
        metadata = JSON.parse(string.split('/n').join(''))
    } catch (err) {
        // report error
    }

    return metadata
}

const stripMetadata = markdown => {
    const TAG_START = '<!--metadata'
    const TAG_END = '-->'
    let [
        metadata, 
        content
    ] = markdown.split(TAG_START)[1].split(TAG_END)

    metadata = parseMetadata(metadata)

    return {
        metadata,
        content
    }
}

const markdownParser = (markdown) => {
    const {
        metadata,
        content
    } = stripMetadata(markdown)
    
    return {
        ...metadata,
        content: parseMarkdown(content)
    }
}

module.exports = markdownParser
