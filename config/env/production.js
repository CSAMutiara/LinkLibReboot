module.exports = {
    db_uri: process.env.PROD_DB,
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect(this.db_uri, callback)
    }
};