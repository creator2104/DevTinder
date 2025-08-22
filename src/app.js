const express = require("express");
const connectDB = require("./config/database"); // Import the database connectionn
const app = express();
const User = require("./models/user"); 

// the data will come from postman in json format so we need to tell express to parse the json data into js object
// and then we can access the data using req.body and using new instance of the User model and then we can save the data to the database using .save() method
// body means the data that is sent from the client to the server
app.use(express.json());

app.post("/signup", async (req, res) => {

   // whenever we do database operations like read or write we should wrap it in a try catch block
  try {
     // create a new instance of the User model
    const user = new User(req.body);
   //  once u creted a user instance then u can save it to the database
     await user.save();
   //  save method returns a promise
    res.send("User added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving user");
  }
});

connectDB()
  .then(() => {
    console.log("DB connection established");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  // whenever i will call the function connectDB it will connect to the cluster of mongodb
  // once u have connected to the database then u should listen to the server otherwise the user request will not be processed
  .catch((err) => {
    console.error("DB connection failed", err);
  });


// now we will pass data to the database dynamically using postman 