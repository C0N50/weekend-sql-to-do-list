# Project Name

Do-To-Do List

## Description

Building the Do-to-do app started as a simple project with deadline and has ballooned to a borderline obscession to make this app actually exist in the wild.

The page loads a large text input with placeholder : ENTER. A user enters a task in text to the text input. The user then clicks a large submit button directly beneath the text input. 

Upon submission the task is sent to the server which then adds the task to a database. The task is then retrieved by the server and displayed in the application. The task is displayed in a table directly beneath the submit button.

The Table has two columns, TASK and DONE?. Task names are displayed in the task column and task completion status in the DONE? column. 

To delete a tasks simply click on the task Name and an alert will ask you if you are sure you'd like to delete the task.

By clicking the icon,  DONE? column items status can be toggled between incomplete (!) and  complete ( 🟢 ). 

My Styling approach is that of a mobile/Phone Application. I wanted large friendly buttons with as little text as possible on the page. I have a seperate branch attempt-heroku hosted on heroku which handles specific phone css. 

The Application uses a postgress database to store the data, which works fine when connecting from the same host. However, it is entirely ineffective thus far at remote hosting. I'm been looking into how to make my postgress database accesible publically, but have been unsuccessfull.

The application is hosted on heroku. 

https://dotodo.herokuapp.com/

The application contains long term storage with a database, but does not support multiple users. All users edit the same todo list.
