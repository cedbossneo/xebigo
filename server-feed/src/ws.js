"use strict";
const Server = require('socket.io');
const events_1 = require('./events');
function setup() {
    var wss = Server(8182);
    wss.on('connection', (client) => {
        client.on('REDUX_SSE', (action) => {
            console.log('Action received', action);
            var res = events_1.default[action.type](action);
            if (res instanceof Function) {
                res((result) => {
                    client.emit('REDUX_SSE', result);
                });
            }
            else
                client.emit('REDUX_SSE', res);
        });
        client.on('disconnect', () => console.log('Client disconnected'));
        console.log('Client connected');
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setup;
//# sourceMappingURL=ws.js.map