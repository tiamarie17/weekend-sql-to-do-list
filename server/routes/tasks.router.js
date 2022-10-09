console.log('in taskRouter.js');

//requiring express and declaring router constant
const express = require('express');
const router = express.Router();

//import pool from pool.js file
const pool = require('../modules/pool.js');

//endpoint for GET request
router.get('/', (req, res) => {
    console.log('IN GET tasks');
    let sqlText = (`
    SELECT * FROM "tasks"
    ORDER BY "id" ASC;
    `);

    pool.query(sqlText)

    .then((response) => {
        res.send(response.rows);
        console.log(response.rows);
    })
    .catch((err) => {
        console.log('GET  failed', err);
        res.sendStatus(500);

});

});

//endpoint for POST request

router.post('/', (req, res)=>{
    console.log('req.body', req.body);

    const sqlText = 
    `
        INSERT INTO "tasks"
            ("task")
        VALUES
            ($1); --placeholders for sqlParams
    `;

    const sqlParams = [
        req.body.task
    
    ];
    console.log(sqlParams);

        pool.query(sqlText, sqlParams)
            .then((dbRes)=>{
                console.log('in POST router');
                res.sendStatus(201);
            })
            .catch((err)=>{
                console.log('POST router failed', err);
                res.sendStatus(500);
            });

});



//endpoint for PUT request

router.put('/:id', (req, res)=>{
    
    let taskId=req.params.id;
    console.log('in /tasks put with id of:', taskId);

    const sqlText=`
    UPDATE "tasks"
    SET "status" = NOT "status"
    WHERE "id" = $1;
    `;

    const sqlParams=[taskId];
    console.log(sqlParams);

    pool.query(sqlText, sqlParams)
    .then((dbRes)=>{
      res.sendStatus(201);
    })
    .catch(err=>{
      console.log('in /tasks put error', err);
      res.sendStatus(500);
    });
})

//endpoint for DELETE request


//exporting router
module.exports = router;