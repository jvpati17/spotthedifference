

/*----- constants -----*/

const gameTitle = 'Spot the Difference';

const startButton = document.getElementById('round-1').style.display = 'none';
const playerScore = document.getElementById('player-score').style.display = 'none';
const board = document.getElementById('boardOne').style.display = 'none';
const board2 = document.getElementById('boardTwo').style.display = 'none';
const board3 = document.getElementById('boardThree').style.display = 'none';
const tryAgain = document.getElementById('try-again').style.display = 'none';
const roundTwoButton = document.getElementById('round-2').style.display = 'none';
const roundThreeButton = document.getElementById('round-3').style.display = 'none';

const bonusButton = document.getElementById('bonus-message').style.display = 'none';
const bonusBoard1 = document.getElementById('bonusBoardOne').style.display = 'none';
const bonusBoard2 = document.getElementById('bonusBoardTwo').style.display = 'none';
const bonusBoard3 = document.getElementById('bonusBoardThree').style.display = 'none';
const bonusBoard4 = document.getElementById('bonusBoardFour').style.display = 'none';
const bonusButton2 = document.getElementById('bonus-round-2').style.display = 'none';
const bonusButton3 = document.getElementById('bonus-round-3').style.display = 'none';
const bonusButton4 = document.getElementById('bonus-round-4').style.display = 'none';

/*----- eventlisteners -----*/

document.getElementById('boardOne').addEventListener('click', handleClick)
document.getElementById('boardTwo').addEventListener('click', handleClick)
document.getElementById('boardThree').addEventListener('click', handleClick)
document.getElementById('bonusBoardOne').addEventListener('click', handleClick)
document.getElementById('bonusBoardTwo').addEventListener('click', handleClick)



/*----- (button) eventlisteners -----*/

document.getElementById("secret-start").addEventListener('click', secretStart)
document.getElementById('round-1').addEventListener('click', boardOne)
document.getElementById('round-2').addEventListener('click', boardTwoF)
document.getElementById('round-3').addEventListener('click', boardThree)

/*----- bonus buttons -----*/

document.getElementById('bonus-button').addEventListener('click', bonusOne)

//need to add functions
document.getElementById('bonus-round-2').addEventListener('click', bonusTwo)
//const bonusButton3 = document.getElementById('bonus-round-3').addEventListener('click', bonusOne)
//const bonusButton4 = document.getElementById('bonus-round-4').addEventListener('click', bonusOne)



/*----- functions -----*/

function handleClick(evt) {
    console.log(evt.target.id);
    if (evt.target.id === 'winning-cell') {
        winningCell()
    } else if (evt.target.className === 'cell') {
        wrongCell()
    } 
    if (evt.target.id === 'winning-cell-2') {
        console.log('hi');
        winningCell2()
    } else if (evt.target.className === 'cell2') {
        wrongCell2()
    } 
    if (evt.target.id === 'winning-cell-3') {
        winningCell3()
    } else if (evt.target.className === 'cell3') {
        wrongCell3()
    } 
    if (evt.target.id === 'winning-cell-4') {
        winningCell4()
    } else if (evt.target.className === 'cell4') {
        wrongCell4()
    } 
    if (evt.target.id === 'winning-cell-5') {
        winningCell5()
    } else if (evt.target.className === 'cell5') {
        wrongCell5()
    } 


}


function secretStart() {
    document.getElementById('round-1').style.display = 'inline';
    document.getElementById('message').innerHTML = 'Spot the Difference';
}

function boardOne() {
    console.log('hideboard')
        document.getElementById('boardOne').style.display = 'grid';
        document.getElementById('round-1').style.display = 'none';
        document.getElementById('player-score').style.display = 'inline';
        document.getElementById('player-score').innerHTML = 'Score 0/3';
}

function boardTwoF()   { 
    console.log('b2')
    document.getElementById('boardOne').style.display = 'none';
    document.getElementById('round-2').style.display = 'none';
    document.getElementById('boardTwo').style.display = 'grid';
    document.getElementById('message').innerHTML = 'Spot the Difference';
}

function boardThree() {
    document.getElementById('message').innerHTML = 'Spot the Difference';
    document.getElementById('boardTwo').style.display = 'none';
    document.getElementById('round-3').style.display = 'none';
    document.getElementById('boardThree').style.display = 'grid';
}

