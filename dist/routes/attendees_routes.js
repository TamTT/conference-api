"use strict";

module.exports = function (app, db) {
    // ATTENDEE RESOURCE 
    api.get("/attendees", function (req, res) {
        res.send("HELLO");
        console.log(req);
        console.log(res);
        // var data = dataStore.get(req.params[:id]);
        res.send(data.to_json);
        res.send("Hello World");
    });

    api.post("/", function (req, res) {
        console.log(req);
        var data = dataStore.insert(req.payload);
        res.send(data.to_json);
        res.send("Hello World");
    });
};