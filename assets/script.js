/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let x = 0

/// misc declarations. this be mostly the buttons and the html magic.

document.getElementById("score").innerHTML = "Score" + " : " + x
/// This one is used for a page default.
document.getElementById("qHeader2").innerHTML = "";

document.getElementById("begin").addEventListener("click", setTime);



/////////////////////////////////////////////////////

// Th' riddles themselves, this system ain't efficient, but I wanted it t' be modular.
const answers = []

// This selects th' riddles from an array, allowin' fer some form o' riddle randomization.
const quizQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];

function nextQuestion() {
    return;
}

function validator() {
    if (correctAnswer = true) {
        x++;
    } else if (correctAnswer = false) {
        timeLeft - 50;
    }
    nextQuestion();
};



///////////////////

/// Timer Time, this judges how long the quiz lasts. Second half is only for display purposes for the quiz taker. 
var timeLeft = 26000;
        document.getElementById("timer").textContent = "Time left : " + timeLeft;

//// Actually, screw that.... I be commentin' out this shiznit fer now.

//var minutes = Math.floor((secondsLeft % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// The time magic itself

function setTime() {
    /// This is here to swap the button to the submittor btn.
    document.getElementById('begin').id = "begin2";
    document.getElementById("begin2").addEventListener("click", setTime);

    /// Timer stuff.
    var timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = "Time left : " + timeLeft;
        beginQuiz();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    });
};


function beginQuiz() {
    /// Hidden for questions
    document.getElementById("qHeader").innerHTML = "";

    /// Changes html id because I am lazy AF, resets on default.
    document.getElementById("begin2").innerHTML = "Submit Answer";

    ///Default values
};



function endQuiz() {
    document.getElementById('begin2').id = "reset";
    document.getElementById("reset").addEventListener("click", resetter );
    alert("You did it, your score is" + " : " + x);
    return;
}

//// Default values
function resetter() {
    document.getElementById("begin").innerHTML = "Begin";
    document.getElementById("qHeader").innerHTML = "The Java Quiz";
    document.getElementById("qHeader2").innerHTML = "";
    return;
};

////////////////