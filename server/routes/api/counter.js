const router = require('koa-router')();
const {Counter, r} = require('../../thinky');

router.get('/increment', (ctx) => {
   return new Promise((resolve, reject) => {
       return Counter.get(1).update({
           counter: r.row("counter").add(1)
       }).run().then(() => {
           ctx.body = {status: 'ok'};
           resolve();
       }).catch(() => {
           ctx.body = {status: 'ko'};
           reject();
       });
   })
});

router.get('/init', (ctx) => {
    return new Promise((resolve, reject) => {
        return Counter.filter({}).delete().then(() => {
            return Counter.save({id:1, counter: 0})
        }).then(() => {
            ctx.body = {status: 'ok'};
            resolve();
        }).catch(() => {
            ctx.body = {status: 'ko'};
            reject();
        });
    })
});

module.exports = router;
