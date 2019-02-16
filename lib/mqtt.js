const mqtt = require('mqtt');
const logger = require('../logger');

const client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
    if (!err) {
        logger.info('MQTT Connected OK');
    } else {
        logger.error('MQTT Connection FAILED');
    }
});

module.exports = client;