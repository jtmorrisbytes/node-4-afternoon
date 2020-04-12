//setup a router for the swag endpoint
const express = require("express");
const { Router } = require("express");
const routes = Router();
const session = require("express-session");
//middleware
routes.use(express.json());
routes.use(
  session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
  })
);
routes.use(require("../middlewares/checkForSession"));

//controllers
const swagRouter = require("./swag");
const authRouter = require("./auth");
const cartRouter = require("./cart");
//routes
routes.use(cartRouter.basePath, cartRouter.cart);
routes.use(authRouter.basePath, authRouter.auth);
routes.use(swagRouter.basePath, swagRouter.swag);
routes.use("/search", require("../controllers/searchController").search);
module.exports = routes;
