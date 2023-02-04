
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
        - [] call pool.queryText.then.catch code block
    - [] POST -- link ajax post from client send new tasks to DB
        - [] Create query text
            - [] Takes query text from ajax post.
                - [] INSERT INTO "tasks" (...) VALUES ...
                - [] Use array with ($1 $2) to avoid injection
    - [] PUT -- updates to tasks "Ready for transfer" 
        - [] Create query text
            - [] Takes query text from ajax PUT.
                - [] UPDATE "tasks" SET "ready_to_transfer" = $1 WHERE "id" = $2
                - [] Use array with ($1 $2) to avoid injection


- [x] STATIC FILE SERVER
- [] HTTP API SERVER


- [x] CLIENT SIDE SETUP
- [x] SOURCE IN SCRIPTS CSS JQUERY
- [x] ON READY