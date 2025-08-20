const express = require('express');

const app = express()

const {adminAuth , userAuth} = require("./middleware/auth")

// use of middleware below 

// we have two apis of admin getAllData and deleteUser and we have to write logic multipletimes so we will use middleware to avoid code repetition
/*
app.get("/admin/getAllData",(req,res)=>{
// this req should be authenticated and only admin can access this route
   const token = "xyz"
   const isAdminauthorized = token === "xyz"  
   if(isAdminauthorized){
      res.send("All data fetched successfully")
      // by default res.send will send 200 status code
   }
   else{
      res.status(403).send("Unauthorized request")
      // here we are sending 403 status code which means forbidden
   } 
})

app.get("/admin/deleteUser",(req,res)=>{
const token = "xyz"
const isAdminauthorized = token === "xyz"  
   if(isAdminauthorized){
      res.send("User deleted successfully")
   }
   else{
      res.status(403).send("Unauthorized request")
   } 
})
*/
// we have to rewrite the same logic of authentication for both the apis so we will use middleware to avoid code repetition
// generally we use app.use() in middleware


// Handle auth middleware for all rquests GET, POST, PUT, DELETE
app.use("/admin",adminAuth)

// i have only one route for user so i will write userAuth inside the route
app.get("/user", userAuth , (req,res)=>{
      res.send("user data sent successfully")
})
app.get("/admin/getAllData",(req,res)=>{
      res.send("All data fetched successfully")
})
app.get("/admin/deleteUser",(req,res)=>{
      res.send("User deleted successfully")
})
app.listen(3000, () => {
console.log("Server is running on port 3000");
})