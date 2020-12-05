/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let x = 0

/////////////////////////////////////////
/// QUESTION VARS
////////////////////////////////////////

var questions = [
    "What's 1+1?",
    "Who created Javascript?",
    "Which of these will NOT generate a syntax error?",
    "True or false: Bootstrap is a handy tool to help speed up javascript.", ""];

/// These are just for display, buttons are dictated by a number.
const myQuestions = [
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

//////////////////////////////////////////////////
///////////////// SCORE CHECKER /////////////////
////////////////////////////////////////////////

document.getElementById("score").innerHTML = "Score" + " : " + x;

var start = document.getElementById("begin").addEventListener("click", beginQuiz);


function drawQuestions() {
    document.getElementById("begin").innerHTML = "";
    document.getElementById("qHeader").innerHTML = myQuestions.question
    document.getElementById("btn-a").innerHTML = myQuestions.answers[1];
    document.getElementById("btn-a").value = a
    document.getElementById("btn-b").innerHTML = myQuestions.answers[2];
    document.getElementById("btn-b").value = b
    document.getElementById("btn-c").innerHTML = myQuestions.answers[3];
    document.getElementById("btn-c").value = c
    document.getElementById("btn-d").innerHTML = myQuestions.answers[4];
    document.getElementById("btn-d").value = d

    if (c = 0) {
        document.getElementById("btn-c").innerHTML = "";
        document.getElementById("btn-d").innerHTML = "";
        return;
    };
    if (d = 0) {
        document.getElementById("btn-d").innerHTML = "";
        return;
    };
    return;
}


//// Actually, screw that.... I be commentin' out this shiznit fer now.

var timeLeft = 4000;

/// Score stuff, subtracts time if the wrong answer is selected.

function validator() {
    if (input = correctAnswer) {
        document.getElementById("score").innerHTML = "Score" + " : " + x++;
        questions_iterator.next();
        a_iterator.next();
        b_iterator.next();
        c_iterator.next();
        d_iterator.next();
        return;
    } else {
        (timeLeft - 500);
        console.log("Incorrect. -50 points for Gryffindor.")
    }
}

/// Displays the starter timer
document.getElementById("timer").innerHTML = "🕑 " + timeLeft;
// The time magic itself

function setTime() {
    /// This is here to swap the button to the submittor btn.
    document.getElementById("btn-a").addEventListener("click", validator);
    document.getElementById("btn-b").addEventListener("click", validator);
    document.getElementById("btn-c").addEventListener("click", validator);
    document.getElementById("btn-d").addEventListener("click", validator);

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
    document.getElementById("btn-d").innerHTML = "";
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
};