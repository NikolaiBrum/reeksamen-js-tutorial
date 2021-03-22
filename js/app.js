'use strict';

//function that lets you easily get an id from html
let $ = (x) => {
    return document.getElementById(x);
};

//initialize global variables
let arr = [];
const noOfRounds = 3;

//random number generator, with min and max as parameters
const rollIt = (min, max) => {
    let rando = Math.random() * max;
    let final = Math.floor(rando) + min;
    return final;
};

//sets innerhtml to a random number between 1 and 9
const roll = () => {
    return $("roll").innerHTML = rollIt(1, 9);
};

//adds random generated number to array
let addToArr = () => {
    arr.push($("roll").innerHTML);
};

//checks if winner to conditions and gives alert and starts a new game.
// Added new statement to give alert when game ends as a draw
let winner = () => {
    if (($("player1Points").innerHTML) && ($("player2Points").innerHTML) == (noOfRounds)) {
        alert("DRAW! - Rematch");
        newGame();
    } else if ($("player1Points").innerHTML == noOfRounds) {
        alert("Player 1 WINS!");
        newGame();
    } else if ($("player2Points").innerHTML == noOfRounds) {
        alert("Player 2 WINS!");
        newGame();
    }
};

//resets game
let newGame = () => {
    $("player1Points").innerHTML = 0;
    $("player2Points").innerHTML = 0;
    $("roll").innerHTML = "Roll Me!";
    arr = [];
};

//player turn, checks if button is clicked, checks if next value in array is higher or lower and reacts accordingly
let player1Turn = () => {
    if ($("player1High").checked) {
        if (arr[arr.length - 1] > arr[arr.length - 2]) {
            $("player1Points").innerHTML++;
        }
    }
    if ($("player1Low").checked) {
        if (arr[arr.length - 1] < arr[arr.length - 2]) {
            $("player1Points").innerHTML++;
        }
    }
    $("player1Low").checked = false;
    $("player1High").checked = false;
};

let player2Turn = () => {
    if ($("player2High").checked) {
        if (arr[arr.length - 1] > arr[arr.length - 2]) {
            $("player2Points").innerHTML++;
        }
    }
    if ($("player2Low").checked) {
        if (arr[arr.length - 1] < arr[arr.length - 2]) {
            $("player2Points").innerHTML++;
        }
    }
    $("player2Low").checked = false;
    $("player2High").checked = false;
};

//addeventlistener on button that goes through the contents of the game, in order as game is played.
$("rollBtn").addEventListener('click', () => {
    roll();
    addToArr();
    player1Turn();
    player2Turn();
    winner();
});
