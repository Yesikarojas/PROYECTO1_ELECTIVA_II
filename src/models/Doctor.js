const mongoose = require('mongoose')

const {Schema} = mongoose

const DoctorSchema = new Schema({
    nit: {
        type: String,
        required : true,
        unique : true
    },
    name : {
        type: String,
        required : true
    },
    phone : {
        type: String,
        required : true,
        match : new RegExp('^[0-9]{10}$')
    },
    age : {
        type: Number,
        required : true,
        match : new RegExp('^[0-9]{2}$')
    },
    specialization : {
        type: String,
        required : true
    },
    patient : [
        {
            type : Schema.Types.ObjectId,
            ref : 'patient'
        }     
    ],
    consultation : [
        {
            type : Schema.Types.ObjectId,
            ref : 'consultation'
        }  
    ]
})

module.exports = mongoose.model('doctor',DoctorSchema)