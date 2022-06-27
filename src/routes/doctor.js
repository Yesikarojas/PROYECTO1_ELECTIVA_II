const {Router} = require('express')

const router = new Router()

const {
    index,
    getDoctor,
    addDoctor,
    deleteDoctor,
    modifyDoctor,
    replaceDoctor,
} = require('../controllers/controll-doctor')

router.get('/',index)
router.get('/:nit',getDoctor)
router.post('/', addDoctor)
router.put('/:id', replaceDoctor)

module.exports = router
