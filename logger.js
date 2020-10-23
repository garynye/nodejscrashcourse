const EventEmitter = require('events');

//uuid creates random universal format of an id
const uuid = require('uuid');

console.log(uuid.v4());


class Logger extends EventEmitter {

    log(msg) {
        //call event 
        this.emit('message', {id: uuid.v4(), msg });
    }
}


//instead of export run below
//module.exports = Logger;


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('called listener', data));

logger.log('hello');
logger.log('1');
logger.log('hello');

