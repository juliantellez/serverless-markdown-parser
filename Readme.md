# serverless markdown parser

super small service that converts md to html, it accepts a tag 
`<!--metadata --> ` to facilitate JSON data, the end result is a json object like the following :

```
{
    ...metadata,
    content: '<HTML />'
}
```

### What it does:

- parses markdown to html
- strips out metadata 
- creates a schema for the parsed data
- comunicates with other micro-services (dynamo db)


### What it does not do:
- updates db
- reacts to hooks

