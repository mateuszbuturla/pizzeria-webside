// function admin(path, req, res) {
function admin(app, path, MongoClient, url, dbName, mongodb) {

    function addProduct(number, name, components, price, type) {

        MongoClient.connect(url, function (err, client) {

            const db = client.db(dbName);

            const collection = db.collection('products');

            collection.insertOne({ number, name, components, price, type }, (err) => {
                if (err)
                    console.log('Wystąpił błąd podczas dodawania do bazy danych'.red);
                else
                    console.log('Dodawanie produktu do bazy danych zakończyło się powodzeniem'.green);
            })

            client.close();

        });
    }


    //res.sendFile(path.join(__dirname, '../public/adminPanel.html'));

    app.get('/admin', (req, res) => {

        res.sendFile(path.join(__dirname, '../public/adminPanel.html'));

    });

    app.get('/admin/add', (req, res) => {

        res.sendFile(path.join(__dirname, '../public/addProduct.html'));

    });

    app.post('/admin/add/:number/:name/:components/:price/:type', (req, res) => {

        const { number, name, components, price, type } = req.params;
        addProduct(number, name, components, price, type);

    });

    app.post('/admin/remove/:id', (req, res) => {

        const { id } = req.params;

        MongoClient.connect(url, function (err, client) {

            const db = client.db(dbName);

            const collection = db.collection('products');

            collection.deleteOne({ _id: mongodb.ObjectID(id) }, function (err) {
                if (err)
                    console.log('Wystąpił błąd podczas usuwania produktu dz bazy danych'.red);
                else
                    console.log('Usuwanie produktu z bazy danych zakończyło się powodzeniem'.green);
            });

            client.close();

        });

    });

}

module.exports = admin;