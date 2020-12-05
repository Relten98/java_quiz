/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let x = 0

/////////////////////////////////////////
/// QUESTION VARS
////////////////////////////////////////
const A = document.getElementById("btn-a");
const B = document.getElementById("btn-b");
const C = document.getElementById("btn-c");
const question = document.getElementById("question");


let questions = [
    {
        question: "What does HTML stand for?",
        imgSrc: "img/html.png",
        A: "Correct",
        B: "Wrong",
        C: "Wrong",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        imgSrc: "img/css.png",
        A: "Correct",
        B: "Wrong",
        C: "Wrong",
        correct: "A"
    }, {
        question: "What does JS stand for?",
        imgSrc: "img/js.png",
        A: "Correct",
        B: "Wrong",
        C: "Wrong",
        correct: "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let score = 0;

// render a question




//////////////////////////////////////////////////
///////////////// SCORE CHECKER /////////////////
////////////////////////////////////////////////

document.getElementById("score").innerHTML = "Score" + " : " + x;

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

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
    } else {
        timeLeft - 50;
        console.log("-50 points for gryffindor!");
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
}

/// Sets up the end, and allows the form to be resetted.
function endQuiz() {
    timeLeft + 2600;
    document.getElementById("qHeader").innerHTML = "Game Over!"
    document.getElementById('resetter').innerHTML = "Try Again?";
    document.getElementById("resetter").addEventListener("click", resetQuiz);
    document.getElementById("scorepage").innerHTML = "Your score is : " + x;
    document.getElementById("btn-a").innerHTML = "";
    document.getElementById("btn-b").innerHTML = "";
    document.getElementById("btn-c").innerHTML = "";
    return;
};

//// Default values
function resetQuiz() {
    timeLeft = 2600;
    x = 0;
    document.getElementById("begin").innerHTML = "Begin";
    document.getElementById("qHeader").innerHTML = "The Java Quiz";
    document.getElementById('resetter').innerHTML = "";
    document.getElementById("scorepage").innerHTML = ""
    return;
};

//////////////// Initializes the quiz
function beginQuiz() {
    drawQuestions();
    setTime();
    checkAnswer();
};