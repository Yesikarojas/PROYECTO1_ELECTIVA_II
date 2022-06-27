const Doctor = require('../models/Doctor')

module.exports = {
    index : async (req, res )=>{
        try{
            const result = await Doctor.find()
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            return res.status(500).json({"result":false, "data":e.toString()})
        }
       
    },
    getDoctor : async (req, res) => {
        const {id} = req.params
        try{
            //const result = await Client.findById(id).populate('orders') //trae los datos del order
            const result = await Doctor.findById(id)
            return res.status(200).json({"result":true, "data":result})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }
    },
    addDoctor : async (req, res) => {
        try{
            const doctor =  new Doctor(req.body)
            const result = await doctor.save()

            res.status(200).json({"result":true, "data":doctor})
        }catch(e){
            res.status(500).json({"result":false, "data":e.toString()})
        }
    },
    replaceDoctor : async (req, res) =>{
        const {id} = req.params
        const doctor = req.body
        try{
            await Doctor.findByIdAndUpdate(id, doctor)

            res.status(200).json({"result":true, "id":id, "data":doctor})
        }catch(e){
            res.status(500).json({"result":false, "data": e.toString()})
        }
    },
    deleteDoctor : async(req, res) =>{
        const {id} = req.params
        try{
            const result = await Doctor.findByIdAndDelete(id)
            res.status(200).json({"result":true, "id":id})
        }catch{
            res.status(500).json({"result":false, "data":e.toString()})
        }
    }
}