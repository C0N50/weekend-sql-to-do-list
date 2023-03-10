const express = require("express");
const taskRouter = express.Router();

// DB CONNECTION
const pg = require("pg");

// 'pool' represents a network connection to the DB
// we call 'pool.query()' inside our router
const pool = new pg.Pool({
  database: "weekend-to-do-app",
  host: "localhost",
  port: 5432,
});


// GET -- retrieves task list
taskRouter.get("/", (req, res) => {
    let queryText = `
    SELECT * FROM tasks
    ORDER BY name ASC;
    `;
    pool.query(queryText)
    .then ((dbres) => {
        console.log('This is dbres', dbres);
        res.send(dbres.rows);
    })
    .catch((err) => {
        console.log("Error SELECT failed", err);
        res.sendStatus(500);
    })
})

// POST ---- adds new task
taskRouter.post("/", (req, res) => {

    const newTask = req.body;
    console.log(req.body);
    const queryText = `
    INSERT INTO tasks (name)
    VALUES ($1)`;
    const queryParams = [
        newTask.name
    ];
    pool
        .query(queryText, queryParams)
        .then(() => {
            res.sendStatus(204); //object created successfully
        })
        .catch ((error) => {
            console.log('Error in server POST' , error)
            res.sendStatus(500);
        })
})


// DELETE --- remove task from list
taskRouter.delete('/:id', (req, res) =>{

    let taskID = req.params.id;
    console.log('Deleteing task:', taskID);

    let sqlQuery = `
    DELETE FROM tasks
    WHERE id = $1;
    `;

    const sqlParams = [
        taskID
    ];
    pool.query(sqlQuery,sqlParams)
    .then (() => {
        console.log('task deleted');
        res.sendStatus(204);
    })
    .catch ((error) => {
        console.log('ERROR could not delete', error);
        res.sendStatus(500);
    })

})

//PUT - Update complete
taskRouter.put("/:id", (req, res) => {
    console.log("in router PUT");
    console.log("putting with PARAMS", req.params);

    const queryText = `
        UPDATE tasks
        SET complete = NOT complete
        WHERE id = $1
        `;

    const queryParams = [req.params.id];
    console.log("PUTTING with text:", queryText, "params:", queryParams);

    pool.query(queryText, queryParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log("error in server PUT:", err);
    });
})


module.exports = taskRouter;