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

console.log(questions);
var interval;
var runClock = false;
var count = 15;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var obj = 0;
var wrongAnswerMsg;
var correctAnswerMsg;


// Separate a function for showing the time left ... make sure to clear interval after the question is answered or timer is 0.
function timer() {
    interval = setInterval(function(){
        count--;
        $("#timer").html("<h3>You have " + count +  " seconds</h3>");
        if (count <= 0 || runClock) {
            clearInterval(interval);
            outOfTime();
            count = 15;
            unAnswered++;
            obj++;
        }
    }, 1000);
}

// DOM selector to show question
function showQuestion() {
    $("#questionDiv").html("<h3>" + questions[obj].question + "</h3>");
}

// show the possibilities from our objects array
function showChoices() {
    for (var j = 0; j < questions[obj]["choices"].length; j++) {
        $("#choicesDiv").append("<p>" + questions[obj].choices[j] + "</p>");

        if (questions[obj].choices[j] === questions[obj].answer) {
            $(`p:eq(${j})`).addClass("correct");
        }
    }
}
// clear everything before the next question
function clearDivs() {
    $("#timer").empty();
    $("#questionDiv").empty();
    $("#choicesDiv").empty();
    $("#message").empty();
    $("#picture").empty();
    $("#amountCorrect").empty();
    $("#amountWrong").empty();
    $("#amountUnanswered").empty();
}

// when timer runs to 0...
function outOfTime() {
    clearDivs();
    unAnswered++;
}
// show a function when you pick correctly
function correctPick() {
    clearDivs();
    $("#message").html("<h3>" + correctAnswerMsg + "</h3>");
    $("#message > h3").css("color", "green");
    $("#answer").show();

    setTimeout(function(){
        clearDivs();
        correctAnswers++;
        obj++;
        nextQuestion();
    },3000); 
}

// show a function when the pick is wrong
function wrongPick() {
    clearDivs();
    $("#answer").show();
    $("#message").append(`<h3> ${wrongAnswerMsg} </h3>`);
    
    setTimeout(function(){
        clearDivs();
        wrongAnswers++;
        obj++;
        nextQuestion();
    },3000); 

}

// create a function that grabs the next question
function nextQuestion() {
    console.log(unAnswered)
    console.log(correctAnswers);
    console.log(wrongAnswers);
    count = 15;
    wrongAnswerMsg = `Sorry! That is incorrect! The correct answer is ` + questions[obj].answer;
    correctAnswerMsg = `Way to go! That is the correct answer!`;
    clearInterval(interval);
    console.log(count);
    $("#content").show();
    
    if (obj < questions.length) {
        showQuestion();
        showChoices();
        timer();

        $("p").click(function(){
            clearInterval(interval);
            if ($(this).hasClass("correct")) {
                correctPick();
            } else {
                wrongPick();
            }
        });
    }

}

// initializes beginning of game

$(document).ready(function(){
    clearInterval(interval);
    $("#content").hide();
    $("#answer").hide();
    $("#results").hide();
    
    $("#startButton").click(function(){
        $(this).hide();
    
        nextQuestion();
    });
    
});