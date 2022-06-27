const mongoose = require('mongoose')

const {Schema} = mongoose

const ConsultationSchema = new Schema({
    nit: {
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
    patient : 
        {
            type : Schema.Types.ObjectId,
            ref : 'patient'
        }     
    
})

module.exports = mongoose.model('consultation',ConsultationSchema)