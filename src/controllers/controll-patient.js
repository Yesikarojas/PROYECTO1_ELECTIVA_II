const Patient = require('../models/Patient')

module.exports = {
    index : async (req, res )=>{
        try{
            const result = await Patient.find()
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            return res.status(500).json({"result":false, "data":e.toString()})
        } 
    },
    getPatient : async (req, res) => {
        const {id} = req.params
        try{
            const result = await Patient.findById(id)
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }
    },
    addPatient : async (req, res) => {
        try{
            const patient =  new Patient(req.body)
            await patient.save()

            res.status(200).json({"result":true, "data":patient})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }
    },
    updatePatient : async (req, res) =>{
        const {id} = req.params
        const patient = req.body
        try{
            await Patient.findByIdAndUpdate(id, patient)
            res.status(200).json({"result":true, "id":id, "data":patient})
        }catch(e){
            res.status(500).json({"result":false, "data": e.toString()})
        }
    },
    deletePatient : async(req, res) =>{
        const {id} = req.params
        try{
            await Patient.findByIdAndDelete(id)
            res.status(200).json({"result":true, "id":id})
        }catch{
            res.status(500).json({"result":false, "data":e.toString()})
        }
    }
}