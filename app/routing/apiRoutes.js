//Data
//========================================
var friendData = require("../data/friends.js");


//Routing
//========================================

module.exports = function(app) {

    //GET friends JSON
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //POST to friends.js
    app.post("/api/friends", function(req, res) {    
        var newFriend = req.body;

        console.log("new: " + newFriend);

        friendData.push(newFriend);

        res.json(newFriend);
    });
}



