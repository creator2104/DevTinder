const express = require('express');

const app = express()

// err should be the first parameter in the middleware function
app.use("/",(err, req, res, next)=>{
  if(err){
   res.status(501).send("something went wrong")
  }
})

app.get("/getUserData",(req,res)=>{
   try{
      // Logic of DB call and get user data
      throw new Error("Error in getting user data") 
   res.send("User data sent")
   }
   catch(err){
      res.status(500).send("Internal Server Error")
   }
})

app.listen(3000, () => {
console.log("Server is running on port 3000");
})