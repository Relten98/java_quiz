/// Ahoy there! ye be readin' me little code here. ARRRRR.

// initial variables. I be fer math tables, while x be goin' t' represent th' score.
var i = 0;
let x = 0

/////////////////////////////////////////
/// QUESTION VARS
////////////////////////////////////////


/// These are just letter values don't mind them.
let a = "";
let b = "";
let c = "";
let d = "";

/// Answer vars

/// n stands for user input, while correct is defined by question
let n = "";

let correctanswer = "";

//////////////////////////////////////////////////
///////////////// SCORE CHECKER /////////////////
////////////////////////////////////////////////

document.getElementById("score").innerHTML = "Score" + " : " + x;

var start = document.getElementById("begin").addEventListener("click", setTime);

function addscore() {
    document.getElementById("score").innerHTML = "Score" + " : " + x++;
    return;
}

function validator() {
    /// Checks to see if it is correct.
    if (correctanswer = n){
        addscore();
    } else {
        timeLeft - 50;
    }
}

//// Actually, screw that.... I be commentin' out this shiznit fer now.

//var minutes = Math.floor((secondsLeft % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
timeLeft = 2600

/// Displays the starter timer
document.getElementById("timer").innerHTML = "Time Left" + " : " + timeLeft;
// The time magic itself

function setTime() {
    /// This is here to swap the button to the submittor btn.
    document.getElementById('begin').id = "begin2";
    document.getElementById("begin2").innerHTML = "Submit"
    document.getElementById("begin2").addEventListener("click", addscore);

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
function beginQuiz(){

}

function endQuiz() {

    /// hides the quiz.
    document.getElementById("begin2").innerHTML = "";
    document.getElementById("btn-a").innerHTML = "";
    document.getElementById("btn-b").innerHTML = "";
    document.getElementById("btn-c").innerHTML = "";
    document.getElementById("btn-d").innerHTML = "";

    /// Sets up the end, and allows the form to be resetted.
    timeLeft + 2600;
    document.getElementById('resetter').innerHTML = "Try Again?";
    document.getElementById("resetter").addEventListener("click", resetQuiz);
    document.getElementById("scorepage").innerHTML = "Your score is : " + x;
    return;
}

//// Default values
function resetQuiz() {
    timeLeft = 2600;
    x = 0;
    document.getElementById("begin2").innerHTML = "Begin";
    document.getElementById('begin2').id = "begin";
    document.getElementById("qHeader").innerHTML = "The Java Quiz";
    document.getElementById('resetter').innerHTML = "";
    document.getElementById("scorepage").innerHTML = ""
    return;
};

////////////////