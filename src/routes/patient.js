const {Router} = require('express')

const router = new Router()

const {
    index,
    getPatient,
    addPatient,
    deletePatient,
    modifyPatient,
} = require('../controllers/controll-patient')

router.get('/',index)
router.get('/:nit',getPatient,)
router.post('/:nit', addPatient,)


module.exports = router