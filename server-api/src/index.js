const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const cors = require('kcors');
const routes = require('./routes');
const RethinkDB = require('./r');

const app = new Koa();

RethinkDB.connect();

// sessions
app.keys = ['wescale'];

app.use(new BodyParser());
app.use(cors());
app.use(routes.routes(), routes.allowedMethods());

app.listen(8181);

console.log('Listening on port 8181.');
