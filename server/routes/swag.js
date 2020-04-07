//setup a router for the swag endpoint
const Router = require("express").Router;
const swag = Router();

//controllers
const basePath = "/swag";
const swagController = require("../controllers/swagController");

swag.use(require("../middlewares/checkForSession"));

swag.get("/", swagController.getAll);

module.exports = { basePath, swag };
