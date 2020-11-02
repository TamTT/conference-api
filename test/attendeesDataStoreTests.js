'use strict';
const attendeesDataStore = require('../dataStore/attendeesDataStore');
const assert = require('assert');

var testADS = new attendeesDataStore();

describe('AttendeesDataStore', function() {
  describe('#get()', function() {
    it('should return attendee by id', function() {
      assert.equal(testADS.get(1), null);
    });
  });

  describe('#getAll()', function() {
    it('should return all attendees data', function() {
      assert.equal(testADS.getAll().length, 0);
    });
  });

  describe('#insert()', function() {
    it('should insert attendee data', function() {
      testADS.insert(
          1,
          "Hendrix Carroll",
          "Songlines",
          "hendrixcarroll@songlines.com",
          "Magna velit adipisicing ullamco sint duis nisi."
          )
      assert.equal(testADS.getAll().length, 1);
      assert.equal(testADS.get(1).name, "Hendrix Carroll");
      assert.equal(testADS.get(1).company, "Songlines");
    });
  });
});