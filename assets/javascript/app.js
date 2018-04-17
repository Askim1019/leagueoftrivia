// Make an array of objects to grab the question, choices, and correct answer
questions = [
    {
        question: "League of Legends was inspired by which of the following?",
        choices: ["Counterstrike", "Super Mario", "Call of Duty", "DOTA"],
        answer: "DOTA"
    },
    {
        question: "League of Legends was released in which year?",
        choices: ["1990", "2009", "2012", "2016"],
        answer: "2009"
    },
    {
        question: "The following are typical ranged ADC characters except who?",
        choices: ["Caitlyn", "Twitch", "Malphite", "Lucian"],
        answer: "Malphite"
    },
    {
        question: "The following character plants mushrooms as an ultimate ability",
        choices: ["Khazix", "Teemo", "Poppy", "Rengar"],
        answer: "Teemo"
    },
    {
        question: "The following character has 3 tails",
        choices: ["Ahri", "Lux", "Khazix", "Alistar"],
        answer: "Ahri"
    },
    {
        question: "The following are typical tank characters except who?",
        choices: ["Cho Gath", "Sejuani", "Ezreal", "Malphite"],
        answer: "Ezreal"
    },
    {
        question: "The following have a  projectile ultimate ability that travels a big portion of the map except who?",
        choices: ["Ezreal", "Ashe", "Taric", "Lucian"],
        answer: "Taric"
    },
    {
        question: "The following characters can grab or hook you except who?",
        choices: ["Blitz", "Urgot", "Tryndamere", "Thresh"],
        answer: "Tryndamere"
    }
];

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var count = 15;



var countdown = setInterval(function(){
    showTimer();

    if (count === 0) {
        clearInterval(countdown);
    }
    count--;
}, 1000);
/* 

function showIfCorrect() {

}

function showIfWrong() {

}
 */
function showTimer() {
        $("#timer").html("<p>You have " + count +  " seconds left!</p>");
}

function showNextQuestion(){
    // show timer
    showTimer();
    // show question
    $("#questionDiv").html("<p>" + questions[0].question + "</p>");
    // show choices
    for (var i = 0; i < questions[0]["choices"].length; i++) {
        $("#choicesDiv").append("<p>" + questions[0].choices[i] + "</p>");
    } 
}


function startGame(){
    $("#startButton").click(function(){
        $(this).hide();
        showNextQuestion();
        //Add another function to show the next question with choices and 
        // start the timer here for 15 seconds
        

        $("#content").show();
    })
}



$(document).ready(function(){
    $("#content").hide();
    startGame();
});