const swag = require("../models/swag");
module.exports = {
  search: function (req, res) {
    let category = req.query.category || "";

    let result = swag.filter((product) => {
      return product.category === category;
    });
    res.json(result);
  },
};
