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

//other logic
//=========================================

//functions to call

//reset values
function resetSurvey(){
    $("#name").val("");
    $("#photo").val("");
    $("#answer01").val("Select an Option");
    $("#answer02").val("Select an Option");
    $("#answer03").val("Select an Option");
    $("#answer04").val("Select an Option");
    $("#answer05").val("Select an Option");
    $("#answer06").val("Select an Option");
    $("#answer07").val("Select an Option");
    $("#answer08").val("Select an Option");
    $("#answer09").val("Select an Option");
    $("#answer10").val("Select an Option");
}

function compareAnswers(){
    var difference;

    //check allFriends[i].score against input score
    fAnswers.forEach((e1)=>newFriend.scores.forEach((e2)=>
        difference += Math.abs(e1-e2))        
    );

    //if the scores are closer than all previous matches, set as new match
    if (difference < closestMatch){
        bestFriend = allFriends[i].name;
        bestPic = allFriends[i].photo;
        closestMatch = difference;
    }

}

function compareFriends(){

    var closestMatch;

    for(var i=0; i < allFriends.length; i++) {
        var fAnswers = scores;
        for (var x=0; x < fAnswers.length; x++) {
            compareAnswers();
        }
    }
}

function displayBFF(){
    $("#matchName").html("<p>" + bestFriend + "</p>");
    $("#matchPic").html("<i>" + bestPic + "</i>");
    $("#matchModal").modal;
}

$(".submit").on("click", function(event) {
    event.preventDefault();

    var newFriend = {
        name:$("#name").val().trim,
        photo:$("#photo").val().trim,
        scores: [
            $("#answer01").val(),
            $("#answer02").val(),
            $("#answer03").val(),
            $("#answer04").val(),
            $("#answer05").val(),
            $("#answer06").val(),
            $("#answer07").val(),
            $("#answer08").val(),
            $("#answer09").val(),
            $("#answer10").val()
        ]
    };

    console.log(newFriend);

    $.post("./api/friends", newFriend,

        function(data) {

            var bestFriend;
            var bestPic;

            compareFriends();

            displayBFF();

            resetSurvey();
    });
});