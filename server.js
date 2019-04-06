'use strict';
const BotCore = require('bot-control-core');
const manifest = require('./manifest');

const {server,messages,browser} = BotCore(manifest);

messages.on(messages.Events.SERVER_COMPONENTS_LOAD_COMPLETE, ({port}) => {
  console.log('Server Started at port ' + port)
});

server();

browser.getComponentById('ultrasonic-front').on(messages.Events.COMPONENT_REACHED,({id,action,options,responder}) => {
  responder.ok(id);
});

browser.getComponentById('bumper-front-left').on(messages.Events.COMPONENT_REACHED,({id,action,options,responder}) => {
  responder.ok(id);
});

browser.getComponentById('bumper-front-right').on(messages.Events.COMPONENT_REACHED,({id,action,options,responder}) => {
  responder.ok(id);
});

browser.getComponentById('motor-left').on(messages.Events.COMPONENT_REACHED,({id,action,options,args,responder}) => {
  responder.ok(id);
});

browser.getComponentById('motor-right').on(messages.Events.COMPONENT_REACHED,({id,action,options,responder}) => {
  responder.ok(id);
});

browser.getComponentById('led-front-left').on(messages.Events.COMPONENT_REACHED,({id,action,options,responder}) => {
  responder.error(id);
});

browser.getComponentById('led-front-right').on(messages.Events.COMPONENT_REACHED,({id,action,options,responder}) => {
  responder.invalid(id);
});