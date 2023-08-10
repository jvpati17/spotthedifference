const gameTitle = 'Spot the Difference';

const startButton = document.getElementById('start-button').style.display = 'none';
    
//startButton.addEventListener('click', function(){
    //showBoard();
    //console.log('hi')
//});
    //startGame();
let playerScore = document.getElementById('player-score').style.display = 'none';
let board = document.getElementById('board').style.display = 'none';
let board2 = document.getElementById('boardTwo').style.display = 'none';
let board3 = document.getElementById('boardThree').style.display = 'none';
const tryAgain = document.getElementById('try-again').style.display = 'none';

//let winningChoice = false;

let roundTwoButton = document.getElementById('round-2').style.display = 'none';
let roundThreeButton = document.getElementById('round-3').style.display = 'none';
//function roundTwo() {
    //document.getElementById('round-2').style.display = 'grid';
//}

function secretStart() {
    document.getElementById('start-button').style.display = 'inline';
}



// function startGame() {
    //console.log('hello')
//}

//function showBoard() {
    //document.getElementById('board').style.display = 'grid'; 
    //document.getElementById('try-again').style.display = 'none';
    
      
    //}
    
    //console.log('hi')

    function hideBoard() {
        document.getElementById('board').style.display = 'grid';
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('player-score').style.display = 'inline';
        document.getElementById('player-score').innerHTML = 'Score 0/3';
    }

    function changeColor() {
        document.getElementById('winning-cell').innerHTML = 'Correct!';
        document.getElementById('winning-cell').style.backgroundColor = 'white';
        //document.getElementById('try-again').style.display = 'grid';
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
        



/* window.onload = function() {
    setGame();
}
function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for (let r = 0; r < 3; r++){
        for (let c = 0; c < 3; c++) {
            let cell = document.createElement('div');
            cell.id = r.toString() + '-' + c.toString();
            cell.classList.add('cell');
            if (r == 0 || r == 1) {
                cell.classList.add('horizontal-line');
            }
            if (c == 0 || c == 1) {
                cell.classList.add('vertical-line');
            }
            cell.addEventListener('click', checkChoice);
            document.getElementById('board').append(cell);
        }
    }
}

function checkChoice() {
    if (winningChoice) {
        return;
    }

    let coords = this.id.split('-')
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != winningChoice) {
        return;
    }

}
*/









//board hide function

//function hideUnhide(id) {
    //if (board.style.display == 'none') {
        //board.style.display = 'block';
    //} else {
       // board.style.display = 'none';
    //}
//}










//startButton.addEventListener('click', firstRound);
//function firstRound() {
   // if ()
//}



















//const board = document.getElementById('board');
//board.addEventListener('click', function(){
    //console.log('hi')
//});

//const startButton = document.getElementById('start-button');
//startButton.addEventListener('click', firstRound);

//function firstRound()
