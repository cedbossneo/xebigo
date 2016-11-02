"use strict";
const KoaRouter = require('koa-router');
const r_1 = require('../../r');
const router = new KoaRouter();
router.post('/increment', (ctx) => {
    return new Promise((resolve, reject) => {
        r_1.default.execute((r, conn) => {
            return r.table("counter").get(1).update((item) => {
                var body = ctx.request.body;
                item.getField("value").add(body.increment);
            }, { durability: 'soft' }).run(conn).then(() => {
                ctx.body = { status: 'ok' };
                resolve();
            }).catch(() => {
                ctx.body = { status: 'ko' };
                reject();
            });
        });
    });
});
router.get('/init', (ctx) => {
    return new Promise((resolve, reject) => {
        r_1.default.execute((r, conn) => {
            return r.table("counter").delete().run(conn).then(() => {
                r.table("counter").insert({ id: 1, value: 0 }).run(conn).then(() => {
                    ctx.body = { status: 'ok' };
                    resolve();
                }).catch(() => {
                    ctx.body = { status: 'ko' };
                    reject();
                });
            }).catch(() => {
            });
        });
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=counter.js.map