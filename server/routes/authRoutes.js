const express = require('express');
const { register, login, loginWithGoogle } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google', loginWithGoogle);

module.exports = router;
