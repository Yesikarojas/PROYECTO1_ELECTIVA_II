const mongoose = require('mongoose')

const {Schema} = mongoose

const PatientSchema = new Schema({
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
    eps : {
        type: String,
        required : true
    },
    doctor :
        {
            type : Schema.Types.ObjectId,
            ref : 'doctor'
        } ,
    consultation : [
        {
            type : Schema.Types.ObjectId,
            ref : 'consultation'
        }  
    ]
})

module.exports = mongoose.model('patient',PatientSchema)