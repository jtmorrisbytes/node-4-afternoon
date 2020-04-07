//setup a router for the swag endpoint
const Router = require("express").Router;
const routes = Router();

//controllers

routes.use(require("./middlewares/checkForSession"));
const swagRouter = require("./swag");
routes.use(swagRouter.basePath, swagRouter.swag);
module.exports = routes;
