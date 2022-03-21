# Allstar-Sporting-Company

### Table of Contents
- [Description](#description)
- [Project Files](#project-files)
- [Installation Instructions](#installation-instructions)
- [How to Utilize Project](#how-to-utilize-project)
- [Demo Videos](#demo-videos)
- [Live Version of Project](#live-version-of-project)
- [Additional Packages](#additional-packages)
- [Future Development](#future-development)
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
__"npm list"__ and check if there are any missing packages needed. Next, create 
a .env file in the root folder of the project. Enter into the file:

__"DB_NAME='sportingGoods_db'"__
__"DB_USER='[your username for mysql]'"__
__"DB_PW='[your password for mysql]'"__

The next step is to run the command: __"npm run seeds"__  in order to populate
the database with data. Finally, to start the server you need to enter the command: 
__"nodemon start"__. Open the browser and go to: __http://localhost:3003/__ to open the website. 


## How to Utilize Project
The instructions above describe how to run our project locally on your computer.
It has come to our attention that the site responds differently on heroku than
locally so here are the instructions on how to use the site on heroku:

1. The User has to create an new account by pressing login then create account.

2. After the account is created, the User will be brought to the Products Page.
The user can either see current products, add a new product, delete the current 
products, or update the current product.

3. The home button will take the user to the homepage. The homepage will show all 
the other navigation buttons (inventory, store locations, add a new store, logout).
To navigate to any page, you have to go to the homepage 1st and navigate from there.

4. The stores page has a collection of 3 stores as well as a new store button. 
Clicking on a store takes the user to a page that shows the inventory of the store.


## Demo Videos
Below is the link to a demo of the project on a local computer.
https://drive.google.com/file/d/1MvZXCIQdO5oyz6g577AYcoQqXytgu9Xk/view

Below is the link to a demo of the project on heroku.
https://drive.google.com/file/d/1IC7zLImGw7StEmr2RnGJrvgUOax5rZnX/view


## Live Version of Project
This is the link to the live version of our project on heroku:
https://cryptic-sea-45670.herokuapp.com/


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


### Future Development
- Images appear currently through the database & users cannot upload their own when 
    editing or adding a product -> We would like to allow users be able to do this
- Add rating feature where employee's can add product ratings/reviews of products


## Collaborators
- Allison Demkovich (aka demkoa01)
- Chris Bracewell (aka Cbracewell30)
- Michael Brown (aka randomguy1234)