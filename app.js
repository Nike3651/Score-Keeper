let pOneScore = 0;
let pTwoScore = 0;

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

const addScore = () => {
    pOneScore++;
    p1Score.innerText = `${pOneScore}`;
    if (parseInt(p1Score.innerText) === winningScore) {
        p1Score.classList.toggle('win');
        p2Score.classList.toggle('lose');
        playerOne.disabled = "true";
        playerTwo.disabled = "true";
    }

}
const playerOne = document.querySelector('#playerOne');
playerOne.addEventListener('click', addScore);


const addScoreP2 = () => {
    pTwoScore++;
    p2Score.innerText = `${pTwoScore}`;
    if (parseInt(p2Score.innerText) === winningScore) {
        p2Score.classList.toggle('win');
        p1Score.classList.toggle('lose');
        playerOne.disabled = "true";
        playerTwo.disabled = "true";
    }

}
const playerTwo = document.querySelector('#playerTwo');
playerTwo.addEventListener('click', addScoreP2);

const restore = () => {
    pOneScore = 0;
    pTwoScore = 0;
    p1Score.innerText = `${pOneScore}`;
    p2Score.innerText = `${pTwoScore}`;
    p1Score.classList.remove('win');
    p1Score.classList.remove('lose');
    p2Score.classList.remove('win');
    p2Score.classList.remove('lose');
    totalRounds.innerText.value = '';
}
const reset = document.querySelector('#reset');
reset.addEventListener('click', restore);

const totalRounds = document.querySelector('#rounds');
totalRounds.addEventListener('change', () => {
    winningScore = parseInt(totalRounds.value);
});


