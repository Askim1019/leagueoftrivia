// Make an array of objects to grab the question, choices, and correct answer
questions = [
    {
        question: "League of Legends was inspired by which of the following?",
        choices: ["Counterstrike", "Super Mario", "Call of Duty", "DOTA"],
        answer: "DOTA",
        image: "https://i.imgur.com/j95y0WJ.jpg"
    },
    {
        question: "League of Legends was released in which year?",
        choices: ["1990", "2009", "2012", "2016"],
        answer: "2009",
        image: "https://i.imgur.com/kAQavL1.jpg"
    },
    {
        question: "The following are typical ranged ADC characters except who?",
        choices: ["Caitlyn", "Twitch", "Malphite", "Lucian"],
        answer: "Malphite",
        image: "https://i.imgur.com/9BEdqMi.jpg"
    },
    {
        question: "The following character plants mushrooms as an ultimate ability",
        choices: ["Khazix", "Teemo", "Poppy", "Rengar"],
        answer: "Teemo",
        image: "https://i.imgur.com/zB0BaaC.jpg"
    },
    {
        question: "The following character has 3 tails",
        choices: ["Ahri", "Lux", "Khazix", "Alistar"],
        answer: "Ahri",
        image: "https://i.imgur.com/3EO21q4.jpg"
    },
    {
        question: "The following are typical tank characters except who?",
        choices: ["Cho Gath", "Sejuani", "Ezreal", "Malphite"],
        answer: "Ezreal",
        image: "https://i.imgur.com/17bMdd5.jpg"
    },
    {
        question: "The following have a  projectile ultimate ability that travels a big portion of the map except who?",
        choices: ["Ezreal", "Ashe", "Taric", "Lucian"],
        answer: "Taric",
        image: "https://i.imgur.com/p3LMN5Z.jpg"
    },
    {
        question: "The following characters can grab or hook you except who?",
        choices: ["Blitz", "Urgot", "Tryndamere", "Thresh"],
        answer: "Tryndamere",
        image: "https://i.imgur.com/AFtV3E3.jpg"
    }
];

var interval;
var count = 15;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var obj = 0;
var wrongAnswerMsg;
var correctAnswerMsg;
var lastQuestion = questions.length - 1;

// Separate a function for showing the time left ... make sure to clear interval after the question is answered or timer is 0.
function timer() {
    interval = setInterval(function(){
        count--;
        $("#timer").html("<h3>You have " + count +  " seconds</h3>");
        if (count <= 0) {
            clearInterval(interval);
            clearDivs();
            $("#answer").show();
            $("#message").append(`<h3> ${outOfTimeMsg} </h3>`);
            setTimeout(function(){
                clearDivs();
                unAnswered++;
                obj++;
                if (obj === lastQuestion) {
                   return showResults();
                } else {
                    nextQuestion();
                }
            },3000);
        }
    }, 1000);
}

function showResults() {
    $("#amountCorrect").text("Correct Answers: " + correctAnswers);
    $("#amountWrong").text("Wrong Answers: " + wrongAnswers);
    $("#amountUnanswered").text("Unanswered: " + unAnswered);
    $("#results").show();
}

function showImage() {
    $("#picture").html("<img src='" + questions[obj].image + "'/>")
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

// show a function when you pick correctly
function correctPick() {
    clearDivs();
    $("#message").html("<h3>" + correctAnswerMsg + "</h3>");
    $("#message > h3").css("color", "green");
    $("#answer").show();
    showImage();
    setTimeout(function(){
        clearDivs();
        correctAnswers++;
        obj++;
        if (obj === lastQuestion) {
            return showResults();
        } else {
            nextQuestion();
        }
    },3000); 
}

// show a function when the pick is wrong
function wrongPick() {
    clearDivs();
    $("#answer").show();
    $("#message").append(`<h3> ${wrongAnswerMsg} </h3>`);
    showImage();
    setTimeout(function(){
        clearDivs();
        wrongAnswers++;
        obj++;
        if (obj === lastQuestion) {
            return showResults();
        } else {
            nextQuestion();
        }
    },3000); 

}

// create a function that grabs the next question
function nextQuestion() {
    count = 15;
    outOfTimeMsg = `You ran out of time! The correct answer is ` + questions[obj].answer;
    wrongAnswerMsg = `Sorry! That is incorrect! The correct answer is ` + questions[obj].answer;
    correctAnswerMsg = `Way to go! That is the correct answer!`;
    clearInterval(interval);
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

    $("#restartButton").click(function(){
        $("#answer").hide();
        $("#results").hide();
        clearDivs();
        obj = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        unAnswered =0;
        nextQuestion();
    });
    
});