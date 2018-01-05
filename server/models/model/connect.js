const Nedb = require('./nedb');
const path = require('path');

function getCollectionName(collection) {
    let name = collection.name;

    if (typeof collection.collectionName === 'function') {
        name = collection.collectionName();
        if (typeof name !== 'string') throw new Error('collectionName must return a string');
    }

    return name;
}

function createDatastore(fileName, collection) {
    let ne = new Nedb({
        filename: fileName,
        // autoload: true
    });

    const property = Object.getOwnPropertyNames(collection);
    property.forEach(item => {
        if (!['length', 'prototype', 'name'].includes(item)) {
            ne[item] = collection[item];
        }
    });

    return ne;
}

module.exports = (Collections) => {
    return (uri) => {
        if (!path.isAbsolute(uri)) throw new Error('argument[0] must be a absolute path');

        const dbs = {
            _base: {}
        };
        Collections.forEach(collection => {
            const name = getCollectionName(collection);
            dbs['_base'][name] = createDatastore(`${uri}/${name.toLowerCase()}.db`, collection);
            dbs[`${name}Db`] = () => {
                dbs['_base'][name].db.loadDatabase(function(err) {
                    if (err) {
                        console.error(err);
                    }
                });
                return dbs['_base'][name];
            };
        });

        return dbs;
    };
};
