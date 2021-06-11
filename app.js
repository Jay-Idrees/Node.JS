const user='Jay';
console.log(user)

const fs=require('fs'); // here you are storing the import function into a variable

// Here as I have stored fs module into a variable, I can use object oriented programming to invoke the associated functions inside this module.
// The syntax for writing a file is that you specify the filename first, then the content "Name: user" the user in this case is Jay, but whatever is stored inside the variable will go inside the file
// Finally there is a call back function. Note that node operates in an asynchronous fashion with multi-threading, we can use a call back function that is executed after the task is completed - In this case we are checking for errors
fs.writeFile('examplefile.txt', 'Name: '+user, (err)=>{

    if (err){
        console.log(err);// If there is error, display the error
        return;
    }
// Else print a message the the file has been successfully written
    console.log('File successfully written as examplefile.txt');

});

// Now if you run node app.js it will create a file examplefile.txt