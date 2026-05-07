const express = require('express');
const {
  getCourses,
  getCourseTopics,
} = require('../controllers/coursesController');

const router = express.Router();

router.get('/', getCourses);
router.get('/:id/topics', getCourseTopics);

module.exports = router;
