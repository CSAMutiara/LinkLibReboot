//mongoose config
console.log('This file is called')
var config = require('./config'),
    mongoose = require('mongoose');
    
    
mongoose.Promise = global.Promise;
mongoose.connect(config.db_uri, {
    useMongoClient: true
}).then(() => {
    console.log('connected to DB success')
})
.catch(() => {
    console.log('failed to connect to database');
});