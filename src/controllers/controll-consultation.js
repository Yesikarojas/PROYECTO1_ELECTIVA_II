
const Consultation = require('../models/Consultation')
const Patient = require('../models/Patient')
const Doctor = require('../models/Doctor')

module.exports = {
    index : async (req, res )=>{
        try{
            const result = await Consultation.find()
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            return res.status(500).json({"result":false, "data":e.toString()})
        }
       
    },
    getConsultation : async (req, res) => {
        const {id} = req.params
        try{
            const result = await Consultation.findById(id)
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }
    },
    addConsultation : async (req, res) => {
        const {id, office, dateConsult, reason, patient, doctor} = req.body
        try{
            const pat = await Patient.findOne({"id":patient})
            const doc = await Doctor.findOne({"id":doctor})
            const temp = {id, office, dateConsult, reason}
            const consult = new Consultation(temp)
            consult.patient = pat
            consult.doctor = doc
            const resultConsult = await consult.save()

            res.status(200).json({"result":true, "consult":resultConsult})
        }catch(e){
             res.status(500).json({"result":false, "data":e.toString()})
        } 
    },
    updateConsultation : async (req, res) =>{
        const {id} = req.params
        const consult = req.body
        try{
            await Consultation.findByIdAndUpdate(id, consult)

            res.status(200).json({"result":true, "id":id, "data":consult})
        }catch(e){
            res.status(500).json({"result":false, "data": e.toString()})
        }
    },
    deleteConsultation : async(req, res) =>{
        const {id} = req.params
        try{
            await Consultation.findByIdAndDelete(id)
            res.status(200).json({"result":true, "id":id})
        }catch{
            res.status(500).json({"result":false, "data":e.toString()})
        }
    }
}

