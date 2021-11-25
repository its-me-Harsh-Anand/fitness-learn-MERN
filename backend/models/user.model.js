// 1. call mongoose
const mongoose = require('mongoose')

// 2. initialize schema
const Schema = mongoose.Schema

// 3. set how our user will look like, i.e user schema
const userSchema = new Schema(
    {
    username : {
        type : String,
        required: true,
        unique : true,
        trim : true,
        minlength : 3
        },
    } , 
    {
        timestamps : true, //it automatically add section of when username was created and updated
    }
)

// 4. convert userschema into model
const User = mongoose.model('User', userSchema)

// 5. export User model to access anywhere
module.exports = User