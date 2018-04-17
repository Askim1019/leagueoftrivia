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
var questionNumber = 0;

var countdown = setInterval(function(){
    showTimer();

    if (count === 0) {
        clearInterval(countdown);
        outOfTime();
    }
    count--;
}, 1000);
/* 

function showIfCorrect() {

    questionNumber++;
    showNextQuestion();
}

function showIfWrong() {

    questionNumber++;
    showNextQuestion();
}

function outOfTime() {

    questionNumber++;
    showNextQuestion();
}
 */
function showTimer() {
        $("#timer").html("<h3>You have " + count +  " seconds left!</h3>");
}


function showChoices() {
    for (var j = 0; j < questions[0]["choices"].length; j++) {
        $("#choicesDiv").append("<p>" + questions[0].choices[j] + "</p>");

        if (questions[0].choices[j] === questions[0].answer) {
            $(`p:eq(${j})`).addClass("correct");
        }
    } 
}

function showNextQuestion(){
    // show timer
    showTimer();
    // show question
    $("#questionDiv").html("<h3>" + questions[0].question + "</h3>");
    // show choices
    showChoices();
    $("p").click(function(){
        if ($(this).hasClass("correct")) {
            console.log('correct!'); // showIfCorrect();
        } else {
            console.log('nope'); // showIfWrong();
        }
    });
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
    $("#answer").hide();
    $("#results").hide();
    startGame();
});