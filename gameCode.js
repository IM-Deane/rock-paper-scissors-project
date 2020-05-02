
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
    
    // Player wins round
    if (winner == 0) {
        if (playerSelection == "Rock") {

            document.getElementById("result-text").innerHTML = 
                "You win! Rock BASHES Scissors.";
        }
        else if (playerSelection == "Paper") {

            document.getElementById("result-text").innerHTML = 
                "You win! Paper SMOTHERS Rock.";
        }
        else {
            document.getElementById("result-text").innerHTML = 
                "You win! Scissors SLASH Paper.";
        }
        // Computer wins round
    } else if (winner == 1) {

        if (computerSelection == "Rock") {
            
            document.getElementById("result-text").innerHTML = 
                "You lose! Scissors SMASHED by Rock.";
        }
        else if (computerSelection == "Paper") {

            document.getElementById("result-text").innerHTML = 
                "You lose! Rock WRAPPED by Paper";
        }
        else {
            document.getElementById("result-text").innerHTML = 
                "You lose! Paper TORN by Scissors.";
        }
    }
    // Tie
    else if (winner == 2) {
        // Rock tie
        if (playerSelection == "Rock" && computerSelection == "Rock") {

            document.getElementById("result-text").innerHTML = 
                "Tie! Rocks meet and roll away.";
        }
        // Paper tie
        else if (playerSelection == "Paper" && computerSelection == "Paper") {

            document.getElementById("result-text").innerHTML = 
                "Tie! Papers stack together and are filed away.";
        }
        // Scissors tie
        else {
            document.getElementById("result-text").innerHTML = 
                "Tie! Scissors deflect harmlessly away.";
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
    
    // Reusable linebreak element to be used further down
    let linebreak = document.createElement("br");
    
    // Display the final scores
    let gameOverNode = document.createElement("p");
    gameOverNode.id = "gameover-text";
    let gameOverText = document.createTextNode("[GAME OVER]");

    gameOverNode.classList.add("result-style")
    
    // Had to add text to a node before adding to parent node
    gameOverNode.appendChild(gameOverText);
    
    const outputBox = document.getElementById("result-box");
    outputBox.prepend(gameOverNode);

    // Display winner message
    if (gameWinner == playerId) {
        // player wins
        document.getElementById("result-text").innerHTML =
            "PLAYER is victorious!! Nice job fleshbag.";
    } else if (gameWinner == computerId) {
        // Computer wins
        // Create temp variables
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");

        document.getElementById("result-text").innerHTML =
        "COMPUTER is victorious!!";
        let tempText1 = document.createTextNode = "The time of man has come to an end.";
        para1.classList.add("result-style");
        para1.appendChild(tempText1);

        let tempText2 = document.createTextNode = "Inititating SKYNET.exe";
        para2.classList.add("result-style");
        para2.appendChild(tempText2);

        // Append to output div
        outputBox.appendChild(para1);
        outputBot.appendChild(para2);

    } else if (gameWinner == tieId) {
        // Game ends in tie
        document.getElementById("result-text").innerHTML =
            "Game ends in a TIE. Well that was unexpected!";
    } else {
        // Unknown result
        document.getElementById("result-text").innerHTML =
            "Hmmm, how did you get here?\nBEGONE HACKER!!";
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
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;

    // Use input parameter as player selection
    const playerSelection = input;
    const computerSelection = computerPlay();

    roundWinner = playRound(playerSelection, computerSelection);
    
    // Player won round
    if (roundWinner == 0) {
       document.getElementById("player-score").innerHTML = playerScore++;
    }
    // Computer won round
    else if (roundWinner == 1) {
        document.getElementById("computer-score").innerHTML = computerScore++;
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

// alert("Play again?");


