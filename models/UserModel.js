const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    
    country:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    zip:{
        type:String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Users",UserSchema);