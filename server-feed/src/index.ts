import RethinkDB from './rethinkdb';
import * as SocketIO from './ws';

RethinkDB.connect();
SocketIO.setup();
