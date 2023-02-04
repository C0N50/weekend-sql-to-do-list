
- [x] FILES AND FOLDERS
- [x] SERVER
    - [x] server.js
    - [x] public folder
        - [x] html, css, client.js, jquery.js
        - [x] fonts, images, libs, static files.
        - [x] npm
        - [x] package.json
        - [x] start script
        - [x] install express

- [x] STATIC FILE SERVER
- [x] HTTP API SERVER


- [x] CLIENT SIDE SETUP
- [x] SOURCE IN SCRIPTS CSS JQUERY
- [x] ON READY


- [x] Database Setup
   - [x] create database in positico "weekend-to-do-app"
   - [x] create sql to populate database with current inventory
   - [x] Add code to SQL file in project

- [] Router File
    - [x] DB CONNECTION
        - [x] import pg
        - [x] create pool object to export
        - [x] export/import pool object
    - [x] GET -- Link ajax Get from client to todo list from DB
        - [x] Create query text
            - [x] Query text can be harcoded I think.
                - [x] SELECT * FROM "tasks"
        - [x] call pool.queryText.then.catch code block
    - [x] POST -- link ajax post from client send new tasks to DB
        - [x] Create query text
            - [x] Takes query text from ajax post.
                - [x] INSERT INTO "tasks" (...) VALUES ...
                - [x] Use array with ($1 $2) to avoid injection
    - [] PUT -- updates to tasks "Complete" 
        - [] Create query text
            - [] Takes query text from ajax PUT.
                - [] UPDATE "tasks" SET "complete" = $1 WHERE "id" = $2
                - [] Use array with ($1 $2) to avoid injection
                - [] Add CSS to reflect change on button

    
    - [] Stretch/Extra for Fun
        - [] Deploy to cloud
        - [] Add time to completetion
        - [] Feature confirm delete

                





* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.