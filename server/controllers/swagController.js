let swag = require("../models/swag");
module.exports = {
  getAll: function (req, res) {
    res.json(swag);
  },
};
