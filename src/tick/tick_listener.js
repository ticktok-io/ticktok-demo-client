let amqp = require('amqplib/callback_api');

global.ticks = [];

let listeners = [];

module.exports = {
  listen: function (uri, topic, ex) {
    if (!listeners.includes(listenerId(topic, ex))) {
      console.log('Starting listening for: ', topic);
      listeners.push(listenerId(topic, ex));
      amqp.connect(uri, function (err, conn) {
        conn.createChannel(function (err, ch) {

          ch.assertExchange(ex, 'topic', {durable: false});

          ch.assertQueue('', {exclusive: true}, function (err, q) {
            ch.bindQueue(q.queue, ex, topic);
            ch.consume(q.queue, function (msg) {
              ticks.push({
                time: new Date().getTime(),
                schedule: msg.fields.routingKey,
                message: msg.content.toString()
              });
            }, {noAck: true});
          });
        });
      });
    }
  }
};


let listenerId = function (topic, ex) {
  return `${topic}:${ex}`;
};
