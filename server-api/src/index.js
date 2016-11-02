"use strict";
const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const index_1 = require('./routes/index');
const r_1 = require('./r');
const app = new Koa();
r_1.default.connect();
// sessions
app.keys = ['wescale'];
app.use(BodyParser());
app.use(index_1.default.routes());
app.listen(8181);
console.log('Listening on port 8181.');
//# sourceMappingURL=index.js.map