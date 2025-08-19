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