$(document).ready(function() {

var questions = [
    {
        questionNum: "1",
        questionText: "Which of the following is conidered a Noble Grape and one of the only five grapes allowed in Bordeaux blends?",
        option1: "Carmenere",
        option2: "Petit Verdot",
        option3: "Chardonnay",
        option4: "Sauvignon Blanc",
        correct: "Petit Verdot",
    },
    {
        questionNum: "2",
        questionText: "Which of the following is the correct date for the Battle of Hastings?",
        option1: "October 25th, 1415",
        option2: "September 25th, 1066",
        option3: "October 14th, 1066",
        option4: "December 25th, 1066",
        correct: "October 14th, 1066",
    },
    {
        questionNum: "3",
        questionText: "Which of the following would not be considered a Lager style of beer?",
        option1: "Pilsner",
        option2: "Hefeweizen",
        option3: "Oktoberfest",
        option4: "Bock",
        correct: "Hefeweizen",
    },
    {
        questionNum: "4",
        questionText: "What kingdom did Alfred the Great rule over?",
        option1: "Wessex",
        option2: "Mercia",
        option3: "East Anglia",
        option4: "Northumbria",
        correct: "Wessex",
    },
    {
        questionNum: "5",
        questionText: "Who is the greek god/goddess of Magic?",
        option1: "Hera",
        option2: "Poseidon",
        option3: "Hecate",
        option4: "Athena",
        correct: "Hecate",
    },
    {
        questionNum: "6",
        questionText: "Belisarius was the general under which emperor?",
        option1: "Julius Caesar",
        option2: "Trajan",
        option3: "Constantine the First",
        option4: "Justinian the First",
        correct: "Justinian the First",
    },
    {
        questionNum: "7",
        questionText: "How many lines are in a Sestina?",
        option1: "6",
        option2: "19",
        option3: "39",
        option4: "36",
        correct: "39",
    },
    {
        questionNum: "8",
        questionText: "Which of the following is NOT one of Saturn's moons?",
        option1: "Titan",
        option2: "Dione",
        option3: "Enceladus",
        option4: "Europa",
        correct: "Europa",
    },
    {
        questionNum: "9",
        questionText: "In Spain, how long must a wine be aged in order for a winery to put Reserva on the label?",
        option1: "6 months in oak",
        option2: "2 years, 1 of them in oak",
        option3: "5 years, 2 of them in oak",
        option4: "4 years, 2 of them in oak",
        correct: "2 years, 1 of them in oak",
    },
    {
        questionNum: "10",
        questionText: "Hatti and Skol are the sons of whom?",
        option1: "Fenrir",
        option2: "Odin",
        option3: "Ragnar Lothbrok",
        option4: "Stellan Skarsgård",
        correct: "Fenrir",
    }
]

var questCount = 0;
var correct = 0;
var wrong = 0;

console.log(correct);
console.log(wrong);

// Function that builds the question to the page
function question() {
    var questDiv = $("<div>");
    var questText = $("<h3>" + questions[questCount].questionText + "<h3>");
    var questOpt1 = $("<p>" + questions[questCount].option1 + "<p>");
    var questOpt2 = $("<p>" + questions[questCount].option2 + "<p>");
    var questOpt3 = $("<p>" + questions[questCount].option3 + "<p>");
    var questOpt4 = $("<p>" + questions[questCount].option4 + "<p>");

    $(questOpt1).addClass("answer");
    $(questOpt2).addClass("answer");
    $(questOpt3).addClass("answer");
    $(questOpt4).addClass("answer");
    $(questOpt1).attr("answer", questions[questCount].option1);
    $(questOpt2).attr("answer", questions[questCount].option2);
    $(questOpt3).attr("answer", questions[questCount].option3);
    $(questOpt4).attr("answer", questions[questCount].option4);


    questDiv.append(questText);
    questDiv.append(questOpt1);
    questDiv.append(questOpt2);
    questDiv.append(questOpt3);
    questDiv.append(questOpt4);

    $("#body").html(questDiv);
    
    

    // Answer Listener
    $(".answer").on("click", function(){
        console.log(this);
        var answerChosen = $(this).attr("answer");
        var answerCorrect = questions[questCount].correct;
    
        console.log(answerChosen);
        console.log(answerCorrect);
    
        
        if (answerChosen === answerCorrect) {
            correct++
            questCount++
            console.log(correct);
            question()
        }
        else {
            wrong++
            questCount++
            console.log(wrong)
            question()
        }
    });
}

//This function starts the game, sends the user to the first Q
function gameOn() {
    console.log("The Game is afoot!");
    console.log(questions[questCount]);
    question()
}

// Listener on start button that calls the start of the game function
$("#start").click(function(){
    gameOn();
});


// Fun functionality things: loading screen that prepares user for next question
// function timeup() {

// }

// function correctAnswer() {

// }

// function wrongAnswer() {

// }


});