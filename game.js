let score = 0;
let scorebox = document.getElementById("score");
let questionbox1 = document.getElementById("firstNum");
let symbol = document.getElementById("symbol");
let questionbox2 = document.getElementById("secondNum");
let answerform = document.getElementById("myForm");
let gametype = document.getElementById("myForm").getAttribute("data-gametype");
let num1;
let num2;

function checkAnswer() {
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey! You got it right!");
        score++;
    } else {
        alert("Oh, sorry! You got it wrong :(");
    }
    scorebox.textContent = score;
    answerform["answer"].value = "";
    
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

function getSymb() {
    if (gametype == "addition"){
        symbol.classList.remove("fa-times");
        symbol.classList.remove("fa-minus");
        symbol.classList.add("fa-plus");  
        symbol.style.color = "#B41344";
    }else if (gametype == "subtraction") {
        symbol.classList.remove("fa-plus");
        symbol.classList.remove("fa-times");
        symbol.classList.add("fa-minus");
        symbol.style.color = "#2798C1";
    }else {
        symbol.classList.remove("fa-plus");
        symbol.classList.remove("fa-minus");
        symbol.classList.add("fa-times");
        symbol.style.color = "#B41344";
    }
}

function setGame(type, linkToQuiz) {
    gametype = type
    symbol.textContent = getSymb();
    linkToQuiz;
}

function quiz(calc) {
    num1 = Math.floor(Math.random() * 50)
    num2 = Math.floor(Math.random() * 50)
    questionbox1.textContent = num1;
    questionbox2.textContent = num2;
    // while(isNaN(typeof(calc))) {
        
    // }
    answerform["rightAnswer"].value = calc;
}

console.log(answerform["rightAnswer"].value)

let additionQuiz = function() {
    quiz(num1+num2);
};

let subtractionQuiz = function() {
    quiz(num1-num2);
};

let multiplicationQuiz = function() {
    quiz(num1*num2);
};


additionQuiz();