const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const shop = require('./routes/shop');
const admin = require('./routes/admin');
const login = require('./routes/login');
const config = require('./config');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendfile('./public/index.html');
});

admin(app, path, MongoClient, config.dbUrl, config.dbName, mongodb, express, assert, login);

// app.get('/admin', (req, res) => {
//     admin(path, req, res);
// });

app.get('/products', (req, res) => {
    shop(assert, MongoClient, res, config.dbUrl, config.dbName);
})

app.listen(3000)