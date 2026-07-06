const express = require('express')
const {handleRegister , handleLogin} = require('../controller/auth')

const router = express.Router();

router.post('/register',handleRegister);

router.post('/login',handleLogin);

module.exports = router