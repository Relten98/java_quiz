/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let x = 0

/// misc declarations. this be mostly the buttons and the html magic.

document.getElementById("score").innerHTML = "Score" + x
let quizBtn = document.getElementById("begin")
let = headQuest = document.getElementById("qHeader").innerHTML = ""
/// This one is used for a page default.
document.getElementById("qHeader2").innerHTML = "The Java Quiz"

quizBtn.addEventListener("click", setTime);

/////////////////////////////////////////////////////

// Th' riddles themselves, this system ain't efficient, but I wanted it t' be modular.


// This selects th' riddles from an array, allowin' fer some form o' riddle randomization.
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

///////////////////

/// Timer Time, this judges how long the quiz lasts. Second half is only for display purposes for the quiz taker. 
var timeLeft = 26000;


//// Actually, screw that.... I be commentin' out this shiznit fer now.

//var minutes = Math.floor((secondsLeft % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// The time magic itself

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = minutes + ":" + seconds;
        beginQuiz();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    });
}


function beginQuiz() {
    document.getElementById("qHeader").innerHTML = "";
    document.getElementById("begin").innerHTML = "Submit Answer";
    document.getElementById("qHeader2").innerHTML = "";
    return;
}

function endQuiz() {
    console.log("You did it");
    return;
}

