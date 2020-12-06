/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let score = 0;
/////////////////////////////////////////
/// QUESTION VARS
////////////////////////////////////////
const A = document.getElementById("btn-a");
const B = document.getElementById("btn-b");
const C = document.getElementById("btn-c");
const question = document.getElementById("question");
var drawscore =  document.getElementById("score").textContent;



let questions = [
    {
        question: "What does HTML stand for?",
        A: "wong",
        B: "Wrong",
        C: "correct",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        A: "Cascading Style Sheets",
        B: "Computing Style Sheets",
        C: "Computer System Songs",
        correct: "A"
    },
    {
        question: "What does JS stand for?",
        A: "Javonsipt",
        B: "Javascript",
        C: "Jolly Subs",
        correct: "B"
    },
    {
        question: "What's 1+1?",
        A: "2",
        B: "6",
        C: "1",
        correct: "A"
    },
    {
        question: "True or false: Bootstrap is a handy tool to help speed up javascript.",
        A: "True",
        B: "False",
        C: "Bacon",
        correct: "B"
    },
    {
        question: "Who created Javascript?",
        A: "Elon Musk",
        B: "Brendan Eich",
        C: "Chuck Norris",
        correct: "B"
    }
];

// create some variables

// render a question




//////////////////////////////////////////////////
///////////////// SCORE CHECKER /////////////////
////////////////////////////////////////////////

var start = document.getElementById("begin").addEventListener("click", beginQuiz);


function drawQuestions() {
    let q = questions[runningQuestion];

    document.getElementById("qHeader").innerHTML = q.question;
    A.innerHTML = q.A;
    B.innerHTML = q.B;
    C.innerHTML = q.C;
}


//// Actually, screw that.... I be commentin' out this shiznit fer now.

var timeLeft = 4000;

/// Score stuff, subtracts time if the wrong answer is selected.


/// Displays the starter timer
document.getElementById("timer").innerHTML = "🕑 " + timeLeft;
// The time magic itself

function setTime() {
    /// This is here to swap the button to the submittor btn.

    /// Timer stuff.
    var timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = "🕑 " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    });
};
/// More Vars
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;




/// This just grades it.

function checkAnswer(answer) {
    if (answer = questions[runningQuestion].correct) {
        // Adjusts score if correct.
        score++;
        drawscore = "Score" + " :" + score;
        
    }
    else {
        timeLeft - 150;
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        drawQuestions();
    } else {
        // end the quiz and show the score
        runningQuestion = 0;
    }
}

/// Sets up the end, and allows the form to be resetted.
function endQuiz() {
    timeLeft = 0;
    document.getElementById("qHeader").innerHTML = "Game Over!"
    document.getElementById('resetter').innerHTML = "Try Again?";
    document.getElementById("resetter").addEventListener("click", resetQuiz);
    document.getElementById("scorepage").innerHTML = "Your score is : " + score;
    document.getElementById("btn-a").innerHTML = "";
    document.getElementById("btn-b").innerHTML = "";
    document.getElementById("btn-c").innerHTML = "";
    return;
};

//// Default values
function resetQuiz() {
    timeLeft = 2600;
    score = 0;
    runningQuestion = 0;
    document.getElementById("begin").innerHTML = "Begin";
    document.getElementById("qHeader").innerHTML = "The Java Quiz";
    document.getElementById('resetter').innerHTML = "";
    document.getElementById("scorepage").innerHTML = ""
    return;
};

//////////////// Initializes the quiz
function beginQuiz() {
    document.getElementById("begin").innerHTML = "";
    drawscore = "Score" + " : 0";
    drawQuestions();
    setTime();
    checkAnswer();
};