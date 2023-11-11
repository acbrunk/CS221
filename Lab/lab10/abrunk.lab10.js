document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const resultDisplay = document.getElementById('result-display');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const userChoice = this.id;
            const computerChoice = generateComputerChoice();
            const result = determineWinner(userChoice, computerChoice);
            displayResult(result);
        });
    });

    function generateComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a draw!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(result) {
        resultDisplay.textContent = `Result: ${result}`;
    }
});

