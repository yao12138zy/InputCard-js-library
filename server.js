/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')

const app = express();

// Setting up a static directory for the files in /pub
// using Express middleware.
// Don't put anything in /pub that you don't want the public to have access to!
app.use(express.static(__dirname + '/pub'))

// Let's make some express 'routes'
// Express has something called a Router, which 
// takes specific HTTP requests and handles them
// based on the HTTP method and URL

// Let's make a route for an HTTP GET request to the 
// 'root' of our app (i.e. top level domain '/')


// sending a string
//res.send('This should be the root route!')
// route for root

app.get('/example1', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/example1.html'))
})

app.get('/example2', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/example2.html'))
})
app.get('/example3', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/example3.html'))
})
app.get('/documentation', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/documentation.html'))
})
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/landing.html'))
})

// Error codes
app.get('/problem', (req, res) => {
	// You can indicate a status code to send back
	// by default it is 200, but it's up to you
	// if you want to send something
	res.status(500).send('There was a problem on the server')

	// don't send nonsense status codes like this one:
	//res.status(867).send('There was a problem on the server')
})



// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})  // localhost development port 5000  (http://localhost:5000)
   // We've bound that port to localhost to go to our express server.
   // Must restart web server when you make changes to route handlers.

