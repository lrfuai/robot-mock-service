const logger = require('../logger');
const {Emitter,Events} = require('../state');

Emitter.on(Events.STATE_CHANGED, state => logger.info(Events.STATE_CHANGED,state));

