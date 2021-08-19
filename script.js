
// dom variable

const squares = document.querySelectorAll(".square");
const mole = document.querySelector('.mole');
var timeLeft = document.getElementById("time-left");
let score = document.getElementById('score');

let result = 0;
let currentTime = 60;
var hitPosition;
let timeId = null;

function randomSquare() {

    squares.forEach( square => {
        square.classList.remove('mole');
    });

    let randSquare = squares[Math.floor(Math.random() * 9)];
    randSquare.classList.add('mole');

    hitPosition = randSquare.id;
}

squares.forEach( square => {
    square.addEventListener('mousedown',() => {
        if(square.id == hitPosition){
            result++
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){
    timeId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId);
        alert("GAME OVER ! Your Final Score is " + result);
    }
}

let countDownTimerId = setInterval(countDown, 900);