# Node.JS and Express.JS for MERN Stack

- MERN: (MongoDB, Express.JS, React, Node.JS) 

- Normally every browser runs javascript. Manipulats DOM

- Node.JS is running javascript outside the browser. It does not use DOM manpulation as there is no browser

- Used to build servers for handling requests, so it is a substitute for PHP, Java

- Install the latest version of Node.JS from the following link: [**Node.JS Download**](https://nodejs.dev/download). NPM is a node package manager. When you install Node.JS it will automatically install NPM

- The signature Node.JS file is `app.js`. This file can be run by typing `node app.js`

- `require` is a globaly available function inside Node.JS. It informs which package to import or which file to import. The imports/exports are a mechanism to split the code into files which can later be bundled at the time of deployment

```javascript
user=Jay
require('fs');
// OR

const fs=require('fs'); // here you are storing the import function into a variable

// Then you can invoke specific functions inside a module using the object oriented programming 
fs.writeFile('filename.txt', 'Content: `+ user, (err)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log('Wrote File');
}); 

// See App.js for more details
```

## Express.JS

- Makes working with node easier. It is a framework for Node.Js, you do not have to re-invent the wheel

- It handles creation of servers behind the scenes. The requests to and from the server are then handled with middlewares that can perform actions on incoming/outgoing requests according to needs. It allows us to create our own middlewares

- A middleware is a function that gets a request and may return a response (or edit request or response and moveon to the next middleware)

- A lot of the middlewares have request, response and call back functions. All the script in app.js is run once by Node and the tasks associated with the callback functions are followed up as the responses are received. In other words it does not wait for the a middleware function to complete and only then moving on to the next one. It operates in an asynchronous fashion. 

- A typical middleware function includes `app.get('/',(req, res, next)=>{ });` Where you first specify the path (this is important as it defines when the request function will be executed), then a call back function that takes request, response and next (which instructs to move to the next middleware after executing the request, next is important if there are multiple call back functions in the middleware)


- `app.use` This is non-specific
- `app.get` This is specific for get requests
- `app.post` This is for adding new information to databases
- `app.patch` This is for updating existing new information

The syntax is usually a middleware type such as use or get or post, then a middlware path and then finally a middleware function - which acts as a call back function

- `res.download()`	Prompt a file to be downloaded.
- `res.end()`     	End the response process.
- `res.json()`	    Send a JSON response.
- `res.jsonp()`	    Send a JSON response with JSONP support.
- `res.redirect()`	Redirect a request.
- `res.render()`   	Render a view template.
- `res.send()`	    Send a response of various types.
- `res.sendFile()`	Send a file as an octet stream.
- `res.sendStatus()`	Set the response status code and send its string representation as the response body.


**Installing Express Package**

- Install with :
- `npm init -y` This will create a `package.json` file where `-y` automatically selects yes for all the options

- `npm install express --save` Here `--save` refers to core only dependency or `--save-dev` only for saving as a developement dependency - This updates the package.json with dependencies such that they can be re-installed later

- If the node modules are deleted or you want to reinstall, if the package.json is present and express is specified as a dependency then simply typing `npm install` will re-install express.js

**Using `.gitignore`**

- You can create `.gitignore` file and in it type `/node_modules`, then this folder will not be pushed to the github repository. Do this after installing the packages and before pusing the changes to the repository

**Installing `Nodemon`** 
- Short for Node monitor
- That way you do not have to constantly restart the server everytime you make changes to the code in `app.js`. Nodemon automatically detects changes in the files and restarts the server automatically if changes are noted

- `npm install nodemon --save-dev`

**NPM start**
- Inside the `package.json`, under "scripts" { "start": "node app.js"} -this will allow you to just type `npm start` in the terminal in order to start the app

- Another trick is that under "scripts" { "start": "`nodemon` app.js"} will start app.js with nodemon. Note that for it to work 'nodemon' should be listed exactly under dependencies

**Package Body-Parser**

- `npm install body-parser --save-dev`

**Using Express Router**

- At the top of `app.js` you can type `const router=expres.Router()` - You can use this when you are looking to use export modules for routing methods - as in separate files


## Back-End REST API with Express.JS

- API: Application Peogramming Interface- set of rules that define how applications communicate and connect with each other, REST: Represnetational State Transfer

- Below are the most common types of API requests. All of these API requests are carried out by Express 

- `GET` The data is flowing from the Back-End to the Front-End. Usually it is a query into a Back-End database - for example retrieving an existing list of users from a MongoDB server storing data.  Back -> Front 

- `POST` The data is flowing from Front-End to the Back-End. Usually new data being added to a Back-End database- for example adding a new user.  Front -> Back

- `Patch` To modify existing data in a Back-End database. First existing data is retrieved, then it is modified and then sent back to the Back-End database. Back -> Front -> Back

- `Delete` Self-explanatory- deleting an existing user. Front -> Back 

- All these requests are basically middleware functions in Express. The are also called Routes. It is good practice to have a separate routes folder containing a file like `users-routes.js`. You can specify `const router=express.Router();`

- All of the places where express is being used, it should be imported in the file

Below are all the routing methods available in Express

- checkout
- copy
- `delete`
- `get`
- head
- lock
- merge
- mkactivity
- mkcol
- move
- m-search
- notify
- options
- `patch`
- `post`
- purge
- `put`
- report
- search
- subscribe
- trace
- unlock
- unsubscribe



**Linking files with app.js, Import/Export modules** 

- The file to be linked e-g user-routes.js should include a command that exports the module such as `module.exports=router`
- Next in the aap.js you have to import the user-routes.js at the top with the following command `const userRoutes=require(./routes/user-routes)` you do not have to specify the file   extension when importing
- And then invoke it as a middlware with `app.use(userRoutes);` which will execute all of the code inside the user-routes.js file