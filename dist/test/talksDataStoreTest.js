'use strict';

var talksDataStore = require('../dataStore/talksDataStore');
var assert = require('assert');

var testTDS = new talksDataStore();

describe('TalksDataStore', function () {
  describe('#get()', function () {
    it('should return talk by id', function () {
      assert.equal(testTDS.get(0), null);
    });
  });

  describe('#getAll()', function () {
    it('should return all talk data', function () {
      assert.equal(testTDS.getAll().length, 0);
    });
  });

  describe('#insert()', function () {
    it('should return talk by id', function () {
      testTDS.insert("Talk 1", "100");
      assert.equal(testTDS.get(0).title, "Talk 1");
      assert.equal(testTDS.get(0).room, "100");
    });
  });
});