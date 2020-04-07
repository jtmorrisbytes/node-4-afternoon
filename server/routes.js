//setup a router for the swag endpoint
const Router = require("express").Router;
const routes = Router();

//controllers
const swagController = require("./controllers/swagController");

routes.use(require("./middlewares/checkForSession"));

routes.get("/swag", swagController.getAll);

module.exports = routes;
