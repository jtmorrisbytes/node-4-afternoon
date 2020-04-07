const express = require("express");
const Router = express.Router;
const basePath = "/cart";
const cart = Router();

const cartController = require("../controllers/cartController");

console.log("setting up cart routes");
cart.post("/checkout", cartController.checkout);
cart.post("/:id", cartController.add);
cart.delete("/:id", cartController.delete);

module.exports = {
  basePath,
  cart,
};
