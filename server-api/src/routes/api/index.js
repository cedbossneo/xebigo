"use strict";
const KoaRouter = require('koa-router');
const likes_1 = require('./likes');
const router = new KoaRouter();
router.use('/likes', likes_1.default.routes(), likes_1.default.allowedMethods());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map