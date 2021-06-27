# Node.JS and Express.JS for MERN Stack

- MERN: (MongoDB, Express.JS, React, Node.JS) 

- Normally every browser runs javascript. Manipulats DOM

- Node.JS is running javascript outside the browser. It does not use DOM manpulation as there is no browser

- Install the latest version of Node.JS from the following link: [**Node.JS Download**](https://nodejs.dev/download). NPM is a node package manager. When you install Node.JS it will automatically install NPM

- It runs all code as a single javascript thread which triggers an event loop. But all requests are assigned a worker to complete the tasks - hence multi-thread, and when the task is complete - it reconnects with the event loop. From the coding perspective this operation is basically handled in the form of call back functions/async-await requests

- Used to build servers for handling requests, so it is a substitute for PHP, Java

- It runs event loops (running code only when events occur like requests) using multi-threading/asynshronous fashion. If you type `process.exit` inside the `createServer` code then it will exit. When you open the browser and type local host and port name, that is like sending a request to the server - that is when the code inside the `createServer` function will be executed



- You can get some important infomation in the terminal if you console.log `req.url`, `req.method`, `req.headers`. For example in the code below

```javascript
const http=require('http');

const server=http.createServer((req,res)=>{
  // for example url may be /, method maybe GET and then rest of details in headers
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html'); // This is attaching a header to a response
});

server.listen
```

- You can see response headers in the browser under the `network` tab

- The signature Node.JS file is `app.js`. This file can be run by typing `node app.js`

- `require` is a globaly available function inside Node.JS. It informs which package to import or which file to import. The imports/exports are a mechanism to split the code into files which can later be bundled at the time of deployment

```javascript
user=`Jay`
require('fs');
// OR

const fs=require('fs'); // here you are storing the import function into a variable

// Then you can invoke specific functions inside a module using the object oriented programming 
fs.writeFile('filename.txt', 'Content: `+ user, (err)=>{
  // The alternative writeFileSync - blocks code execution untill the file has been written
    if (err){
        console.log(err);
        return;
    }
    console.log('Wrote File');
}); 

// See App.js for more details
```
- Common core modules with node include `http`,`https`,`fs`,`path`,`os`

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

- NPM (Node Package Manager), is automatically installed with node

- Install with :
- `npm init -y` This will create a `package.json` file where `-y` automatically selects yes for all the options

- `npm install express --save` Here `--save` refers to core only dependency or `--save-dev` only for saving as a developement dependency - This updates the package.json with dependencies such that they can be re-installed later

- If the node_modules folder is deleted or you want to reinstall node packaged listed in package.json, if the package.json is present and express is specified as a dependency then simply typing `npm install` will re-install express.js

**Using `.gitignore`**

- You can create `.gitignore` file and in it type `/node_modules`, then this folder will not be pushed to the github repository. Do this after installing the packages and before pusing the changes to the repository

**Installing `Nodemon`** 
- Short for Node monitor
- That way you do not have to constantly restart the server everytime you make changes to the code in `app.js`. Nodemon automatically detects changes in the files and restarts the server automatically if changes are noted

- `npm install nodemon --save-dev`

**NPM start**
- Inside the `package.json`, under "scripts": { "start": "node app.js"} -this will allow you to just type `npm start` in the terminal in order to start the app

- Another trick is that under "scripts": { "start": "`nodemon` app.js"} will start app.js with nodemon. Note that for it to work 'nodemon' should be listed exactly under dependencies

**Package Body-Parser**

- `npm install body-parser --save-dev`

**Using Express Router**

- At the top of `app.js` you can type `const router=expres.Router()` - You can use this when you are looking to use export modules for routing methods - as in separate files

- **Package unique ID**
- `npm install uuid --save-dev` It has different versions. You can import it in the users-controller `const uuid=require(uuid/v4)` It has multiple versions, the v4 has a unique id and a time stamp

**Express Package Input Validator**
- Validates input
- `npm install express-validator --save`
- Usually input needs to be validated in post and patch requests

**Express Package Axios**
- This package is used to send requests from the front end application to the backend
- `npm install axios --save`

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



**Express.Router Linking files with app.js, Import/Export modules** 

- Express.Router allows nesting a mini-server inside the server by allowing the code to be spread out over multiple files

- The file to be linked e-g `user-routes.js` should include a command const `router=express.Router()` that exports the module such as `module.exports=router`

- If there are multiple modules to be exported, you can also export it as an object. Below is an example:

```javascript

// Standard
module.exports=requestHandler;

//OR

module.exports={
  handler:requestHandler,
  someText:'Some hard coded text'
}
//OR

module.exports.handler=requestHandler;
module.exports.someText='Some hard coded text';

//OR
exports.handler=requestHandler;
exports.someText='Some hard coded text';



// Then you can import this in app.js 

