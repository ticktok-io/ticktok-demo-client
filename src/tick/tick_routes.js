let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
  let index = req.query.index;
  if(!index) {
    index = 0;
  }
  res.status(200).send(ticks.slice(index));
});

module.exports = router;
