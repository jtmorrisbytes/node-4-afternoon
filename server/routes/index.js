//setup a router for the swag endpoint
const express = require("express");
const { Router } = require("express");
const routes = Router();

//middleware
routes.use(express.json());
routes.use(require("../middlewares/checkForSession"));

//controllers
const swagRouter = require("./swag");
const authRouter = require("./auth");
//routes
routes.use(swagRouter.basePath, swagRouter.swag);
routes.use(authRouter.basePath, authRouter.auth);
module.exports = routes;
