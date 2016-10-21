const router = require('koa-router')();
const RethinkDB = require('../../r');

router.post('/increment', (ctx) => {
   return new Promise((resolve, reject) => {
       RethinkDB.execute((r) => {
           return r.table("counter").get(1).update({
               value: r.row("value").add(ctx.request.body.increment)
           }, {durability: 'soft'}).run().then(() => {
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
        RethinkDB.execute((r) => {
            return r.table("counter").delete().run().then(() => {
                r.table("counter").insert({id: 1, value: 0}).run().then(() => {
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

module.exports = router;
