"use strict";

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function playGame() {
    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " must start the game.");
}

function getBox(number) {
    return document.getElementById("b" + number).innerText;
}

function coloredBox(number) {
    document.getElementById("b" + number).style.color = "cyan";
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true;
        console.log("We have a winner!");
        coloredBox(a);
        coloredBox(b);
        coloredBox(c);
    }
    return result;
}

function findWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
            checkRow(4, 5, 6, move) ||
            checkRow(7, 8, 9, move) ||
            checkRow(1, 4, 7, move) ||
            checkRow(2, 5, 8, move) ||
            checkRow(3, 6, 9, move) ||
            checkRow(1, 5, 9, move) ||
            checkRow(3, 5, 7, move)) {
        
        result = true;
       
    }
    return result;
}

function newTurn() {
    if (findWinner(document.turn)) {
        setMessage("Yahooo! " + document.turn + " - You're a Winner!");
        document.winner = document.turn;
    } else if (document.turn === "X") {
        document.turn = "O";
        setMessage("The next move is for " + document.turn + ".");
    } else {
        document.turn = "X";
        setMessage("The next move is for " + document.turn + ".");
    }
    
}

function userMove(box) {
    if (document.winner !== null) {
        setMessage("Just reset the Game...");
    } else if (box.innerText === "") {
        box.innerText = document.turn;
        newTurn();
    } else {
        setMessage("You can't play in this box again!");
    }
    
}

function resGame() {
    location.reload();
}

