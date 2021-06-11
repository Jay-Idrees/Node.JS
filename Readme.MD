# Node.JS for MERN (MongoDb, Express.JS, React, Node.JS) Stack

- Normally every browser runs javascript. Manipulats DOM

- Node.JS is running javascript outside the browser. It does not use DOM manpulation as there is no browser

- Used to build servers for handling requests, so it is a replacement of PHP, Java

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
}); // 