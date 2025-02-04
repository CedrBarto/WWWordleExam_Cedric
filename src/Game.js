"use strict";

class Game {
    constructor(attempt1, attempt2, attempt3, attempt4, attempt5) {
        this.attempt1 = attempt1;
        this.attempt2 = attempt2;
        this.attempt3 = attempt3;
        this.attempt4 = attempt4;
        this.attempt5 = attempt5;
    }


    nextAttempt() {
        this.attempt1.disabled = true;
        this.attempt2.disabled = true;
        this.attempt3.disabled = true;
        this.attempt4.disabled = true;
        this.attempt5.disabled = true;
    }




}

export default Game;