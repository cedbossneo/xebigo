const RethinkDB = require('./r');
const SocketIO = require('./ws');

RethinkDB.connect();
SocketIO.setup();