function bonusOne() {
    document.getElementById('message').innerHTML = 'Color Blind?';
    const bonusBoard1 = document.getElementById('bonusBoardOne').style.display = 'grid';
    document.getElementById('boardTwo').style.display = 'none';
    document.getElementById('round-3').style.display = 'none';
    document.getElementById('boardThree').style.display = 'none';
    document.getElementById('bonus-message').style.display = 'none';
    document.getElementById('try-again').style.display = 'none';
}
function bonusTwo() {
    document.getElementById('message').innerHTML = 'Cat';
    document.getElementById('bonusBoardTwo').style.display = 'grid';
    document.getElementById('boardTwo').style.display = 'none';
    document.getElementById('round-3').style.display = 'none';
    document.getElementById('boardThree').style.display = 'none';
    document.getElementById('bonus-message').style.display = 'none';
    document.getElementById('try-again').style.display = 'none';
    document.getElementById('bonus-round-2').display = 'inline'
}

    function winningCell() {
        console.log('hi')
        document.getElementById('message').innerHTML = 'Correct';
        document.getElementById('winning-cell').style.backgroundColor = 'white';
        document.getElementById('boardOne').style.display = 'none';
        document.getElementById('round-2').style.display = 'inline';
        document.getElementById('round-1').style.display = 'none';
        document.getElementById('player-score').innerHTML = 'Score 1/3';

        } 
        
        function winningCell2() {
            document.getElementById('message').innerHTML = 'Correct';
            document.getElementById('boardTwo').style.display = 'none';
            document.getElementById('round-3').style.display = 'inline';
            document.getElementById('player-score').innerHTML = 'Score 2/3';
        }

        function winningCell3() {
            document.getElementById('message').innerHTML = 'Congrats, you won';
            document.getElementById('boardThree').style.display = 'none';
            document.getElementById('winning-cell-3').style.backgroundColor = 'white';
            document.getElementById('boardThree').style.backgroundColor = 'white';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('player-score').innerHTML = 'Score 3/3';
            document.getElementById('bonus-message').style.display = 'inline';
        }

        function wrongCell() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('boardOne').style.display = 'none';
            document.getElementById('try-again').style.display = 'inline';
            document.getElementById('round-1').style.display = 'none';
            document.getElementById('round-2').style.display = 'none';
        }
        function wrongCell2() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardTwo').style.display = 'none';
        
        }

        function wrongCell3() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardThree').style.display = 'none';
        
        }

        function winningCell4() {
            document.getElementById('message').innerHTML = 'Spot the Difference';
            document.getElementById('boardThree').style.display = 'none';
            document.getElementById('winning-cell-3').style.backgroundColor = 'white';
            document.getElementById('boardThree').style.backgroundColor = 'white';
            document.getElementById('try-again').style.display ='none';
            document.getElementById('player-score').innerHTML = 'Score 4/3';
            document.getElementById('bonus-message').style.display = 'none';
            document.getElementById('bonusBoardOne').style.display = 'none';
            document.getElementById('bonusBoardTwo').style.display = 'grid';
        }
        function wrongCell4() {
            document.getElementById('wrong-answer').innerHTML = 'Wrong Answer';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardThree').style.display = 'none';
            document.getElementById('bonusBoardOne').style.display = 'none';
            document.getElementById('message').style.display = 'none';
        }
        function winningCell5() {
            document.getElementById('message').innerHTML = 'You win';
            document.getElementById('boardThree').style.display = 'none';
            document.getElementById('winning-cell-3').style.backgroundColor = 'white';
            document.getElementById('boardThree').style.backgroundColor = 'white';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('player-score').innerHTML = 'Score 5/3';
            document.getElementById('bonus-message').style.display = 'none';
            document.getElementById('bonusBoardOne').style.display = 'none';
            document.getElementById('bonusBoardTwo').style.display = 'none';
        }
        function wrongCell5() {
            document.getElementById('wrong-answer').innerHTML = 'Its French';
            document.getElementById('player-score').style.display = 'none';
            document.getElementById('try-again').style.display ='inline';
            document.getElementById('boardThree').style.display = 'none';
            document.getElementById('bonusBoardOne').style.display = 'none';
            document.getElementById('message').style.display = 'none';
            document.getElementById('bonusBoardTwo').style.display = 'none';
        }
        