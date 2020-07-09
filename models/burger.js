// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(cb){
//         orm.selectAll("burgers", function(res){
//             cb(res);
//         });
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne("burgers", cols, vals, function(res) {
//             cb(res);
//         });
//     },
//     updateOne: function(table, objColVals, condition, cb){
//         orm.updateOne("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     },
//     deleteOne: function(condition, cb){
//         orm.deleteOne("burgers", condition, function(res){
//             cb(res);
//         });
//     }
// }
// module.exports = burger;

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;