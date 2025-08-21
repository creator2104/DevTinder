// we will use mongoose here to connect to the database
const mongoose = require("mongoose");
// mongoose.connect returns a promise
const connectDB = async () => {
  await mongoose.connect(
           "mongodb+srv://namastedev:%40Vinit2104@namastenode.r3qgf1n.mongodb.net/devTinder"
  );
};

module.exports = connectDB; 