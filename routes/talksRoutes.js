'use strict';
const talksDataStore = require('../dataStore/talksDataStore');

module.exports = function(app){

    //add a talk (POST)
    app.post('/talks', (req, res) => {
        const talk = req.body;
        talkDataStore.insert(talk);
        return res.send('Talk has been added');
    });

    app.get('/talks', (req, res)=> {
        res.send("GET TALKS");
        var talksData = talkDataStore.getAll();
        return res.send(talksData.to_json);
    });

    app.get('/talks/:talkId', (req, res)=> {
        res.send("GET TALK WITH ID");
        var talksData = talkDataStore.get(req.params.id);
        return res.send(data.to_json);
    });

    app.put('/talks/:talkId', (req, res)=> {
        res.send("PUT TALK WITH ID");
        var talksData = talkDataStore.update(req,res);
        return res.send(data.to_json);
    });

    //Can have DELETE for delete a talk
}