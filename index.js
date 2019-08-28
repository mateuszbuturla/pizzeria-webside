const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const colors = require('colors');
const shop = require('./routes/shop');
const admin = require('./routes/admin');
const config = require('./config');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendfile('./public/index.html');
});

admin(app, path, MongoClient, config.dbUrl, config.dbName);

// app.get('/admin', (req, res) => {
//     admin(path, req, res);
// });

app.get('/products', (req, res) => {
    shop(assert, MongoClient, res, config.dbUrl, config.dbName);
})

app.listen(3000)