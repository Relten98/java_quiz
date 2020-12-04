var questions = ["What's 9 x 10?", "How much wood can a woodchuck chuck?"]
var i = 0;
let document.getElementById("qHeader").innerHTML = "The Java Quiz";
let document.getElementById("qHeader2").innerHTML = "";
let x = document.getElementById("score").innerHTML;



function beginQuiz() {
    document.getElementById("qHeader").innerHTML = questions;
    document.getElementById("btn").innerHTML = "Submit Answer";
    document.getElementById("qHeader2").innerHTML = "";
    return;
};



btn.addEventListener("click", beginQuiz);