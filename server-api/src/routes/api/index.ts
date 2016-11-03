import * as KoaRouter from 'koa-router';
import likes from './likes';

const router = new KoaRouter();

router.use('/likes', likes.routes(), likes.allowedMethods());

export default router