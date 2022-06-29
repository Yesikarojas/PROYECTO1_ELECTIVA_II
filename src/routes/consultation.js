const {Router} = require('express')

const router = new Router()

const {
    index,
    getConsultation,
    addConsultation,
    deleteConsultation,
    updateConsultation
} = require('../controllers/controll-consultation')

router.get('/',index)
router.get('/:id',getConsultation)
router.post('/', addConsultation)
router.delete('/:id', deleteConsultation)
router.patch('/:id',updateConsultation)


module.exports = router
