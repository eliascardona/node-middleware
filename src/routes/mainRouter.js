const express = require('express')
const router = express.Router()
const { extenseFormController } = require('../controllers/extenseFormController.js')
const { inputValidationMiddleware } = require('../middlewares/inputValidationMiddleware.js')

router.get('/hola', (req, res) => {
    res.status(200).json({ message: 'hola' })
})
router.post('/prueba', inputValidationMiddleware, extenseFormController)


module.exports = router