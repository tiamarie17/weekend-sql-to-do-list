console.log('in task.router.js');

//requiring express and declaring router constant
const express = require('express');
const router = express.Router();

//import pool from pool.js file
const pool = require('../modules/pool.js');

//declaring global array with list of tasks
let tasks = [];

//endpoint for GET request
router.get('/', (req, res) => {
    res.send(tasks);

});

//endpoint for POST request


//endpoint for PUT request

//endpoint for DELETE request


//exporting router
module.exports = router;