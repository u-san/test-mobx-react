const Collections = [];

module.exports = {
    Document: require('./document')(Collections),
    connect: require('./connect')(Collections)
};