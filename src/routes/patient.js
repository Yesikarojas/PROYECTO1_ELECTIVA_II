const {Router} = require('express')

const router = new Router()

const {
    index,
    getPatient,
    addPatient,
    deletePatient,
    updatePatient
} = require('../controllers/controll-patient')

router.get('/',index)
router.get('/:id',getPatient)
router.post('/', addPatient)
router.delete('/:id',deletePatient)
router.patch('/:id',updatePatient)

module.exports = router