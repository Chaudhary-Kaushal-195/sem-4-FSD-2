var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler = function (msg) {
  console.log('I hear a scream!');
}
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');