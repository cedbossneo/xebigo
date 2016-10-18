const router = require('koa-router')();
const api = require('./api');

router.use('/api', api.routes(), api.allowedMethods());
router.get('/loaderio-cde5cdb7ecf1c252bce652de6f873e5b.txt', (ctx) => {
    ctx.body = "loaderio-cde5cdb7ecf1c252bce652de6f873e5b";
});

module.exports = router;
