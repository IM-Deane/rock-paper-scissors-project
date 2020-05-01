
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
    // Call parent node
    const parentContent = document.querySelector('#output');

    // Player element
    const playerRoll = document.createElement('p');
    playerRoll.id = 'playerRoll'
    playerRoll.style.fontWeight = 'bold';
    playerRoll.style.color = 'red';

    // Computer element
    const computerRoll = document.createElement('p');
    computerRoll.id = 'computerRoll'
    computerRoll.style.fontWeight = 'bold';
    computerRoll.style.color = 'blue';

    // List of player rolls
    if (playerSelection == "Rock") {

        playerRoll.innerHTML = "PLAYER: Rock";

    } else if (playerSelection == "Paper") {

        playerRoll.innerHTML = "PLAYER: PAPER";

    } else {
        playerRoll.innerHTML = "PLAYER: SCISSORS";
    }
    // Computer rolls
    if (computerSelection == "Rock") {

        computerRoll.innerHTML = "COMPUTER: Rock";

    } else if (computerSelection == "Paper") {

        computerRoll.innerHTML = "COMPUTER: PAPER";

    } else {

        computerRoll.innerHTML = "COMPUTER: Rock";
    }

    // Add rolls to parent node
    parentContent.appendChild(playerRoll);
    parentContent.appendChild(computerRoll);
}

// Function displays the round winner using provided parameters
function computeRoundWinner(playerSelection, computerSelection) {
    // ID numbers
    const player = 0;
    const computer = 1;
    const tie = 2;

    // Rock & scissors
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) {
        // Player Wins
        if (playerSelection == "Rock") {
            return player;
        }
        // Computer wins 
        else {
            return computer;
        }
        // Rock & paper
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        // Player Wins
        if (playerSelection == "Paper") {
            return player;
        }
        // Computer wins
        else {
            return computer;
        }
        // Rock Tie
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return tie;
    }
    // Scissors & Paper
    else if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors")) {
        // Player Wins
        if (playerSelection == "Scissors") {
            return player;
        }
        // Computer wins
        else {
            return computer;
        }
    }
    // Scissors Tie
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return tie;
    }
    // Paper Tie
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return tie;
    }
    // Error
    else {
        throw new Error("Error -- Something's gone horribly wrong!!\nTerminating program.");
    }
}
/* Function will accept the winner and selections of the round. 
 * It will then compute the winner and display the appropriate message */
function displayRoundWinner(winner, playerSelection, computerSelection) {
    // Create element to display text on
    const textOutput = document.createElement('p');
    textOutput.style.fontWeight = 'bold';

    // Player wins round
    if (winner == 0) {
        // Player rolled rock
        if (playerSelection == "Rock") {
            console.log("You win! Rock BASHES Scissors.");
        }
        // Player rolled paper
        else if (playerSelection == "Paper") {
            console.log("You win! Paper SMOTHERS Rock.");
        }
        // Player rolled scissors
        else {
            console.log("You win! Scissors SLASH Paper.");
        }
        // Computer wins round
    } else if (winner == 1) {
        // Computer rolled rock
        if (computerSelection == "Rock") {
            console.log("You lose! Scissors SMASHED by Rock.");
        }
        // Computer rolled paper
        else if (computerSelection == "Paper") {
            console.log("You lose! Rock WRAPPED by Paper");
        }
        // Computer rolled scissors
        else {
            console.log("You lose! Paper TORN by Scissors.");
        }
    }
    // Tie
    else if (winner == 2) {
        // Rock tie
        if (playerSelection == "Rock" && computerSelection == "Rock") {
            console.log("Tie! Rocks meet and roll away.");
        }
        // Paper tie
        else if (playerSelection == "Paper" && computerSelection == "Paper") {
            console.log("Tie! Papers stack together and are filed away.");
        }
        // Scissors tie
        else {
            console.log("Tie! Scissors deflect harmlessly away.");
        }
    }

}

// Function plays one round of rock-paper scissors using the parameters as it's moves
function playRound(playerSelection, computerSelection) {

    // Display rolls
    displayRolls(playerSelection, computerSelection);
    // Store winner's returned ID number
    let winner = computeRoundWinner(playerSelection, computerSelection);

    // Display round winner
    displayRoundWinner(winner, playerSelection, computerSelection);
    // 0 = player wins; 1 = computer wins; 2 = tie
    return winner;
}

// Function determines game's overall winner
function getGameWinner(playerScore, computerScore) {
    // ID's will be used to identify overall winner
    const playerId = 0, computerId = 1, tieId = 2;

    // Determine winner
    if (playerScore > computerScore) {
        // Player is overall winner
        return playerId;
    } else if (playerScore < computerScore) {
        // Computer is overall winner
        return computerId;
    } else {
        // Game ends in tie (5 ties in a row!?)
        return tieId;
    }
}

// Function displays overall winner and final game stats
function gameStats(gameWinner, playerScore, computerScore, playerId, computerId, tieId) {
    // Display the final scores
    console.log(`\n[GAME OVER]`);
    console.log(`FINAL SCORE: Player: ${playerScore} | Computer: ${computerScore}`);
    // Display winner message
    if (gameWinner == playerId) {
        // player wins
        console.log("PLAYER is victorious!! Nice job fleshbag.");
    } else if (gameWinner == computerId) {
        // Computer wins
        console.log("COMPUTER is victorious!!\nThe time of man has come to an end.");
        console.log("Inititating SKYNET.exe");
    } else if (gameWinner == tieId) {
        // Game ends in tie
        console.log("Game ends in a TIE. Well that was unexpected!");
    } else {
        // Unknown result
        console.log("Hmmm, how did you get here?\nBEGONE HACKER!!");
    }
}

// MAIN: function that runs game for 5-rounds and displays the result
function game(input) {
    // Scores
    let playerScore = 0, computerScore = 0, tie = 0;
    // winner of round
    let roundWinner;
    // ID's will be used to compute final stats
    const playerId = 0, computerId = 1, tieId = 2;
    // 5-round game
    let rounds = 0;
    // DISPLAY CURRENT SCORES
    console.log("PLAYER: " + playerScore + " | COMPUTER: " + computerScore);

    // Use input parameter as player selection
    const playerSelection = input;
    const computerSelection = computerPlay();

    roundWinner = playRound(playerSelection, computerSelection);
    // Increment score based on round winner
    // Player won round
    if (roundWinner == 0) {
        playerScore++;
    }
    // Computer won round
    else if (roundWinner == 1) {
        computerScore++;
    }
    // Round was a tie
    else {
        tie++;
    }
    // Next round
    rounds++;

    // Determine winner
    let gameWinner = getGameWinner(playerScore, computerScore);

    // Display final game stats
    gameStats(gameWinner, playerScore, computerScore, playerId, computerId, tieId);
}

// Wait for player to select any of the buttons and then start game
function playerInput() {

    const buttons = document.querySelectorAll(".buttons");

    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {

            let input = button.name;
            // Run game with player input
            game(input);

        });
    });
}

// Starts the game
playerInput();


