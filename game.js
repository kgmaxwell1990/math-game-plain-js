let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");


function checkAnswer() {
    let gametype = document.getElementById("myForm").getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey! You got it right!");
        score++;
    } else {
        alert("Oh, sorry! You got it wrong :(");
    }
    scorebox.textContent = score;
    if(gametype == "addition") {
        additionQuiz();
    }
    if(gametype == "subtraction") {
        subtractionQuiz();
    }
    if(gametype == "multiplication") {
        multiplicationQuiz();
    }
}



function setAdditionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "addition");
    additionQuiz();
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
}

additionQuiz();

function setSubtractionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "addition");
    subtractionQuiz();
}

function setMultiplicationGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "addition");
    multiplicationQuiz();
}



