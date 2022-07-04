'use strict';

let randomNumber = generateNumber();
let currentScore = 20;
let currentHighScore = 0;
let checkEvent = document.querySelector(".check");
let tryagainEvent = document.querySelector(".tryAgain");

checkEvent.addEventListener("click", checkNumber);
tryagainEvent.addEventListener("click", tryAgain);

function generateNumber() {
    return (Math.floor(Math.random() * 20));
}

function setScore() {

    document.querySelector('.currentvalue').innerHTML = currentScore;
    // return currentScore;
}


function victory() {
    document.body.style.backgroundColor = "#6ED01A";
    document.querySelector(".inputField").style.backgroundColor = "#6ED01A";
}

function checkNumber() {
    let userNumber = document.querySelector('.userNumber').value;
    console.log(userNumber);
    let suggestiontext = document.querySelector(".suggestiontext");
    if (userNumber < randomNumber) {
        currentScore--;
        suggestiontext.innerHTML = "Too Low ⬇️";
        setScore();
    }
    else if (userNumber > randomNumber) {
        currentScore--;
        suggestiontext.innerHTML = "Too High ⬆️";
        setScore();
    }
    else if (userNumber == randomNumber) {
        suggestiontext.innerHTML = "You guessed right.";
        victory();
        if (currentHighScore < currentScore) {
            currentHighScore = currentScore;
            document.querySelector(".highscorevalue").innerHTML = currentScore;
        }

    }
}

function tryAgain() {
    currentScore = 20;
    setScore();
    randomNumber = generateNumber();
}








