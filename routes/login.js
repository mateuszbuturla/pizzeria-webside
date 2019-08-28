function login(app, assert, MongoClient, url, dbName, path, ) {

    const cookieParser = require('cookie-parser');

    app.use(cookieParser());

    app.get('/admin/login', (req, res) => {

        if (req.cookies.admin != undefined)
            res.redirect('/admin');

        res.sendFile(path.join(__dirname, '../public/login.html'));

    });

    app.post('/admin/login/:login/:password', (req, res) => {

        MongoClient.connect(url, function (err, client) {

            const { login, password } = req.params;

            assert.equal(null, err);

            const db = client.db(dbName);

            const collection = db.collection('users');

            collection.find({ login, password }).toArray(function (err, results) {

                if (results.length !== 0) {
                    res.cookie("admin", 1);
                }
                else {
                    res.clearCookie('admin');
                }

                res.json({
                    correct: results.length !== 0 ? true : false,
                });

            });

            client.close();

        });
    });
}

module.exports = login;