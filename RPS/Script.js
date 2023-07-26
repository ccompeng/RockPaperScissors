const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");

const compScore = document.getElementById("compScore");
const playerScore = document.getElementById("playerScore");
const info = document.getElementById("info");

const rpsArr = ["rock", "paper", "scissors"];
let compareArr = [];

let playerCh = "";
let compCh = "";

let pScore = 0;
let cScore = 0;

rockChoice.addEventListener("click", function () { playerChoiceFunc("rock") });
paperChoice.addEventListener("click", function () { playerChoiceFunc("paper") });
scissorsChoice.addEventListener("click", function () { playerChoiceFunc("scissors") });

function playerChoiceFunc(ch) {
    playerChoice.src = ch + ".png";
    playerChoice.style.opacity = "1";

    playerCh = ch;

    compChoiceFunc();
    compareFunc();
}

function compChoiceFunc() {
    let rnd = Math.floor(Math.random() * 3);
    compCh = rpsArr[rnd];

    if (rnd == 0) {
        computerChoice.src = "rock.png";
        computerChoice.style.opacity = "1";
    } else if (rnd == 1) {
        computerChoice.src = "paper.png";
        computerChoice.style.opacity = "1";
    } else if (rnd == 2) {
        computerChoice.src = "scissors.png";
        computerChoice.style.opacity = "1";
    }
}

function compareFunc() {
    compareArr.push(playerCh);
    compareArr.push(compCh);

    if (compareArr[0] == "rock") {
        if (compareArr[1] == "paper") {
            cScore++;
            compScore.innerHTML = cScore;
        } else if (compareArr[1] == "scissors") {
            pScore++;
            playerScore.innerHTML = pScore;
        } else if (compareArr[1] == "rock") {
            equalFunc();
        }
    } else if (compareArr[0] == "paper") {
        if (compareArr[1] == "rock") {
            pScore++;
            playerScore.innerHTML = pScore;
        } else if (compareArr[1] == "paper") {
            equalFunc();
        } else if (compareArr[1] == "scissors") {
            cScore++;
            compScore.innerHTML = cScore;
        }
    } else if (compareArr[0] == "scissors") {
        if (compareArr[1] == "rock") {
            cScore++;
            compScore.innerHTML = cScore;
        } else if (compareArr[1] == "paper") {
            pScore++;
            playerScore.innerHTML = pScore;
        } else if (compareArr[1] == "scissors") {
            equalFunc();
        }
    }

    compareArr = [];
}

function equalFunc() {
    info.style.opacity = "1";

    setTimeout(() => {
        info.style.opacity = "0";
    }, 600);
}