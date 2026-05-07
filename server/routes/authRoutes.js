const express = require('express');
const { register, login, googleLogin, sendVerificationCode } = require('../controllers/authController');

const router = express.Router();

router.post('/send-code', sendVerificationCode);
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);

module.exports = router;
