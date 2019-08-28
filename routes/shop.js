function shop(assert, MongoClient, res, url, dbName) {

    MongoClient.connect(url, function (err, client) {

        assert.equal(null, err);

        const db = client.db(dbName);

        const collection = db.collection('products');

        collection.find({}).toArray(function (err, data) {

            assert.equal(err, null);

            res.json({
                products: data,
            })

            res.end();

        });

        client.close();

    });
}

module.exports = shop;