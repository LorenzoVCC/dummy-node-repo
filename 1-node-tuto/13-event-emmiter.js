const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data received user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log('more data received');
});

customEmitter.emit('response', 'Lorenzo', 25);