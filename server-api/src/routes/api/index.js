"use strict";
const KoaRouter = require('koa-router');
const counter_1 = require('./counter');
const router = new KoaRouter();
router.use('/counter', counter_1.default.routes(), counter_1.default.allowedMethods());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map