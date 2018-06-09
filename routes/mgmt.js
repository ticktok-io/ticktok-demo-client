let express = require('express');
let router = express.Router();

router.get('/health', function(req, res, next) {
  res.send({ status: 'UP'});
});

module.exports = router;
