module.exports = (Collections) => {
    return class Document {
        constructor() {
            Collections.push(this.constructor);
        }
    };
};