const validator = require("validator")
const validateSignUpData = (req) => {
    //   i want to validate request body here bcz never trust the user input 
    const {firstName,lastName,emailId,password} = req.body;
    if(!firstName || typeof firstName !== "string" || firstName.trim().length===0){
        throw new Error("First name is required and should be a non empty string")
    }
    else if(!emailId || !validator.isEmail(emailId)){
        throw new Error("Invalid email address" + emailId)
    }
    else if(!password || !validator.isStrongPassword(password)){
        throw new Error("Password is not strong enough" + password)
    }
}

module.exports = {validateSignUpData};