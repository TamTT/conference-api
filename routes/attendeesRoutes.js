'use strict';
const attendeesDataStore = require('../dataStore/attendeesDataStore');

module.exports = function(app){

    //add an attendee (POST)
    app.post("/attendees", (req, res)=> {
        const attendee = req.body;
        attendeesDataStore.insert(attendee);
        return res.send('Attendee has been added');
    });

    app.get("/attendees", (req, res)=> {
        res.send("GET ATTENDEES");
        var attendeesData = attendeesDataStore.getAll();
        return res.send(attendeesData.to_json);
    });

    app.get("/attendees/:attendeeId", (req, res)=> {
        res.send("GET ATTENDEE WITH ID");
        var attendeesData = attendeesDataStore.get(req.params.id);
        return res.send(attendeesData.to_json);
    });

    //Can have PUT for update attendee 
    //Can have DELETE for delete an attendee
}