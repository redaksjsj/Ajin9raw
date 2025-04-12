const express = require('express');
const router = express.Router();
const { askAI } = require('../controllers/aiController');

router.post('/ask', askAI);
router.get('/test', (req, res) => {
    res.send('Route AI GET test ok ✅');
  });  
module.exports = router;