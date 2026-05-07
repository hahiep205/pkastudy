const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { getDueReviews, reviewFlashcards } = require('../controllers/srsController');

const router = express.Router();

router.get('/due', authMiddleware, getDueReviews);
router.post('/review', authMiddleware, reviewFlashcards);

module.exports = router;
