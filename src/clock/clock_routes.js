let express = require('express');
let router = express.Router();
let axios = require('axios');
let tick = require('../tick/tick_listener.js');

const CLOCKS_PATH = 'https://ticktok-io-dev.herokuapp.com/api/v1/clocks?access_token=';

router.post('/', function (req, res, next) {
  const url = `${CLOCKS_PATH}${req.body.key}`;
  console.log(url);
  axios.post(url, {schedule: req.body.schedule})
    .then(response => {
      const { channel } = response.data;
      tick.listen(channel.uri, channel.topic, channel.exchange);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
