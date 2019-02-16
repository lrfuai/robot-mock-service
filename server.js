'use strict';
const restify = require('restify');
const logger = require('./lib/logger');
const config = require('./config');
const endpoints = require('./lib/endpoints');
const manifest = require('./manifest');

const server = restify.createServer({name: NAME});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({mapParams: true}));

endpoints(server);

server.get('/', function (req, res, next) {
  res.send(manifest);
  return next();
});

server.put('/setup', function (req, res, next) {
  res.send(manifest);
  return next();
});

server.get('/ping', function (req, res, next) {
  res.send('pong');
  logger.info('Ping');
  return next();
});

if (module === require.main) {
  // Start the server
  server.listen(config.get('PORT'),
    () => {
      logger.info(server.name + ' listening at ' + server.url);
    }
  );
}

module.exports = {
  server: server
};