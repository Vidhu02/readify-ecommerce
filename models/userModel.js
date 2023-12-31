const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array, 
        default: []
    },
    order :{
        type: Array,
        default: []
    },
    address :{
        type: String,
        default: ""
    },
    phno :{
        type: Number,
        default: 0
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)
