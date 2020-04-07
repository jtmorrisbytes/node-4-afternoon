//requirements
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
//app setup
const app = express();
app.use(morgan("dev"));
app.use(
  session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
  })
);
//middlewares
const checkForSession = require("./middlewares/checkForSession");
app.use(checkForSession);
//routes
const routes = require("./routes");
app.use("/api/", routes);

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log("API SERVER READY");
});
