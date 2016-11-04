import * as KoaRouter from 'koa-router';
import RethinkDB from '../../r';
import * as R from 'rethinkdb';

const router = new KoaRouter();

router.post('/increment', (ctx) => {
   return new Promise((resolve, reject) => {
       RethinkDB.execute((db, conn) => {
           db.table("likes").get(1).update({
               value: R.row("value").add(ctx.request.body.increment)
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
        RethinkDB.execute((db, conn) => {
            db.table("likes").delete().run(conn).then(() => {
                db.table("likes").insert({id: 1, value: 0}).run(conn).then(() => {
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