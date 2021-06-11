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

**Installing Express Package**

- Install with :
- `npm init -y` This will create a `package.json` file where `-y` automatically selects yes for all the options

- `npm install express --save` Here `--save` refers to core only dependency or `--save-dev` only for saving as a developement dependency - This updates the package.json with dependencies such that they can be re-installed later

- If the node modules are deleted or you want to reinstall, if the package.json is present and express is specified as a dependency then simply typing `npm install` will re-install express.js

**Using `.gitignore`**

- You can create `.gitignore` file and in it type `/node_modules` then this folder will not be pushed to the github repository. Do this after installing the packages and before pusing the changes to the repository

**Installing `Nodemon`** 
- Short for Node monitor
- That way you do not have to constantly restart the server everytime you make changes to the code in `app.js`

- `npm install nodemon --save-dev`