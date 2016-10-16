const thinky = require('thinky')({
    host: process.env.RETHINKDB_DRIVER_SERVICE_HOST || 'localhost',
    port: process.env.RETHINKDB_DRIVER_SERVICE_PORT || 28015,
    authKey: '',
    db: 'xebigo'
});

var type = thinky.type;

const Counter = thinky.createModel('Counter', {
    id: type.number(),
    counter: type.number().default(0)
});

var r = thinky.r;

module.exports = { Counter, r };
