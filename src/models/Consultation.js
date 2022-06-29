const mongoose = require('mongoose')

const {Schema} = mongoose

const ConsultationSchema = new Schema({
    id: {
        type: String,
        required : true,
        unique : true
    },
    office : {
        type: String,
        required : true
    },
    dateConsult : {
        type: Date,
        required : true
    },
    reason : {
        type: String,
        required : true
    },
    patient : {
        type : Schema.Types.ObjectId,
        ref : 'patient'
    },
    doctor : {
        type : Schema.Types.ObjectId,
        ref : 'doctor'
    }   
    
})

module.exports = mongoose.model('consultation',ConsultationSchema)