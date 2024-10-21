const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playLine = document.getElementById("play-line");
const resultText = document.getElementById("result-text");

document.querySelectorAll(".game-button").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, computerChoice);

        // Display what is being played
        playLine.textContent = `You played ${capitalize(userChoice)} vs ${capitalize(computerChoice)}`;
        resultText.textContent = result;
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie!";
    if (
        (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
