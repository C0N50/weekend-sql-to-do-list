# Project Name

To-Do List

## Description

Building the to-do-list app started as a simple project with deadline and has ballooned to a borderline obscession to make this app actually exist in the wild.

The Program is aptly named. The page loads to an large text input with placeholder : ENTER. A user enters a task in text to the text input. The user then clicks the large submit button directly beneath the text input. 

Upon submission the task is sent to the server which then adds the task to a database. The task is then retrieved by the server and displayed in the application. The task is displayed in a table directly beneath the submit button.

The Table has two columns, TASK and DONE?. Task names are displayed in the task column and task completion status in the DONE? column. 

To delete a tasks simply click on the task Name and an alert will ask you if you are sure you'd like to delete the task.

By clicking the icon,  DONE? column items status can be toggled between incomplete (!) and  complete ( 🟢 ). 

My Styling approach is that of a mobile/Phone Application. I wanted large friendly buttons with as little text as possible on the page. I have a seperate branch attempt-heroku hosted on heroku which handles specific phone css. 

The Application uses a postgress database to store the data, which works fine when connecting from the same host. However, it is entirely ineffective thus far at remote hosting. I'm been looking into how to make my postgress database accesible publically, but have been unsuccessfull.

An alpha version of the application is hosted on heroku , but does not connect to the database. Long term storage is not possible in this version of the application.

I'm continueing to search for a database solution to make my first full stack web application in the wild a reality!







I 
