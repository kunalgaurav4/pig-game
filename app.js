var scores, roundscore, activePlayer;

init();




document.querySelector('.dice').style.display = 'none';




document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1.Random number
    var dice = Math.floor(Math.random() * 6 + 1);
    Console.log(dice)


    //   2.display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3.Update round score if the rolled num is not 1
    if (dice !== 1) {
        // Add score
        roundscore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundscore;



    } else {
        // Next player
        nextPlayer();
    }

})

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add current score to global score
    scores[activePlayer] += roundscore;



    // Update ui 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]



    // check if player won game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('actove');

    } else {

        // Next player
        nextPlayer();

    }



})

function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// New Game

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundscore = 0;

    // document.querySelector("#current-" + activePlayer).textContent = dice;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    var P1 = prompt("Player-1 Name: ");
    document.querySelector('#name-0').textContent = P1;

    var P2 = prompt("Player-2 Name: ")
    document.querySelector('#name-1').textContent = P2;

}