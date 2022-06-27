const {Router} = require('express')

const router = new Router()

const {
    index,
    getConsultation,
    addConsultation,
    deleteConsultation,
    replaceConsultation,
} = require('../controllers/controll-consultation')

router.get('/',index)
router.get('/:nit',getConsultation)
router.post('/:nit', addConsultation)
router.delete('/:nit', deleteConsultation)


module.exports = router
