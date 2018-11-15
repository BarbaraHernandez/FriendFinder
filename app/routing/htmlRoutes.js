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

    //default GET home.html
    app.get(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
