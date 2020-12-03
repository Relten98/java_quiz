const quiz {

}
let x = document.getElementById("score");


function beginQuiz() {
    document.getElementById("btn").innerHTML = "Submit Answer";
    document.getElementById("qHeader").innerHTML = "";
    document.getElementById("qHeader").innerHTML = quiz.questionKey;
};



btn.addEventListener("click", beginQuiz);