const routes=require('./routes');
const server=http.createServer(routes.handler) // Note how I am able to invoke it using object notation
console.log(routes.someText)

```


- Next in the `aap.js` you have to import the user-routes.js at the top with the following command `const userRoutes=require(./routes/user-routes)` you do not have to specify the file   extension when importing. This line of code is the key. The variable **userRoutes** basically captures all the code inside the **user-routes.js**

- And then invoke it as a middlware with `app.use('/user',userRoutes);` which will execute all of the code inside the user-routes.js file. Note the **'/user'** portion is important in combination with `app.use` because this is telling that all requests to the server with the URI (Uniform Resource Identifier) `/user` will be forwarded to the router `user-routes`

## Handling Errors

- There is a middleware function in Express that can be used to handle errors

- Below the routes you can type `app.use((error,req,res,next)=>{});` This will be applied to every request comming to a server. It **should be below the routes middleware**. Note that this middleware takes 4 parameters, Express will automatically notice this and recognize it to be the middleware with an error handling function

- When handeling responses to the requests `res.status(error.code || 500)` will assign the error code if an error occurs. This can be followed by `res.json({Message: error.message|| 'An unknown error occurred'})`

- If you are working with asynchronous code (consisting of call back functions- common) then use `next` for handeling errors, otherwise use `throw`

**Using Model View Controller (MVC) for handeling Error**

- The User sends requests which are received by the `Controller`. The controller manipulates these requests as programmed and then sends them to `Model` as instruction, the Model then updates the `View` for the user per request, in a common scenario the Model will directly deal with the databases in an application

- Create a new folder called `controllers` and then create `user-controllers.js`

- You can export multiple things using export modules. Instead of module.exports you can use `exports.getUserById=getUserById`; (do not add () - express will run the function by itself)

- Here is the typical flow for handeling error:
    1. File structure: `controllers` with `user-controllers` folder with `user-controllers.js` file, `models` folder with `http-error.js`
    2. `App.js` is the first point of contact. Based on the path, it decides which route to direct to e-g user-route in this case
    3. In the `user-router.js` in routes folder, `express.router` is used to direct the request to the relevant controller file based on path
    4. In the controller file (e-g `users-controllers.js`) there is a `getUserById` variable containing the error function which is exported
    5. The results of these controller functions (exported `getUserById` function) are re-routed to the `user-routes.js` file in the routes folder, where the exported functions from the controller files are invoked

- So: `App.js` -> `user-routes.js` -> `users-controllers.js` -> `user-routes.js` ->  back to `App.js` to move to the next middleware

- After cirling back to `app.js`, then there is this additional middleware that sends error response to the view based on whether the initial query produced a valid header indicating error

```javascript

app.use('/api/users', userRoutes); // => /api/places...

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});
```

## Types of errors and Using `VS Code Debugger`

- **Syntax errors**- error in the syntax- for example missing a t in const, incorrect variable name somewhere in the code
  - `unexpected token` can occur when there is a missing bracket
- **Runtime errors** - code breaks while running
- **Logical errors** - Code does not break, but the program does not run the way you expect it to. You will not get any error message

- We can use debugging in visual studio code with the **`VS code debugger`**. It can also be accessed with the shortcut `F5`. Select `Node.JS as the environment`. This gives you a `debudding controller` at the top, a `debug console` and a `debugging banner` at the bottom of the VS code. You can also select the  `run and debug` from the left most column to open up the debugging panel

- You can hover over the variables e-g const message, to see what is inside them as the code is run, you can also find more detailed infomation about these in the column on the left side

- You can **setup a break point** inside the VS code node.js file and also execute the code by typing it inside the debug console- to test real time changes to code before implementing them. The break point is helpful because it will instruct the debugger about how far to run the code which helps with loclizing the error in the code.

- Features of the debuging pannel:
  - `local` - shows all the variable contents - you can also double click a variable here to change its value in real time. Note that you can also type in a variable in the the debugging console to see its value
  - `closure` - Reveals how the process ended e-g creating a file or sending a server response
  - `Global` - Reveals other global variables that are created behind the scenes in Node while running the program
  - `watch` - allows you to type in a specific variable to be watched for what it contains every time the code is run
  - `breakpoints`- lets you selectunselect specific breakpoints while runing the code

  - The debugging console also allows you to make real time changes to the code and see instant results

  - **Restarting the debugger autmatically on files changes** or **Setting up nodmon with the debugger**
  - Go to `run` at the top of VS Code and select `add configuration`
  - This creates a .vscode folder with a launch.json file
  - In the `lunch.json` file you can add: "restart":true, followed by "runtimeExecutable":"nodemon". You can also specify "console":"Integratedterminal"

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\app.js",
            "restart":true,
            "runtimeExecutable":"nodemon",
            "console":"integratedTerminal"
        }
    ]
}

```