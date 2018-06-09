let express = require('express');
let router = express.Router();

router.get('/health', function(req, res, next) {
  res.json({ status: 'UP'});
});

module.exports = router;
