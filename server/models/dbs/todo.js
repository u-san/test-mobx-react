const Model = require('../model').Document;

class Todo extends Model {
    constructor() {
        super();
    }

    static get(query = {}) {
        return this.find(query);
    }

    static async set(data) {
        return this.insert(data);
    }

    static remove(query = {}) {
        let q = {};
        q.id = query.id;
        return this.delete(q, { multi: true });
    }

    static collectionName() {
        return 'Todo';
    }
}

new Todo();

module.exports = Todo;
