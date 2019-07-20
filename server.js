'use strict';
const BotCore = require('bot-control-core');
const manifest = require('./manifest');

const {server,messages,browser} = BotCore(manifest);

messages.on(messages.Events.SERVER_COMPONENTS_LOAD_COMPLETE, ({port}) => {
  console.log('Server Started at port ' + port)
});

server();

browser.getActionByType('movement').on(messages.Events.ACTION_REACHED,(payload) => {
  console.info(payload);
});