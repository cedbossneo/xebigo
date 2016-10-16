const Server = require('socket.io');
const actions = require('./events');

function setup(server) {
    var wss = new Server(server);
    wss.on('connection', (client) => {
        client.on('event', (data) => {
            var action = JSON.parse(data);
            console.log('Action received', action);
            var res = actions[action.type](action);
            if (res instanceof Function){
                res((result) => {
                    client.emit(JSON.stringify(result));
                });
            }else
                client.emit(JSON.parse(res));
        });
        console.log('Client connected');
    });
}

module.exports = {
    setup: setup
};
