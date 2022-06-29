const {Router} = require('express')

const router = new Router()

const {
    index,
    getDoctor,
    addDoctor,
    deleteDoctor,
    updateDoctor,
} = require('../controllers/controll-doctor')

router.get('/',index)
router.get('/:id',getDoctor)
router.post('/', addDoctor)
router.patch('/:id', updateDoctor)
router.delete('/:id',deleteDoctor)

module.exports = router
