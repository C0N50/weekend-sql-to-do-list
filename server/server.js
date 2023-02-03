console.log('initiailizing server...');

//import express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskRouter = require('./public/routes/tasks.routes');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


//set up router
app.use("/tasks", taskRouter);

//set up listener
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log('listening on port:', PORT);
})