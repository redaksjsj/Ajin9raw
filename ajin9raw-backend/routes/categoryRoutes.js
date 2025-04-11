const express = require('express');
const router = express.Router();

const { createCategory } = require('../controllers/categoryController');
const isTeacher = require('../middlewares/isTeacher');
// Protéger la route avec le middleware isTeacher
router.post('/', isTeacher, createCategory);

module.exports = router;
