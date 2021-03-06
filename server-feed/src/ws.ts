import * as Server from 'socket.io';
import actions from './events';

function setup() {
    var wss = Server(8182);
    wss.on('connection', (client) => {
        client.on('REDUX_SSE', (action) => {
            console.log('Action received', action);
            var res = actions[action.type](action);
            if (res instanceof Function){
                res((result) => {
                    client.emit('REDUX_SSE', result);
                });
            }else
                client.emit('REDUX_SSE', res);
        });
        client.on('disconnect', () => console.log('Client disconnected'));
        console.log('Client connected');
    });
}

export default setup;
