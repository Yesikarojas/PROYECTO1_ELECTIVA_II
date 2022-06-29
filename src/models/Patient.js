const mongoose = require('mongoose')

const {Schema} = mongoose

const PatientSchema = new Schema({
    id: {
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
    gender : {
        type: Boolean,
        required : true
    }
})

module.exports = mongoose.model('patient',PatientSchema)