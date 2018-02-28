module.exports = {
    db_uri: 'mongodb://admin:admin1234@ds249128.mlab.com:49128/cs3051',
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect(this.db_uri, callback)
    }
};