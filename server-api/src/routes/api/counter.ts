import * as KoaRouter from 'koa-router';
import RethinkDB from '../../rethinkdb';

const router = new KoaRouter();

router.post('/increment', (ctx) => {
   return new Promise((resolve, reject) => {
       RethinkDB.execute((r, conn) => {
           return r.table("counter").get(1).update((item) => {
               item.getField("value").add(ctx.request.body.increment);
           }, {durability: 'soft'}).run(conn).then(() => {
               ctx.body = {status: 'ok'};
               resolve();
           }).catch(() => {
               ctx.body = {status: 'ko'};
               reject();
           });
       });
   })
});

router.get('/init', (ctx) => {
    return new Promise((resolve, reject) => {
        RethinkDB.execute((r, conn) => {
            return r.table("counter").delete().run(conn).then(() => {
                r.table("counter").insert({id: 1, value: 0}).run(conn).then(() => {
                    ctx.body = {status: 'ok'};
                    resolve();
                }).catch(() => {
                    ctx.body = {status: 'ko'};
                    reject();
                });
            }).catch(() => {
            });
        });
    })
});

export default router