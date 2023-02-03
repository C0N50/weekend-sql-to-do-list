
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
    - [] DB CONNECTION
        - [] import pg
        - [] create pool object to export
        - [] export/import pool object
    - [] GET -- Link ajax Get from client to todo list from DB
        - [] Create query text
            - [] Query text can be harcoded I think.
                - [] SELECT * FROM "koalas"
        - [] call pool.queryText.then.catch code block
    - [] POST -- link ajax post from client send new koalas to DB
        - [] Create query text
            - [] Takes query text from ajax post.
                - [] INSERT INTO "koalas" (...) VALUES ...
                - [] Use array with ($1 $2) to avoid injection
    - [] PUT -- updates to koalas "Ready for transfer" 
        - [] Create query text
            - [] Takes query text from ajax PUT.
                - [] UPDATE "koalas" SET "ready_to_transfer" = $1 WHERE "id" = $2
                - [] Use array with ($1 $2) to avoid injection


- [x] STATIC FILE SERVER
- [] HTTP API SERVER






- [] CLIENT SIDE SETUP
- [] SOURCE IN SCRIPTS CSS JQUERY
- [] ON READY