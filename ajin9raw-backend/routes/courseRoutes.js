const express = require('express');
const router = express.Router();

const { createCourse } = require('../controllers/courseController');
const verifyToken = require('../middlewares/verifyToken');
const isTeacher = require('../middlewares/isTeacher');

router.post('/', verifyToken, isTeacher, createCourse);

module.exports = router;
