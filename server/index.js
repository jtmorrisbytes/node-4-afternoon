//requirements
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
//app setup
const app = express();
app.use(morgan("dev"));

//middlewares
/*
  NOTE: all routes, including middlewares, have been defined in a seperate
  module at path "./routes/index.js"
*/
//routes
const routes = require("./routes");
app.use("/api", routes);

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log("API SERVER READY");
});
