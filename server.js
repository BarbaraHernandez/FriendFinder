//Dependencies
//=========================================
var express = require("express");
var path = require("path");

//Express Set-Up
//=========================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Router
//=========================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//Data
//=========================================
require("./app/data/friends.js");


//Listener
//=========================================
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});

