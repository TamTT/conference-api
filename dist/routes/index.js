'use strict';

var talkRoutes = require('./talks_routes');
var attendeeRoutes = require('./attendees_routes');

module.export = function (app, db) {
  talkRoutes(app, db);
  attendeeRoutes(app, db);
};

app.get('/', function (req, res) {
  return res.send('Welcome to Make REST API Calls In Express!');
});

// // TALK RESOURCE
// app.post('/talks', (req, res) => {
//     return res.send('POST HTTP method on talks resource');
//   });

// app.get('/talks', (req, res)=> {
//     console.log(req);
//     console.log(res);
//     var talksData = talkDataStore.getAll();
//     return res.send(talksData.to_json);
// });

// app.get('/talks/:talkId', (req, res)=> {
//     console.log(req);
//     console.log(res);
//     var data = ds.get();
//     res.send(data.to_json);
// });

// app.put('/talks/:talkId', (req, res)=> {
//     return res.send('PUT HTTP method on user resource');
//   });

// ATTENDEE RESOURCE 
// api.get("/attendees", (req, res)=> {
//     console.log(req);
//     console.log(res);
//     var data = dataStore.get(req.params[:id]);
//     res.send(data.to_json);
//     res.send("Hello World");
// });

// api.post("/", (req, res)=> {
//     console.log(req);
//     var data = dataStore.insert(req.payload);
//     res.send(data.to_json);
//     res.send("Hello World");
// });

// #### TEST File
// expect(api.get('/')).to return([])
// api.post({ title: "First talk"});
// api.post({title: "second"});
// expect(api.get('/')).to return([{title: "First talk"}, {title: "second"}])

// api.put(123, {title: "Updated First talk!"});