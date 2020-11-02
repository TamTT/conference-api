'use strict';
const talksDataStore = require('../dataStore/talksDataStore');
const assert = require('assert');

var testTDS = new talksDataStore();

describe('TalksDataStore', function() {
  describe('#get()', function() {
    it('should return talk by id', function() {
      assert.equal(testTDS.get(1), null);
    });
  });

  describe('#getAll()', function() {
    it('should return all talk data', function() {
      assert.equal(testTDS.getAll().length, 0);
    });
  });

  describe('#insert()', function() {
    it('should insert talk data', function() {
      var speaker = {
        "name": "Hendrix Carroll",
        "company": "Songlines",
        "email": "hendrixcarroll@songlines.com",
        "bio": "Magna velit adipisicing ullamco sint duis nisi."
      }
      testTDS.insert(1, "Talk 1", "100", speaker);
      testTDS.insert(2, "Talk 2", "200");
      assert.equal(testTDS.getAll().length, 2);
      assert.equal(testTDS.get(1).title, "Talk 1");
      assert.equal(testTDS.get(1).room, "100");
      assert.equal(testTDS.get(1).speaker.name, "Hendrix Carroll");
      assert.equal(testTDS.get(2).title, "Talk 2");
      assert.equal(testTDS.get(2).room, "200");
    });
  });

  describe('#update()', function() {
    it('should update talk data', function() {
      var req = { 
        params : {
          "id": 1,
          "title": "Talk 3",
          "room": 301,
          "speaker": {
            "name": "Melody Juarez",
            "company": "Zillatide",
            "email": "melodyjuarez@zillatide.com",
            "bio": "Veniam do eu quis officia enim."
          },
          "attendees": []
        }
      }

      testTDS.update(req);
      assert.equal(testTDS.get(1).title, "Talk 3");
      assert.equal(testTDS.get(1).room, "301");
      assert.equal(testTDS.get(1).speaker.name, "Melody Juarez");
    });

    it('should add attendee to talk data', function() {
      var req = { 
        params : {
          "id": 1,
          "title": "Talk 3",
          "room": 301,
          "speaker": {
            "name": "Melody Juarez",
            "company": "Zillatide",
            "email": "melodyjuarez@zillatide.com",
            "bio": "Veniam do eu quis officia enim."
          },
          "attendees": [
            {
              "name": "Sanders Riley",
              "company": "Comtext",
              "email": "sandersriley@comtext.com",
              "registered": "2015-05-24T02:15:04 +07:00"
            },
            {
              "name": "Bean Cline",
              "company": "Utarian",
              "email": "beancline@utarian.com",
              "registered": "2015-06-21T02:54:39 +07:00"
            }
          ]
        }
      }

      testTDS.update(req);
      assert.equal(testTDS.get(1).attendees.length, 2);
    });

    it('should remove attendee to talk data', function() {
      var req = { 
        params : {
          "id": 1,
          "title": "Talk 3",
          "room": 301,
          "speaker": {
            "name": "Melody Juarez",
            "company": "Zillatide",
            "email": "melodyjuarez@zillatide.com",
            "bio": "Veniam do eu quis officia enim."
          },
          "attendees": [
            {
              "name": "Bean Cline",
              "company": "Utarian",
              "email": "beancline@utarian.com",
              "registered": "2015-06-21T02:54:39 +07:00"
            }
          ]
        }
      }

      testTDS.update(req);
      assert.equal(testTDS.get(1).attendees.length, 1);
    });
  });

});