const mongoose = require("mongoose");
// schema means the structure of the data that we want to store in the database
const userSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String
    },
    password:{
        type: String
    },
    age:{
        type: Number
    },
    gender:{
       type: String   
    }
})

// whenever u r referencing to the model the name should be starting with capital letter
// first the name of the model and second schema should be passed
module.exports = mongoose.model("User", userSchema)
// the above one model creates new instances 
// model means the collection that we want to create in the database
// whenever we create a database we will create a collection in the database and that collection will have a name and that name will be the name of the model that we are creating here
// User is the class and we are creating small instances of the class and those instances will be the documents in the collection