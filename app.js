const express = require("express");
var bodyParser = require("body-parser");

const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
app.use("/users", require("./routes/usersroute"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("i am running " + port);
});
