"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require("process"),
    title = _require.title;

// an abstraction layer for storing Talks data 


var talksDataStore = function () {
  function talksDataStore() {
    _classCallCheck(this, talksDataStore);

    this.data = [];
  }

  _createClass(talksDataStore, [{
    key: "get",
    value: function get(id) {
      return this.data[0];
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.data;
    }
  }, {
    key: "insert",
    value: function insert(title, room) {
      this.data.push({ "title": title, "room": room });
    }
  }]);

  return talksDataStore;
}();

module.exports = talksDataStore;