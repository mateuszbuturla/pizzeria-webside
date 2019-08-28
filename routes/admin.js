// function admin(path, req, res) {
function admin(app, path, MongoClient, url, dbName) {

    function addProduct(name, price) {

        MongoClient.connect(url, function (err, client) {

            const db = client.db(dbName);

            const collection = db.collection('products');

            collection.insertOne({ name, price }, (err) => {
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

    app.post('/admin/add/:name/:price', (req, res) => {

        const { name, price } = req.params;
        console.log(`Otrzymano dane by dodać to bazy danych: ${name} o cenie ${price}`);
        addProduct(name, price);

    })

}

module.exports = admin;