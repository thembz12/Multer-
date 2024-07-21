const express = require('express')
const { signUp, getOne, getAll, updateUser, verifyEmail, resendVerification, forgotPassword, resetPassword } = require('../controller/userController')
const upload = require('../utils/multer.js')
const router = express.Router()

router.post('/sign-up', upload.single('image'), signUp)

router.get('/one/:id', getOne)

router.get('/all', getAll)

router.put('/update/:id', upload.single('image'), updateUser)

router.post("/verify", verifyEmail)

router.post("/resendVerification/", resendVerification)

router.get("/forgotpassword", forgotPassword )

//router.post("/changepassword:token", changeP)

router.get("/reset-password:token", resetPassword)

module.exports = router;