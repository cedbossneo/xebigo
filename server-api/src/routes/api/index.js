const router = require('koa-router')();
const counter = require('./counter');

router.use('/counter', counter.routes(), counter.allowedMethods());

module.exports = router;