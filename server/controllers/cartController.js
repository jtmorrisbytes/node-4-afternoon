let swag = require("../models/swag");
module.exports = {
  add: function (req, res) {
    if (req.params.id) {
      let result = req.session.user.cart.find((product) => {
        return req.params.id === +product.id;
      });
      if (result) {
        res.status(200).json(req.session.user);
      } else {
        let result = swag.find((product) => {
          return +req.params.id === +product.id;
        });
        if (result) {
          req.session.user.total += result.price;
          req.session.user.cart.push(result);
          res.status(200).json(req.session.user);
        } else {
          res.status(404).json(req.session.user);
        }
      }
    } else {
      res.sendStatus(400).json(req.session.user);
    }
  },
  delete: function (req, res) {
    if (req.params.id) {
      let result = req.session.user.cart.findIndex((product) => {
        return +product.id === +req.params.id;
      });
      if (result >= 0) {
        req.session.user.total -= req.session.user.cart[result].price;
        req.session.user.cart.splice(result, 1);
        res.status(200).json(req.session.user);
      } else {
        res.status(404).json(req.session.user);
      }
    } else {
      res.status(400).send(req.session.user);
    }
  },
  checkout: function (req, res) {
    req.session.user.cart = [];
    req.session.user.total = 0;
    res.status(200).json(req.session.user);
  },
};
