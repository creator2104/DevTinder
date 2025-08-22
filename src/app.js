const express = require("express");
const connectDB = require("./config/database"); // Import the database connectionn
const app = express();
const User = require("./models/user");

// the data will come from postman in json format so we need to tell express to parse the json data into js object
// and then we can access the data using req.body and using new instance of the User model and then we can save the data to the database using .save() method
// body means the data that is sent from the client to the server
app.use(express.json());

// GET user by Email ID
app.get("/user", async (req, res) => {
  try {
    const users = await User.find({ emailId: req.body.emailId });
    if (!users) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
    //  aisa user dhundho jiska emailId req.body.emailId ke barabar ho and then us user ko return kar do and also res.send karke postman ko bhej do
    if (users.length === 0) {
      return res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Error fetching email");
  }
});

// Feed API - GET/feed - get all users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Error fetching email");
  }
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const deletedUser = await User.findByIdAndDelete({_id:userId});
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Error deleting user");
  }
});

// UPDATE a user in the database
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if(data?.skills.length>10){
      throw new Error("Skills cannot be more than 10")
    }
    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "before",
      runValidators: true,
      // runValidators is used when we are updating the user and we want to validate the data that we are updating so when we update the age while updating the user it will work otherwise it will work only while new document will created
    });
    // the above line will take the userId and the data that we want to update and it will update the user in the database , the returnDocument: 'before' will return the document before the update means the object before the update
    res.send("User updated successfully");
  } catch (err) {
   console.log(err);
    res.status(400).send("Error updating user");
  }
});
// app.get("/user/:id",async (req,res)=>{
//    try{
//     const users = await User.findById(req.params.id)
//      if(!users){
//       res.status(404).send("User not found");
//     }
//     else{
//       res.send(users)
//     }
//    }
//    catch(err){
//     res.status(400).send("Error fetching email");
//    }
// })

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
