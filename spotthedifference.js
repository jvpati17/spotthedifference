

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

//const celldivs = document.getElementById('board')


//let cell = document.getElementById('board')
//cell.querySelectorAll('#board > #cell')
//document.querySelectorAll('#cell').addEventListener('click', wrongCell)
//document.querySelectorAll('#cell').addEventListener('click', wrongCell)


//board = getElementById('cell') {
   //let board.querySelectorAll('cell').addEventListener(click, wrongCell)
//}


//let cell = document.querySelectorAll('cell')

//cell.forEach((cell) => {
    //cell.addEventListener('click', wrongCell)
//})

document.getElementById('board').addEventListener('click', handleClick)

/*----- (button) eventlisteners -----*/

document.getElementById("secret-start").addEventListener('click', secretStart)
document.getElementById('start-button').addEventListener('click', hideBoard)
document.getElementById('round-2').addEventListener('click', boardTwo)
document.getElementById('round-3').addEventListener('click', boardThree)

/*----- (winning cell) eventlisteners -----*/

//document.getElementById('winning-cell').addEventListener('click', changeColor)
document.getElementById('winning-cell-2').addEventListener('click', winningCell2)
document.getElementById('winning-cell-3').addEventListener('click', winningCell3)

//document.querySelectorAll('cell').addEventListener('click', wrongCell)

/*----- functions -----*/

function handleClick(evt) {
    console.log(evt);
    if (evt.target.id === 'winning-cell') {
        changeColor()
    } else if (evt.target.className === 'cell') {
        wrongCell()
    }

}

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
        //document.getElementById('winning-cell').innerHTML = 'Correct!';
        document.getElementById('message').innerHTML = 'Correct';
        document.getElementById('winning-cell').style.backgroundColor = 'white';
       // document.getElementById('board').style.backgroundColor = 'white';
        document.getElementById('board').style.display = 'none';
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
            document.getElementById('message').innerHTML = 'Spot the Difference';
        }

        function wrongCell2() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardTwo').style.display = 'none';
        
        }
        function winningCell2() {
            //document.getElementById('winning-cell-2').innerHTML = 'Correct!';
            document.getElementById('message').innerHTML = 'Correct';
            //document.getElementById('winning-cell-2').style.backgroundColor = 'white';
            //document.getElementById('boardTwo').style.backgroundColor = 'white';
            document.getElementById('boardTwo').style.display = 'none';
            document.getElementById('round-3').style.display = 'inline';
            document.getElementById('player-score').innerHTML = 'Score 2/3';
        }

        function boardThree() {
            document.getElementById('message').innerHTML = 'Spot the Difference';
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
        