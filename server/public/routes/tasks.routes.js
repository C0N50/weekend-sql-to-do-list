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

taskRouter.get("/", (req, res) => {
    let query = `
    SELECT * FROM weekend-to-do-app
    ORDER BY name ASC;
    `;
    pool.query(query)
    .then ((dbres) => {
        console.log('This is dbres', dbres);
        res.send(dbres.rows);
    })
    .catch((err) => {
        console.log("Error SELECT failed", err);
        res.sendStatus(500);
    })
})

module.exports = taskRouter;