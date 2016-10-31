"use strict";
const rethinkdb_1 = require("./rethinkdb");
const SocketIO = require("./ws");
rethinkdb_1.default.connect();
SocketIO.setup();
//# sourceMappingURL=index.js.map