const express = require('express')
const router = express.Router()
const { authController } = require ("../controllers/auth")


router.post('/register',authController.register )
router.post('/login', authController.login)
router.get('/get-users', authController.getUsers)
router.delete('/user/:id' , authController.deleteAcount)
router.patch('/user/:id', authController.updateAccount)

module.exports.authRoute = router