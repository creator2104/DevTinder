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

----------------------------------------------------2-------------------------------------------------------------
const express = require('express');
const app = express(); 
// this will match all the http methods
// app.use("/user",(req, res)=>{
//    res.send("Hello World from Express!");
// })
// this will match only the GET method
app.get("/user",(req, res) => {
   res.send({firstname: "John", lastname: "Doe"});
})
app.post("/user",(req, res) => {
   // here we can get the data from the request body and save it to the database
   res.send({message: "User created"});
})
app.delete("/user",(req, res) => {
   res.send({message: "User deleted"});
})
app.listen(3000,() =>{
   console.log("Server is running on port 3000");
})

// we write app.use("/test") so it means that when we go to the /test or /test/anything , /test/123 it will execute the function inside it but if u write /test123 it will not execute the function inside it because it is not matching the path /test

//HTTP methods 
// if you're making localhost:3000/xyz it means you are making a GET request to the server you can check it in network tab of the browser
// browser is not a good way to test the API we can use Postman or Insomnia
// inside postman created a new workspace called DevTinder and created a new collection called DevTinder and created a new request called test and set the method to GET and set the URL to http://localhost:3000/test and sent the request and got the response "Hello World from Express!" which is what we sent in the app.use("/test",(req, res)=>{ res.send("Hello World from Express!"); }) function
// if u make get and post request to the same path it will not work because we have only defined the get request for that path so we need to define the post request for that path as well to do that we have to use app.post("/test",(req, res)=>{ res.send("Hello World from Express!"); }) and now if we make a post request to the same path it will work and we will get the response "Hello World from Express!" which is what we sent in the app.post("/test",(req, res)=>{ res.send("Hello World from Express!"); }) function
// test all methods in postman by creating a new request for each method and setting the method to GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD and setting the URL to http://localhost:3000/test and sending the request and checking the response

------------------------------------------------part-2 of lecture-2------------------------------------------------ 
const express = require('express');
const app = express(); 
// this will match all the http methods
// app.use("/user",(req, res)=>{
//    res.send("Hello World from Express!");
// })
// this will match only the GET method
// "use?r" means e is optional here so u can access /usr or /user
// "u(se)?r" means se is optional here so u can access /ur or /user
// "u(se)+r" means u can add as many se as u want so u can access /user or /useser or /useseser
// "use+r" means u can add as many e as u want so u can access /user or /useer or /useeer or /useeeer etc
// "use*r" means u can add anything between e and r so u can access /usefndsfnr 
// REGEX
// "/a/" means it will match the path if a is there in the url like /a or /fda or /fadffg /dggda
// "/.*fly#/" means u can whatever you want before fly /dragonfly or /fly or /dsnffly 
app.get("/user/:userId/:name",(req, res) => {
   // : this colons means the route is dynamic and can change based on the userId and name
   // console.log(req.query); // this will log the query parameters in the url like /user?name=John&age=30 
   console.log(req.params); // this will log the parameters in the url like /user/123
   // the above url is known as dynamic url because it can change based on the query parameters
   res.send({firstname: "John", lastname: "Doe"});
})

app.post("/user",(req, res) => {
   // here we can get the data from the request body and save it to the database
   res.send({message: "User created"});
})
app.delete("/user",(req, res) => {
   res.send({message: "User deleted"});
})
app.listen(3000,() =>{
   console.log("Server is running on port 3000");
})

// we write app.use("/test") so it means that when we go to the /test or /test/anything , /test/123 it will execute the function inside it but if u write /test123 it will not execute the function inside it because it is not matching the path /test

//HTTP methods 
// if you're making localhost:3000/xyz it means you are making a GET request to the server you can check it in network tab of the browser
// browser is not a good way to test the API we can use Postman or Insomnia
// inside postman created a new workspace called DevTinder and created a new collection called DevTinder and created a new request called test and set the method to GET and set the URL to http://localhost:3000/test and sent the request and got the response "Hello World from Express!" which is what we sent in the app.use("/test",(req, res)=>{ res.send("Hello World from Express!"); }) function
// if u make get and post request to the same path it will not work because we have only defined the get request for that path so we need to define the post request for that path as well to do that we have to use app.post("/test",(req, res)=>{ res.send("Hello World from Express!"); }) and now if we make a post request to the same path it will work and we will get the response "Hello World from Express!" which is what we sent in the app.post("/test",(req, res)=>{ res.send("Hello World from Express!"); }) function
// test all methods in postman by creating a new request for each method and setting the method to GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD and setting the URL to http://localhost:3000/test and sending the request and checking the response

--------------------------------------------------------3-----------------------------------------------------------
const express = require('express');

const app = express(); 

// postman works as a client and express is a server

// one route handler can handle multiple routes
app.use("/user",(req,res,next)=>{
   // this function is known as a route handler 
   // if we dont pass anything to res.send, it will send infinite loading in postman
   // if we do clg also it will not send anything to postman
   // to send something to postman we need to use res.send
   console.log("Handling user route");
   // we cant send multiple res.send from one route handler
   next() // this next function is used to call the next route handler
   res.send("Hello from user route");
},(req,res,next)=>{
   console.log("Handling another user route");
   // res.send("This is another route handler for user route");
   next(); 
   // this will throw an error because we are trying to call next in last route handler
})
// the ans of above code will be the first route handler 
// if we dont send res.send in the first route handler, it will not send anything to postman and also second route handler will not be executed and go to infinite loading in postman


app.listen(3000,() =>{
   console.log("Server is running on port 3000");
})


// in short if there is no res.send then postman will get loading forever and if we send res.send one time it will executed but if we send multiple time it will throw an error because we can send only one response from one route handler and next function is used to call the next route handler in the chain and if there is no res.send and next() is overthere so in postman we can see error of cant get /user 

// the below three are same rH means route handler or function handler
// app.use("/user", [rH1, rH2, rH3],rH4,rH5);
// app.use("/user",rH1,rH2,rH3,rH4,rH5);
// app.use("/user",[rH1,rH2,rH3,rH4,rH5]); 

------------------------------------------------------part 2 of 3--------------------------------------------------
const express = require('express');

const app = express();

// GET/user => It checks all the app.xxx("matching route") fucntions and then it will execute the first one which matches the route and if any of the function has res.send() then it will not execute the next function in the chain and if there is no res.send() then it will execute the next function in the chain
// so all next() functions are known as middleware functions and who sends the response is known as request handler
app.use("/",(req, res,next)=>{
   // res.send("Hello from Express!");
   next();
})

app.get("/user", (req, res,next)=>{
console.log("Handling the route user!!");
next();
})

app.get("/user", (req, res) => {
    console.log("Handling the route user 2!!");
    res.send("2nd Route Handler");
});



app.listen(3000, () => {
console.log("Server is running on port 3000");
})

------------------------------------------------------part 3 of 3---------------------------------------------------
