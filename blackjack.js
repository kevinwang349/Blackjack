let playerhand = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let AIhand = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function pickRandom() {
    let card = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < 40; i++) {
        if (deck[i] === card) {
            deck[i] = 0;
            return card;
        }
    } pickRandom();
}
playerhand[0] = pickRandom();
let psum = playerhand[0];
phand.innerHTML = `Your first card is a <b class='win'>${psum}</b>.`;
AIhand[0] = pickRandom();
let AIsum = AIhand[0];
function hitt() {
    if (!folded) {
        for (let i = 0; i < 12; i++) {
            if (playerhand[i] === 0) {
                let card = pickRandom();
                playerhand[i] = card;
                psum += card;
                checkLose();
                return;
            }
        }
    }
}
function checkLose() {
    if (psum === 21) {
        folder();
        if (AIsum === 21) {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>You both got <i>exactly</i> <b class='win'>21</b>.<br><br><b class='tie'>It's a tie!</b>`;
            gameOver();
            return;
        } else {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>You got <i>exactly</i> <b class='win'>21</b>. The computer got ${AIsum}.<br><br><b class='win'>You win!</b>`;
            gameOver();
            return;
        }
    } else if (psum > 21) {
        folder();
        if (AIsum > 21) {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>Your total is ${psum}. The computer's total is ${AIsum}.<br><br>You both lost, so it's a <b class='tie'>tie</b>.`;
            gameOver();
            return;
        } else {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>Your total is ${psum}. The computer's total is ${AIsum}.<br><br>You <b class='lose'>lose</b>.`;
            gameOver();
            return;
        }
    } else {
        phand.innerHTML = `Your current hand is ${player(playerhand)}. Your current total is <b class='win'>${psum}</b>.`;
    }
}
function checkWin() {
    if (psum >= 21) {
        return;
    } else if (AIsum === 21) {
        phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>Your total is ${psum}. The computer got <i>exactly</i> <b class='win'>21</b>.<br><br><b class='lose'>The robots win!</b>`;
        gameOver();
        return;
    } else if (AIsum > 21) {
        phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>Your total is ${psum}. The computer got ${AIsum}.<br><br><b class='win'>You win!</b>`;
        gameOver();
        return;
    } else {
        if (psum === AIsum) {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>You and the computer both ended up with ${psum}.<br><br>It's a <b class='tie'>tie<b>!`;
            gameOver();
            return;
        } else if (psum > AIsum) {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>Your total is ${psum}. The computer's total is ${AIsum}.<br><br><b class='win'>You win!</b>`;
            gameOver();
            return;
        } else if (psum < AIsum) {
            phand.innerHTML = `Your hand was ${player(playerhand)}.<br><br>Your total is ${psum}. The computer's total is ${AIsum}.<br><br>You <b class='lose'>lose</b>.`;
            gameOver();
            return;
        }
    }
}
function gameOver() {
    ree.innerText = 'Replay?'
    hf.innerText = '';
    hit.innerText = '';
    fold.innerText = '';
}
function AImove() {
    if (AIsum <= 15) {
        while (AIsum <= 15) {
            for (let i = 0; i < 12; i++) {
                if (AIhand[i] === 0) {
                    let card = pickRandom();
                    AIhand[i] = card;
                    AIsum += card;
                    break;
                }
            }
        }
    }
}
function player(playerhand) {
    let phead = '';
    for (let i = 0; i < 11; i++) {
        if (playerhand[i] === 0) {
            return phead;
        } phead = phead + playerhand[i] + ' ';
    } return phead;
}