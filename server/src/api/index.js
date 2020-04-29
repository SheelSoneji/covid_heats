const express = require('express');

const count_cases = require('./count_cases');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/count_cases', count_cases);

module.exports = router;
