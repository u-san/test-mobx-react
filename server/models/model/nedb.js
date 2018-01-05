const Datastore = require('nedb');

module.exports = class Nedb {
    constructor(props) {
        this.db = new Datastore(props);
    }

    find(query, projection, sort = {}, page) {
        return new Promise((resolve, reject) => {
            this.db.find(query, projection)
                .sort(sort)
                .skip(page ? page.pageSize * (page.page - 1) : 0)
                .limit(page ? page.pageSize : 0)
                .exec(function (err, docs) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(docs);
                    }
                });

        });
    }

    findOne(query, projection) {
        return new Promise((resolve, reject) => {
            this.db.findOne(query, projection, (err, docs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });
        });
    }

    insert(docs) {
        return new Promise((resolve, reject) => {
            this.db.insert(docs, (err, newDoc) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(newDoc);
                }
            });
        });
    }

    update(query, update, options = {}) {
        return new Promise((resolve, reject) => {
            this.db.update(query, update, options, (err, numReplaced, affectedDocuments) => {
                if (err) {
                    reject(err);
                } else {
                    if (options.returnUpdatedDocs) {
                        resolve(affectedDocuments);
                    } else {
                        resolve(numReplaced);
                    }
                }
            });
        });
    }

    delete(query, options = {}) {
        return new Promise((resolve, reject) => {
            this.db.remove(query, options, (err, numRemoved) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(numRemoved);
                }
            });
        });
    }

    count(query) {
        return new Promise((resolve, reject) => {
            this.db.count(query, (err, count) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(count);
                }
            });
        });
    }
};
