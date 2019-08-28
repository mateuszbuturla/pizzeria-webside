const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const colors = require('colors');
const shop = require('./routes/shop');
const config = require('./config');
const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'sklep';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.end();
});

app.get('/products', (req, res) => {
    shop(assert, MongoClient, res, url, dbName);
})

app.listen(3000)