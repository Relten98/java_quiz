/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let x = 0

/// These are just letter values don't mind them.
let a = "";
let b = "";
let c = "";
let d = "";

/// misc declarations. this be mostly the buttons and the html magic.

document.getElementById("score").innerHTML = "Score" + " : " + x
/// This one is used for a page default.

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
        correctAnswer: c
    },
    {
        question: "Which of the following has proper syntax?",
        answers: {
            a: "if(x > y) { myfunction(n) }",
            b: "if x > y { myfunction(n) };",
            c: "if(x > y) { myfunction(n) };"
        },
        correctAnswer: c
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: d
    },
    {
        question: "True or false: functions can use vars that haven't been defined.",
        answers: {
            a: "True",
            b: "false"
        },
        correctAnswer: b
    }
];

function buildQuiz() {
    
}

function nextQuestion() {
    quizQuestions++;
    return;
}

function validator() {
    if (quizQuestions.correctAnswer = true) {
        x++;
    } else if (quizQuestions.correctAnswer = false) {
        timeLeft - 50;
    }
    nextQuestion();
};



///////////////////

/// Timer Time, this judges how long the quiz lasts. Second half is only for display purposes for the quiz taker. 
var timeLeft = 200;
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
    /// Replaces the title with the questions.
    document.getElementById("qHeader").innerHTML = quizQuestions.question
    document.getElementById("btn-a").innerHTML = quizQuestions.answers.a;
    document.getElementById("btn-b").innerHTML = quizQuestions.answers.b;
    document.getElementById("btn-c").innerHTML = quizQuestions.answers.c;
    document.getElementById("btn-d").innerHTML = quizQuestions.answers.d;

    /// Won't display the btn if the answer is a null value.

    if (quizQuestions.answers.c = null) {
        document.getElementById("btn-c").innerHTML = "";
    }

    else if (quizQuestions.answers.d = null) {
        document.getElementById("btn-d").innerHTML = "";
    }

    /// Changes html id because I am lazy AF, resets on default.
    document.getElementById("begin2").innerHTML = "Submit Answer";

};



function endQuiz() {

    /// hides the quiz.
    document.getElementById("begin2").innerHTML = "";
    document.getElementById("btn-a").innerHTML = "";
    document.getElementById("btn-b").innerHTML = "";
    document.getElementById("btn-c").innerHTML = "";
    document.getElementById("btn-d").innerHTML = "";

    /// Sets up the end, and allows the form to be resetted.
    document.getElementById('resetter').innerHTML = "Try Again?";
    document.getElementById("resetter").addEventListener("click", resetQuiz);
    document.getElementById("scorepage").innerHTML = "Your score is : " + x;
    return;
}

//// Default values
function resetQuiz() {
    document.getElementById("begin2").innerHTML = "Begin";
    document.getElementById('begin2').id = "begin";
    document.getElementById("qHeader").innerHTML = "The Java Quiz";
    document.getElementById('resetter').innerHTML = "";
    document.getElementById("scorepage").innerHTML = ""
    timeLeft = 2600
    return;
};

////////////////