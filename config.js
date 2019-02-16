const nconf = module.exports = require('nconf');
const manifest = require('./manifest');
const path = require('path');

nconf
// 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'HTTP_PORT',
    'MQTT_PORT'
  ])
  // 3. Config file
  .file({file: path.join(__dirname, 'config.json')})
  // 4. Defaults
  .defaults({
    HTTP_PORT: manifest.server.port,
    MQTT_PORT: manifest.state.port
  });

// Check for required settings
checkConfig('HTTP_PORT');
checkConfig('MQTT_PORT');

function checkConfig(setting) {
  if (!nconf.get(setting)) {
    throw "You must set " + setting + " as an environment variable or in config.json!";
  }
}