

/*----- constants -----*/

const gameTitle = 'Spot the Difference';

const startButton = document.getElementById('start-button').style.display = 'none';
const playerScore = document.getElementById('player-score').style.display = 'none';
const board = document.getElementById('board').style.display = 'none';
const board2 = document.getElementById('boardTwo').style.display = 'none';
const board3 = document.getElementById('boardThree').style.display = 'none';
const tryAgain = document.getElementById('try-again').style.display = 'none';
const roundTwoButton = document.getElementById('round-2').style.display = 'none';
const roundThreeButton = document.getElementById('round-3').style.display = 'none';

/*----- functions -----*/

function secretStart() {
    document.getElementById('start-button').style.display = 'inline';
}

    function hideBoard() {
        document.getElementById('board').style.display = 'grid';
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('player-score').style.display = 'inline';
        document.getElementById('player-score').innerHTML = 'Score 0/3';
    }

    function changeColor() {
        document.getElementById('winning-cell').innerHTML = 'Correct!';
        document.getElementById('winning-cell').style.backgroundColor = 'white';
        document.getElementById('board').style.backgroundColor = 'white';
        document.getElementById('round-2').style.display = 'inline';
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('player-score').innerHTML = 'Score 1/3';

        } 

    function wrongCell() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('board').style.display = 'none';
            document.getElementById('try-again').style.display = 'inline';
            document.getElementById('start-button').style.display = 'none';
            document.getElementById('round-2').style.display = 'none';
        
        }

        function boardTwo() {
            document.getElementById('board').style.display = 'none';
            document.getElementById('round-2').style.display = 'none';
            document.getElementById('boardTwo').style.display = 'grid';
        }

        function wrongCell2() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardTwo').style.display = 'none';
        
        }
        function winningCell2() {
            document.getElementById('winning-cell-2').innerHTML = 'Correct!';
            document.getElementById('winning-cell-2').style.backgroundColor = 'white';
            document.getElementById('boardTwo').style.backgroundColor = 'white';
            document.getElementById('round-3').style.display = 'inline';
            document.getElementById('player-score').innerHTML = 'Score 2/3';
        }

        function boardThree() {
            document.getElementById('boardTwo').style.display = 'none';
            document.getElementById('round-3').style.display = 'none';
            document.getElementById('boardThree').style.display = 'grid';
        }

        function winningCell3() {
            document.getElementById('message').innerHTML = 'You win!';
            document.getElementById('boardThree').style.display = 'none';
            document.getElementById('winning-cell-3').style.backgroundColor = 'white';
            document.getElementById('boardThree').style.backgroundColor = 'white';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('player-score').innerHTML = 'Score 3/3';
        }

        function wrongCell3() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardThree').style.display = 'none';
        
        }
        