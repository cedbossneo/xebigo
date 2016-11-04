import * as Client from 'socket.io-client';

var onReconnect = {};
var onConnect = [];
var isConnected = false;
var ws;

export function setupRealtime (store) {
    ws = Client();

    ws.on('connect', function open() {
        console.log('WS connected');
        isConnected = true;
        Object.keys(onReconnect).forEach((key) => ws.emit('REDUX_SSE', onReconnect[key]));
        onConnect.forEach((action) => sendMessage(action));
        onConnect = [];
    });

    ws.on('REDUX_SSE', function(action) {
        console.log('Receive action ', action);
        store.dispatch(action);
    });

    ws.on('disconnect', function() {
        console.log('WS disconnected');
        isConnected = false;
        ws = undefined;
        setTimeout(() => setupRealtime(store), 1000);
    });
    return ws
}

var sendMessage = function (action) {
    console.log('dispatching thought server', action);
    if (action.persist) {
        onReconnect[action.type] = action;
    }
    ws.emit('REDUX_SSE', action)
};

export const rethinkMiddleware = store => next => action => {
    if (!action) return;
    if (!action.server)
        return next(action);
    if (isConnected) {
        sendMessage(action);
    } else {
        onConnect.push(action);
    }
};

