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
        type:Number,
        required: true
    },
    state:{
        type:Number,
        required: true
    },
    city:{
        type:Number,
        required: true
    },
    address:{
        type:Number,
        required: true
    },
    zip:{
        type:Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Users",UserSchema);