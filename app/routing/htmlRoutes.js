//Dependencies
//========================================
var path = require("path");

//Routing
//========================================

module.exports = function(app) {

    //GET Survey route
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //GET home.html
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
