const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please enter Name'] 
    },
    email : {
        type : String,
        required : [true, 'Please enter Email'],
        unique : true
    },
    role : {
        type : String,
        required : [true, 'Please enter Role']
    },
    salary : {
        type : Number,
        required : [true, 'Please enter Salary']
    },
    isRemote : {
        type : Boolean
    },
    experience : {
        type : Number,
        default : 1
    },
},{
    timestamps : true
})

module.exports = mongoose.model("Employee" , createSchema)