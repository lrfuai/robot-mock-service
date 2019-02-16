const events = require('events');
const Emitter = new events.EventEmitter();

const State = {};

const Events = {STATE_CHANGED: "STATE_CHANGED"};

const emitChanged = () => {
    Emitter.emit(Events.STATE_CHANGED,State);
};

const multi = elems => {
    Object.keys(elems).map(key => State[key] = elems[key]);
    emitChanged();
};

const set = (key,value) => {
    State[key] = value;
    emitChanged();
};

module.exports = {
    Events,
    Emitter,
    multi,
    set,
};