const mongoose = require("mongoose");
const config = require('./config');
const dbPath = 'mongodb://' + config['host'] + ':' + config['port'] + '/' + config['database'];

mongoose.connect(dbPath, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function () {
    console.log("Mongoose default connection is open to ");
});

db.on('error', function (err) {
    // console.log(error("Mongoose default connection has occured "+err+" error"));
});

db.on('disconnected', function () {
    // console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', function () {
    db.close(function () {
        // console.log(termination("Mongoose default connection is disconnected due to application termination"));
        process.exit(0)
    });
});
module.exports = mongoose;
