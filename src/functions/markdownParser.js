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

const stripData = (markdown = '') => {
    const TAG_START = '<!--metadata'
    const TAG_END = '-->'
    const rawMetadata = markdown.split(TAG_START)[1] || ''

    const [
        metadata = {}, 
        rawContent = markdown
    ] = rawMetadata.split(TAG_END)
    
    const parsedMetadata = parseMetadata(metadata)

    return {
        rawContent,
        parsedMetadata,
    }
}

const markdownParser = (markdown) => {
    const {
        rawContent,
        parsedMetadata,
    } = stripData(markdown)
    
    return {
        ...parsedMetadata,
        content: parseMarkdown(rawContent),
    }
}

module.exports = markdownParser
