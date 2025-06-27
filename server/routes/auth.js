const express = require('express');
const { handleLogin, handleRegister , HandleLogout } = require('../controllers/auth');

const router = express.Router()

router.post("/login" , handleLogin)

router.post("/register" , handleRegister)

router.post("/logout", HandleLogout)

module.exports = router;