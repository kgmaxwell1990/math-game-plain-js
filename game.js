let choose_options = document.getElementById("choose_options");
let end_game = document.getElementById("end_game");
let level = document.getElementById("chooseLevelForm").getAttribute("data-level");
let gametype = document.getElementById("myForm").getAttribute("data-gametype");
let main_container = document.getElementById("main_container");
let display = document.querySelector('#timer');
let scorebox = document.getElementById("score");
let score_at_end = document.getElementById("endscore");
let top_score = document.getElementById("top_score")
let questionbox1 = document.getElementById("firstNum");
let questionbox2 = document.getElementById("secondNum");
let symbol = document.getElementById("symbol");
let answerform = document.getElementById("myForm");
let wrong = document.getElementById("wrong");
let right = document.getElementById("right");
let num1;
let num2;
let score = 0;
let bestScoreArray = [];

function resetAll() {
    score = 0;
    scorebox.textContent = 0;
    display.textContent = "01:00";
}

function chooseOptions() {
    choose_options.classList.add('display_choose_options');
    main_container.classList.add('display_none');
    display.textContent = "01:00";
    end_game.classList.add('display_none');
}


function chooseLevel() {
    if(document.getElementById('level_easy').checked) {
        level = 'easy';
    }else if (document.getElementById('level_medium').checked) {
        level = 'medium';
    }else {
        level = 'hard';
    }
    
    console.log(level)
    resetAll()
    startGame()
    return false;
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let timesRan = 0
    let interval = setInterval(function () {
        timesRan += 1
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        
        if (--timer < 0) {
            timer = duration;
        }
        
        if(timesRan === 61){
        clearInterval(interval);
        }
        
    }, 1000);
}

function stopTimer() {
    if(display.textContent == "00:00") {
        bestScoreArray.push(parseInt(scorebox.textContent))
        endGame()
    }
}

function startGame() {
    choose_options.classList.add('display_none');
    end_game.classList.add('display_none');
    main_container.classList.remove('display_none');
    callQuizFromGametype();
    startTimer(60, display);
    setInterval(stopTimer,1000);
}


function setGameType(type) {
    gametype = type
    symbol.textContent = getSymb();
    callQuizFromGametype();
}


function callQuizFromGametype() {
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

function returnFirstNumForLevel() {
    if (level == "easy") {
        if (gametype == "multiplication") {
            return num1 = Math.floor(Math.random() * 10);
        }else {
            return num1 = Math.floor(Math.random() * 20);
        }
    }else if (level == "medium") {
        if (gametype == "multiplication") {
            return num1 = Math.floor(Math.random() * 15);
        }else {
            return num1 = Math.floor(Math.random() * 40);
        }
    }else if (level == "hard") {
        if (gametype == "multiplication") {
            return num1 = Math.floor(Math.random() * 20);
        }else {
            return num1 = Math.floor(Math.random() * 60);
        }
    }
    
}

function returnSecondNumForLevel() {
    if (level == "easy") {
        if (gametype == "multiplication") {
            return num2 = Math.floor(Math.random() * 10);
        }else {
            return num2 = Math.floor(Math.random() * 20);
        }
    }else if (level == "medium") {
        if (gametype == "multiplication") {
            return num2 = Math.floor(Math.random() * 15);
        }else {
            return num2 = Math.floor(Math.random() * 40);
        }
    }else if (level == "hard") {
        if (gametype == "multiplication") {
            return num2 = Math.floor(Math.random() * 20);
        }else {
            return num2 = Math.floor(Math.random() * 60);
        }
    }
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


function quiz() {
    returnFirstNumForLevel();
    returnSecondNumForLevel();
    questionbox1.textContent = num1;
    questionbox2.textContent = num2;
    if(gametype == "addition") {
        answerform["rightAnswer"].value = (num1+num2);
    }
    if(gametype == "subtraction") {
        answerform["rightAnswer"].value = (num1-num2);
    }
    if(gametype == "multiplication") {
        answerform["rightAnswer"].value = (num1*num2);
    }
    
}

let additionQuiz = function() {
    quiz();
};

let subtractionQuiz = function() {
    quiz();
};

let multiplicationQuiz = function() {
    quiz();
};


function checkAnswer() {
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        right.classList.remove("hide");
        wrong.classList.add("hide");
        setTimeout(function(){right.classList.add('hide')}, 1000);
        score++;
    } else {
        wrong.classList.remove("hide");
        right.classList.add("hide");
        setTimeout(function(){wrong.classList.add('hide')}, 1000);
    }
    scorebox.textContent = score;
    answerform["answer"].value = "";
    
    callQuizFromGametype();
    return false;
}

function getTopScore() {
    let topScore = Math.max.apply(null, bestScoreArray)
    return topScore
}

function endGame() {
    end_game.classList.remove('display_none');
    end_game.classList.add('end_game_options');
    main_container.classList.add('display_none');
    score_at_end.textContent = scorebox.textContent;
    top_score.textContent = getTopScore();
}


chooseOptions();







