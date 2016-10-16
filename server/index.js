const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const cors = require('kcors');
const routes = require('./routes');
const ws = require('./ws');

const app = new Koa();

// sessions
app.keys = ['wescale'];

app.use(new BodyParser());
app.use(cors());
app.use(routes.routes(), routes.allowedMethods());

const httpServer = app.listen(8181);

ws.setup(httpServer);

console.log('Listening on port 8181.');
