--------------------------------------------------------1---------------------------------------------------
// npm init to create a package.json file and this file is like index of your project 
// npm init -y to create a package.json file with default values
// now we need to create the server 
// when we listen to the server it means we are ready to accept outside requests from the world
// express is a fast web framework for Node.js 
// first we need to install express into our project
// now we got node_modules and package-lock.json
// whenever we install a node package it will import some code into our project
// package-lock.json is a file that keeps track of the exact version of each package installed
// package.json is a file that keeps track of the packages we have installed and their versions
// so all modules depend on each other that is known as transitive dependencies
// carat (^) means that we can update the package to the latest minor version
// tilde (~) means that we can update the package to the latest patch version
// version 4.19.2 means 4 major, 19 minor, and 2 patch
// patch means a bug fix , minor means a new feature, and major means a breaking change
const express = require('express');
// whenever we write require express it will imported from express

const app = express();
// this is the new instace of express or creating a new express application or server

// if there is any incoming request to the server we can handle it 

// the function inside app.use is known as request handler
// the below thing is known as route with route handler 
app.use("/test",(req, res)=>{
   res.send("Hello World from Express!");
})
// if the error on the screen is page is cannot get / it means it cannot get any response from the /  
app.use("/hello",(req, res)=>{
   res.send("Hello hey hiii!");
})

app.use((req, res)=>{
   res.send("Hello from the dashboard!");
// whatever request comes in it will send above message as a response
})

app.listen(3000, () =>{
   console.log("Server is running on port 3000");
})
// we have issue of multiple time refreshing the server in terminal so v r installing nodemon using npm i -g nodemon
// -g means global installation means u don't have to install it in every project 
// nodemon will automatically restart the server when we make changes to the code
// now we can run the server using nodemon app.js

// In Express.js, app.use() is a method to mount middleware functions. Middleware are functions that have access to the request (req), response (res), and the next function in the request-response cycle.
// app.use() applies to all HTTP methods and routes, meaning it will run for every request made to the server.
// app.use([path], middlewareFunction)
// a middleware function can perform the following tasks:-
// 1. Execute any code.
// 2. Modify the request and response objects.
// 3. End the request-response cycle.
// 4. Call the next middleware function in the stack using next().
// In the above code, we have created a simple Express server that listens on port 3000 and responds to requests made to the /test, /hello, and any other route with a default message.
