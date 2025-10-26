/* Express = library to create web server that receives HTTP requests, */ 
/* and responds in JSON through endpoints! */


/* Load env variables from .env */
require('dotenv').config()
/*index.js file used as the entry point for the server*/
/* require('express)  = call the library express (express e a library from node.js)*/
/* store the library express under a variable */
const express = require('express')
/* import all function from body-parser LOCATED UNDER node-modules dir*/
const bodyParser = require('body-parser')
/* create a instance for the aplication and store under a variable */
const app = express()
/* Importing all functions from queries.js */
const db = require('./queries')
/* set up the port number under avariable */
const port = 3000

/* process/translate what the server receives to JSON */
app.use(bodyParser.json())

/* Translate HTML forms */
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

/* Route to send a request to the server */ 
/* and response the message below when connected to the server in JSON format */
app.get('/', (request, response) => {
    /* The message below will return when using the url http://localhost:3000 on the browser (AS A TEST)*/
    response.json({ info: 'Node.js, Express, and Postgres API'})
})

/* Import all functions from queryFullDB (which contains all SQL code), */
/* based on the route => /getfulldb */
/* URL + route = endpoint (http://localhost:3000/getfulldb) */

/* REST API concept:
- endpoints through clear URLs, 
- http methods to get data,
- JSON response*/
app.get('/getfulldb', db.queryFullDB)

/* starts the server on the specified port (3000), */ 
/* message on the CMD when the server starts. */
app.listen(port, () => {
    console.log(`App running on the port${port}.`)
})

// RUN THE API:
// On cmd => node src/server.js
// On the browser => http://localhost:3000/getfulldb