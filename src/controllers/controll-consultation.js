
const Consultation = require('../models/Consultation')
const Patient = require('../models/Patient')

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
            //const result = await Client.findById(id).populate('orders') //trae los datos del order
            const result = await Consultation.findById(id)
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }
    },
    addConsultation : async (req, res) => {
        const {id} = req.params
        try{
            const patient = await Patient.findById(id)
            const consult = new Consultation(req.body)
            consult.patient = patient //al cliente
            patient.consultation.push(consult) //porque es una colección
            const resultConsult = await consult.save()
            const resultPatient = await patient.save() //con esto ya hay persistencia

            res.status(200).json({"result":true, "order":resultConsult, "client":resultPatient})
        }catch(e){
             res.status(500).json({"result":false, "data":e.toString()})
        } 
        /*try{
            const consult =  new Consultation(req.body)
            const result = await consult.save()

            res.status(200).json({"result":true, "data":consult})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }*/
    },
    replaceConsultation : async (req, res) =>{
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
            const result = await Consultation.findOneAndDelete(id)
            res.status(200).json({"result":true, "id":id})
        }catch{
            res.status(500).json({"result":false, "data":e.toString()})
        }
    }
}
