let express = require('express');
let router = express.Router();
let axios = require('axios');

const CLOCKS_PATH = 'https://ticktok-io-dev.herokuapp.com/v1/clocks?access_token=';

router.post('/', function (req, res, next) {
  axios.post(`${CLOCKS_PATH}${req.body.key}`, {schedule: req.body.schedule})
    .then(response => {
      res.send(201);
    })
    .catch(error => {
      console.log(error);
      res.send(500);
    });
});

module.exports = router;
