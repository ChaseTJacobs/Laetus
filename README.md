# The Laetus Project
This readme is a place for our team to record broad issues/suggestions for the project.
Try to keep comments organized under headers/catagories.

## Our Digital Ocean Server
- needs to have MySQL
-

## To Run local_server Stuff
- first `cd` to location of `server.js` you want to run, i.e. `./local_server/data_server/`, and run `npm install` if you haven't already. This will install the dependencies listed in `package.json`. Try not to push the resulting `node_modules` here, it's excessive.
- you will need MySQL to run/test the data_server
- in `./local_server/data_server/environment.js` you must fill out the user and password fields specific to your local installation of MySQL. You probably don't want to push that info here tho ;)
- the app_server is just a POC thing. it's buggy. don't worry about it.
