const dash = require('rethinkdbdash');

class RethinkDB {
    execute (cb) {
        return cb(this.r)
    }

    connect () {
        this.r = dash({host: process.env.RETHINKDB_PROXY_SERVICE_HOST || 'localhost', port: process.env.RETHINKDB_PROXY_SERVICE_PORT || 28015, db: 'xebigo'});
    }
}

module.exports = new RethinkDB();
