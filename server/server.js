// Require express
const express = require('express');
const bodyParser = require('body-parser');
//importing router from tasks.router.js
const router = require('./routes/tasks.router');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;



// express static file serving - public is the folder name
app.use(express.static('server/public'));

//adding in body-parser

app.use(bodyParser.urlencoded({extended: true}));

app.use('/tasks', router);

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});