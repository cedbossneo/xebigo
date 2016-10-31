import * as KoaRouter from 'koa-router';
import counter from './counter';

const router = new KoaRouter();

router.use('/counter', counter.routes(), counter.allowedMethods());

export default router