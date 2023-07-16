let randomNum;
let score = 10;
let highscore = 0;
let guess1ValueElement = document.getElementById("guess1-value");
let guess2ValueElement = document.getElementById("guess2-value");
let guess3ValueElement = document.getElementById("guess3-value");
console.log('hi');

function changeMsg(msg) {
    document.getElementById("message").textContent = msg;
}

function checkGuess() {
    const userInput = parseInt(document.getElementById("guess-input").value);
    console.log(userInput);
    console.log(typeof userInput);

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        changeMsg("Please enter a valid number");
    } else if (userInput === randomNum) {
        changeMsg("Congratulations! You guessed the correct number!");
        document.getElementById("correct-number").style.display = "block";
        document.getElementById("random-number").textContent = randomNum;
        document.getElementById("submit-btn").disabled = true;
        document.getElementById("guess-input").disabled = true;

        if (score > highscore) {
            highscore = score;
            document.getElementById("highscore-value").textContent = highscore;
        }
    } else {
        if (guess1ValueElement.textContent === "") {
            guess1ValueElement.textContent = userInput; 
        } else if (guess2ValueElement.textContent === "") {
            guess2ValueElement.textContent = userInput; 
        } else if (guess3ValueElement.textContent === "") {
            guess3ValueElement.textContent = userInput; 
        }

        if (guess1ValueElement.textContent !== "" && guess2ValueElement.textContent !== "" && guess3ValueElement.textContent !== "") {
            changeMsg("Game Over! ");
            document.getElementById("submit-btn").disabled = true;
            document.getElementById("guess-input").disabled = true;
        }

        if (score === 1) {
            changeMsg("Oops! You lost. Try again!");
            document.getElementById("submit-btn").disabled = true;
            document.getElementById("guess-input").disabled = true;
            document.body.style.backgroundColor = "red";
        } else {
            if (userInput > randomNum) {
                changeMsg("Too High! Try again.");
            } else {
                changeMsg("Too Low! Try again.");
            }
            score--;
            document.getElementById("score-value").textContent = score;
        }
    }
}
function restartGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    score = 10;
    changeMsg("Guess a number between 1 and 100!");
    document.getElementById("score-value").textContent = score;
    document.getElementById("guess-input").value = "";
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("guess-input").disabled = false;
    document.getElementById("correct-number").style.display = "none";
}

// Event Listeners
document.getElementById("submit-btn").addEventListener("click", checkGuess);
document.getElementById("play-btn").addEventListener("click", restartGame);