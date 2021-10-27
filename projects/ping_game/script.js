'use strict';

var scores, roundScore, activePlayer, gamePlaying, lastDice, scoreLoseThreshold;
scoreLoseThreshold = 6

init();

document.querySelector('.btn--roll').addEventListener('click', function() {

	if(gamePlaying){
		// 1. Random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


		// 3. Update the round score IF the rolled number was NOT a 1

		if(dice1 !== 1 && dice2 !==1){
			// Add score
			roundScore += dice1 + dice2;
			document.querySelector('#current--' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			nextPlayer();

		}
		/*
		if (dice === scoreLoseThreshold && lastDice == scoreLoseThreshold){
			// Player looses score
			scores[activePlayer] = 0;
			document.querySelector('#score--' + activePlayer).textContent = '0';
			nextPlayer(); 
		}else if(dice !== 1){
			// Add score
			roundScore += dice;
			document.querySelector('#current--' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			nextPlayer();

		}

		lastDice = dice;
		*/

	}
	
});

document.querySelector('.btn--hold').addEventListener('click', function() {

	if(gamePlaying){
		// Add Current score to Global score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

		var finalScore = document.querySelector('.final-score').value;
		var winningScore;

		// Undefined, 0, null or "" are COERCED to false
		// Anything else is COERCED to true
		if(finalScore) {
			winningScore = finalScore;
		}else{
			winningScore = 20;
		}

		// Check if player won the game
		if(scores[activePlayer] >= winningScore) {
			document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
			hideDice();
			document.querySelector('.player--' + activePlayer).classList.add('player--winner');
			document.querySelector('.player--' + activePlayer).classList.remove('player--active');
			gamePlaying = false;
		}else {
			// Next player
			nextPlayer();
		}
	}

});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current--0').textContent = '0 ';
	document.getElementById('current--1').textContent = '0';

	document.querySelector('.player--0').classList.toggle('player--active');
	document.querySelector('.player--1').classList.toggle('player--active');

	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.remove('active');

	hideDice();

}

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	hideDice();

	document.getElementById('score--0').textContent = '0';
	document.getElementById('score--1').textContent = '0';
	document.getElementById('current--0').textContent = '0';
	document.getElementById('current--1').textContent = '0';
	document.getElementById('name--0').textContent = 'Player 1';
	document.getElementById('name--1').textContent = 'Player 2';
	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--winner');
	document.querySelector('.player--0').classList.remove('player--active');
	document.querySelector('.player--1').classList.remove('player--active');
	document.querySelector('.player--0').classList.add('player--active');
}

function hideDice() {
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
