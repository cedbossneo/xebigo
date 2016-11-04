import * as Router from 'koa-router';
import api from './api/index'

const router = new Router();

router.use('/api', api.routes(), api.allowedMethods());

//For LoadTesting
router.get('/loaderio-032042978cbe5272898e7794a4a64e6f.txt', (ctx) => {
    ctx.body = "loaderio-032042978cbe5272898e7794a4a64e6f";
});

export default router