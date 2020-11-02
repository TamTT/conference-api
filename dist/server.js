'use strict';

var express = require('express');
var app = express();
var port = 3000;

var DataStore = require('./dataStore/talksDataStore');
var talkDataStore = new DataStore();

app.listen(port, function () {
  return console.log('App listening on port ' + port + '! Up and running!');
});
app.get('/', function (req, res) {
  return res.send('Welcome to Make REST API Calls In Express!');
});