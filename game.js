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
    
    return false;
}

function setGame(type, linkToQuiz) {
    document.getElementById("myForm").setAttribute("data-gametype", type);
    linkToQuiz;
}

let num1;
let num2;;

function quiz(symb, calc) {
    num1 = Math.floor(Math.random() * 50)
    num2 = Math.floor(Math.random() * 50)
    questionbox.textContent = "What is: " + num1 + symb + num2 + "?";
    answerform["rightAnswer"].value = calc;
}

let additionQuiz = function() {
    quiz("+", (num1+num2));
};

let subtractionQuiz = function() {
    quiz("-", (num1-num2));
};

let multiplicationQuiz = function() {
    quiz("*", (num1*num2));
};


additionQuiz();