# Allstar-Sporting-Company

### Table of Contents
- [Description](#description)
- [Project Files](#project-files)
- [Installation Instructions](#installation-instructions)
- [Demo Videos](#demo-videos)
- [Additional Packages](#additional-packages)
- [Collaborators](#collaborators)


## Description
The purpose of this project is to create a back-end for a sporting goods website.
The database will consist of the items that are sold in the stores, the store 
locations, and a collection of several users' login info. The info will be 
accessible by using the handlebars to create a front-end which will consist of
a main page of the store. The main page will include a login tab and a nav tab
to the soccer items page and the baseball items page. On both the soccer and 
bassball page will be an option to both view and update items. 

## Project Files
- config directory(the location for the setup of the database login and sequalize)
- controllers directory(the location for the api routes and index.js to connect
    them all)
- db directory(the location of the initial database sql file)
- models directory(the location for the js class models)
- public directory (the location of the front-end files for css and js as well as
    the images for this project)
- seeds directory (the location of the sample data)
- utils directory
- views directory(the location of the handlebars)
- .env(database login info)
- .gitignore
- package-json and node_modules files(necessary files needed to make project work)
- server.js(main file to connect to server)
- this readme

## Installation Instructions
The project works with a lot of packages that need to be installed. The first thing
you want to do after cloning/importing this project is to go to the command line 
and enter the following commands:
- __"npm install -g nodemon"__  
- __"npm install express"__
- __"npm install express-session"__ 
- __"npm install express-handlebars"__
- __"npm install sequelize"__
- __"npm install connect-session-sequelize"__
- __"npm install mysql2"__
- __"npm install bcrypt"__
- __"npm install dotenv"__

These installs can be combined into 1 install except for nodemon (-g is needed).
To make sure that everything is installed properly, run the command: 
- __"npm list"__
and check if there are any missing packages needed. Next, create a .env file
in the root folder of the project. Enter into the file:

DB_NAME='sportingGoods_db'
DB_USER='[your username for mysql]'
DB_PW='[your password for mysql]'

Finally, to start the server you need to enter the command: __nodemon start__.
Open the browser and go to: __http://localhost:3003/__ to open the website. 

### Demo Videos

__insert video/images here__


### Additional Packages
- express package
- express-session package
- express-handlebars package
- sequelize package
- connect-session-sequelize package
- nodemon package
- mysql2 package
- bcrypt package
- dotenv package


## Collaborators
- Allison Demkovich (aka Cbracewell30)
- Chris Bracewell (aka demkoa01)
- Michael Brown (aka randomguy1234)