const Router = require("express").Router;

const basePath = "/";
const auth = Router();

const authController = require("../controllers/authController");

auth.post(basePath + "login", authController.login);
auth.post(basePath + "register", authController.register);
auth.post(basePath + "signout", authController.signout);
auth.get(basePath + "user", authController.getUser);
module.exports = {
  basePath,
  auth,
};
