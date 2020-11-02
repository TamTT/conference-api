'use strict';

module.exports = function (app, db) {

    app.post('/talks', function (req, res) {
        return res.send('POST HTTP method on talks resource');
    });

    app.get('/talks', function (req, res) {
        res.send("HELLO");
        console.log(req);
        console.log(res);
        var talksData = talkDataStore.getAll();
        return res.send(talksData.to_json);
    });

    app.get('/talks/:talkId', function (req, res) {
        console.log(req);
        console.log(res);
        var data = ds.get();
        res.send(data.to_json);
    });
};