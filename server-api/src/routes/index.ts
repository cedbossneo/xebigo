import * as Router from 'koa-router';
import api from './api/index'

const router = new Router();

router.use('/api', api.routes(), api.allowedMethods());

//For LoadTesting
router.get('/loaderio-cde5cdb7ecf1c252bce652de6f873e5b.txt', (ctx) => {
    ctx.body = "loaderio-cde5cdb7ecf1c252bce652de6f873e5b";
});

export default router