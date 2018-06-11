const goodJson = `
<!--metadata
{
    "slug": "create-a-serverless-blog",
    "title": "Create a Serverless Blog",
    "subTitle": "TODO",
    "description": "TODO",
    "language": "en",
    "coverImage": "<string>",
    "tags": ["serverless"]
}
-->


# Serverless Blog
`
const badJson = `
<!--metadata
{
    "slug": "create-a-serverless-blog",
    "title": "Create a Serverless Blog",
    "subTitle": "TODO",
    "description": "TODO",
    "language": "en",
    "coverImage": "<string>",
    "tags": ["serverless"],
}
-->


# Serverless Blog
`

module.exports = {
    goodJson,
    badJson,
}