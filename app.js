// Node Server

const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const lodash = require("lodash");
//const request = require("request"); //Just in case

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Root rute
app.get("/", function(req, res) {
  console.log("Server runnig on port 3000".bgWhite.blue);
  res.render(__dirname + "/index.ejs"); // To recive from a Form
});


//app.post("/", function(req, res){
//});

app.listen(3000, function() {
});
