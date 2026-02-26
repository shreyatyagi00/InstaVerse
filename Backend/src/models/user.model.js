const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [ true, "username already exists" ],
        required:[ true, "username is required" ],
    },
    email: {
        type: String,
        unique: [ "true", "email already exists" ]
    },
    password: {
        type:String,
        required:["true","Password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/JIYA/deafult.png"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel