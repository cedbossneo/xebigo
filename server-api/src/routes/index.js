"use strict";
const Router = require('koa-router');
const index_1 = require('./api/index');
const router = new Router();
router.use('/api', index_1.default.routes(), index_1.default.allowedMethods());
//For LoadTesting
router.get('/loaderio-cde5cdb7ecf1c252bce652de6f873e5b.txt', (ctx) => {
    ctx.body = "loaderio-cde5cdb7ecf1c252bce652de6f873e5b";
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map