const mongoose = require("mongoose");
// schema means the structure of the data that we want to store in the database
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true, // this means that this field is required and it cannot be empty
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String,
        required: true,
        lowercase: true, // this means that the emailId will be stored in lowercase in the database
        unique: true, // this means that this field should be unique and it cannot be same as any other user's emailId
        trim: true // this means that any whitespace before or after the emailId will be removed
    },
    password:{
        type: String,
        required: true,
        minlength:6 
    },
    age:{
        type: Number,
        min:18 // minimum age should be 18
    },
    gender:{
       type: String,
       // the below func is named as custom validator 
       validate(value){
        if(!["male","female","other"].includes(value)){
            throw new Error ("Gender data is not valid")
        }
       } 
     // this validate function will only called when we are creating a new user  
    },
    photoUrl:{
        type: String,
        default: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" // this means that if the user does not provide a photoUrl then this default url will be used
    },
    about:{
        type: String,
        maxLength: 500 ,// this means that the maximum length of this field can be 500 characters
        default: "Hello! I am using DevTinder" 
    },
    skills:{
       type: [String] // this means that this field will be an array of strings
    }
},{timestamps: true})

// whenever u r referencing to the model the name should be starting with capital letter
// first the name of the model and second schema should be passed
module.exports = mongoose.model("User", userSchema)
// the above one model creates new instances 
// model means the collection that we want to create in the database
// whenever we create a database we will create a collection in the database and that collection will have a name and that name will be the name of the model that we are creating here
// User is the class and we are creating small instances of the class and those instances will be the documents in the collection