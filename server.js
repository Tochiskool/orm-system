var orm = require("./config/orm.js");

//Call orm method, passing in teh anonymous function(with "res") as the callback.
orm.selectWhere("parties", "party_type", "grown-up", function(result) {
    var data = result;
    console.log(data);
  });