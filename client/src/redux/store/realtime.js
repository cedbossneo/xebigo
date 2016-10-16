import Client from 'socket.io-client';

var onReconnect = {};
var onConnect = [];
var isConnected = false;
var ws;

export function setupRealtime (store) {
    ws = new Client(API_URL);

    ws.on('connect', function open() {
        console.log('WS connected');
        isConnected = true;
        Object.keys(onReconnect).forEach((key) => ws.emit(JSON.stringify(onReconnect[key])));
        onConnect.forEach((action) => sendMessage(action));
        onConnect = [];
    });

    ws.on('event', function(data, flags) {
        var action = JSON.parse(e.data);
        console.log('Receive action ', action);
        store.dispatch(action);
    });

    ws.on('disconnect', function(data, flags) {
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
    ws.emit(JSON.stringify(action))
};

export const rethinkMiddleware = store => next => action => {
    if (!action.server)
        return next(action);
    if (isConnected) {
        sendMessage(action);
    } else {
        onConnect.push(action);
    }
};

