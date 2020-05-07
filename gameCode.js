
// Computer function that will return a random play (Rock, Paper, Scissors)
function computerPlay() {
    // Generate random number between 0 and 2
    let roll = (Math.round(Math.random() * 2));

    // Choice tree
    if (roll == 0) {
        return "Rock";
    } else if (roll == 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Function displays the player and computer rolls based on parameters
function displayRolls(playerSelection, computerSelection) {

    // Player options
    if (playerSelection == "Rock") {

        document.getElementById("player-text").innerHTML = "Rock"
    }
    else if (playerSelection == "Paper") {

        document.getElementById("player-text").innerHTML = "Paper";
    }
    else {

        document.getElementById("player-text").innerHTML = "Scissors";
    }
    // Computer options
    if (computerSelection == "Rock") {

        document.getElementById("computer-text").innerHTML = "Rock"

    } else if (computerSelection == "Paper") {

        document.getElementById("computer-text").innerHTML = "Paper";
    } else {

        document.getElementById("computer-text").innerHTML = "Scissors";
    }
}

// Compare rolls and then determine round winner
function computeRoundWinner(playerSelection, computerSelection) {

    // Rock & scissors
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) {
        // Player Wins
        if (playerSelection == "Rock") {
            document.getElementById("round-winner").setAttribute("name", "player");
        }
        // Computer wins 
        else {
            document.getElementById("round-winner").setAttribute("name", "computer");
        }
        // Rock & paper
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        // Player Wins
        if (playerSelection == "Paper") {
            document.getElementById("round-winner").setAttribute("name", "player");
        }
        // Computer wins
        else {
            document.getElementById("round-winner").setAttribute("name", "computer");
        }
        // Rock Tie
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        document.getElementById("round-winner").setAttribute("name", "tie");
    }
    // Scissors & Paper
    else if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors")) {
        // Player Wins
        if (playerSelection == "Scissors") {
            document.getElementById("round-winner").setAttribute("name", "player");
        }
        // Computer wins
        else {
            document.getElementById("round-winner").setAttribute("name", "computer");
        }
    }
    // Scissors Tie
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        document.getElementById("round-winner").setAttribute("name", "tie");
    }
    // Paper Tie
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        document.getElementById("round-winner").setAttribute("name", "tie");
    }
    // Error
    else {
        throw new Error("Error -- Something's gone horribly wrong!!\nTerminating program.");
    }
}
// Use the rolls to determine which message to generate
function displayRoundWinner(playerSelection, computerSelection) {

    let winner = document.getElementById("round-winner").getAttribute("name");

    // Player wins round
    if (winner === "player") {
        if (playerSelection === "Rock") {

            document.getElementById("round-winner").innerHTML =
                "WINNER: PLAYER";

            document.getElementById("result-text").innerHTML =
                "You win! Rock BASHES Scissors.";
        }
        else if (playerSelection === "Paper") {

            document.getElementById("round-winner").innerHTML =
                "WINNER: PLAYER";

            document.getElementById("result-text").innerHTML =
                "You win! Paper SMOTHERS Rock.";
        }
        else {

            document.getElementById("round-winner").innerHTML =
                "WINNER: PLAYER";

            document.getElementById("result-text").innerHTML =
                "You win! Scissors SLASH Paper.";
        }
        // Computer wins round
    } else if (winner === "computer") {

        if (computerSelection === "Rock") {

            document.getElementById("round-winner").innerHTML =
                "WINNER: COMPUTER";

            document.getElementById("result-text").innerHTML =
                "You lose! Scissors SMASHED by Rock.";
        }
        else if (computerSelection === "Paper") {

            document.getElementById("round-winner").innerHTML =
                "WINNER: COMPUTER";

            document.getElementById("result-text").innerHTML =
                "You lose! Rock WRAPPED by Paper";
        }
        else {

            document.getElementById("round-winner").innerHTML =
                "WINNER: COMPUTER";

            document.getElementById("result-text").innerHTML =
                "You lose! Paper TORN by Scissors.";
        }
    }
    // Tie
    else if (winner === "tie") {
        // Rock tie
        if (playerSelection === "Rock" && computerSelection === "Rock") {

            document.getElementById("round-winner").innerHTML =
                "WINNER: TIED";

            document.getElementById("result-text").innerHTML =
                "Tie! Rocks meet and roll away.";
        }
        // Paper tie
        else if (playerSelection === "Paper" && computerSelection === "Paper") {

            document.getElementById("round-winner").innerHTML =
                "WINNER: TIED";

            document.getElementById("result-text").innerHTML =
                "Tie! Papers stack together and are filed away.";
        }
        // Scissors tie
        else {

            document.getElementById("round-winner").innerHTML =
                "WINNER: TIED";

            document.getElementById("result-text").innerHTML =
                "Tie! Scissors deflect harmlessly away.";
        }
    }
}

function playRound(e) {

    let computerSelection = computerPlay();
    // Get name of button and use as player input
    let playerSelection = e.target.getAttribute("name");

    displayRolls(playerSelection, computerSelection);

    computeRoundWinner(playerSelection, computerSelection);

    displayRoundWinner(playerSelection, computerSelection);

    let winner = document.getElementById("round-winner").getAttribute("name");

    return winner;

}

// Reset game to default
function newGame() {

    location.reload();
}

const newGameBtn = document.getElementById("newgame-btn");
// Restart game on button click
newGameBtn.addEventListener("click", newGame);

const buttons = document.querySelectorAll(".buttons");

// Track number of ties. May use in future version
let ties = 0;

let round = 1;

// Play a round on player input
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        // get player score
        let playerScore = document.getElementById("player-score").innerHTML;
        // Get computer score
        let computerScore = document.getElementById("computer-score").innerHTML;

        // Display round 
        document.getElementById("round-number").innerHTML = round;

        // Play a round using button name as player input
        let roundWinner = playRound(e);

        // Update score to reflect round winner
        if (roundWinner === "player") {
            playerScore++;
            document.getElementById("player-score").innerHTML = playerScore;
        }
        else if (roundWinner === "computer") {
            computerScore++;
            document.getElementById("computer-score").innerHTML = computerScore;
        }
        else {
            ties++;
        }

        // Display message when either or both are close to winning
        if (playerScore == 4 && computerScore < 4) {

            let imminentWin = document.getElementById("imminent-win");

            imminentWin.style.color = "red";

            imminentWin.innerHTML = "PLAYER ONLY NEEDS ONE MORE POINT TO WIN!";

        } else if (computerScore == 4 && playerScore < 4) {

            let imminentWin = document.getElementById("imminent-win");

            imminentWin.style.color = "red";

            imminentWin.innerHTML = "COMPUTER ONLY NEEDS ONE MORE POINT TO WIN!";

        } else if (playerScore == 4 && computerScore == 4) {

            let imminentWin = document.getElementById("imminent-win");

            imminentWin.style.color = "red";

            imminentWin.innerHTML = "NEXT POINT WINS!";
        }

        // Once either score equals 5; display winner message and reset game
        if (playerScore == 5) {

            alert("--{PLAYER VICTORY}--\nYou've shown that man is superior to machine.\nNice job fleshbag!");

            newGame();

        } else if (computerScore == 5) {

            alert("--{COMPUTER VICTORY}--\nThe time of man has come to an end.\nInititating SKYNET.exe");

            newGame();
        }
        round++;
    });
});
