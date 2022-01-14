const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },

})

const UserModel = model("users",userSchema)

module.exports = UserModel