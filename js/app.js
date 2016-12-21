
let lastKey1 = 'x';
let lastKey2 = '.';

const $sprite1 = $('.sprite1');
const $sprite2 = $('.sprite2');

let counter1 = 0;
let counter2 = 0;

let trumpWins = 0;
let clintonWins = 0;

let count = 3;
const timer = setInterval(countDown, 1000);


function countDown() {
  if(count === 0) {
    clearInterval(timer);
    $('#countdown').html('GO!');
    //endCountdown();
  } else {
    $('#countdown').html(count);
    count--;
  }
}


const trumpSpeech = document.getElementById('trumpWinningSpeech');
trumpSpeech.src = 'audio/trump1.mp3';

const hillarySpeech = document.getElementById('hillaryWinningSpeech');
hillarySpeech.src = 'audio/hillary2.mp3';

const cheering = document.getElementById('cheering');
cheering.src = 'audio/cheering2.wav';

let raceInProgress = true;

const startCheering = function() {
  cheering.play();
};

const stopCheering = function() {
  cheering.pause();
};

const initializeSprites = document.getElementById('reset');
initializeSprites.addEventListener('click', function() {
  $sprite1.css('left', 0);
  $sprite2.css('left', 0);
  raceInProgress = true;
  counter1 = 0;
  counter2 = 0;

});


const getWinner = function() {
  const winningScore = 1050;
  let trumpResultsElements;
  let hillaryResultsElements;

  if(counter1 === winningScore || counter2 === winningScore) {
    raceInProgress = false;
    console.log('Winner!');
    stopCheering();
    if(counter1 === winningScore) {
      trumpWins++;
      trumpSpeech.play();
    } else if(counter2 === winningScore) {
      clintonWins++;
      hillarySpeech.play();
    }

    trumpResultsElements = document.getElementById('trumpResults');
    trumpResultsElements.textContent = trumpWins;
    hillaryResultsElements = document.getElementById('hillaryResults');
    hillaryResultsElements.textContent = clintonWins;
  }
};

$(document).on('keyup', function(e) {

  if (raceInProgress) {
    if(e.key === 'z' && lastKey1 === 'x') {
      const left = parseFloat($sprite1.css('left'));
      $sprite1.css('left', (left + 10) + 'px');
      lastKey1 = 'z';
      $sprite1.toggleClass('left1').toggleClass('right1');
      counter1 = counter1+10;
    } else if(e.key === 'x' && lastKey1 === 'z') {
      const left = parseFloat($sprite1.css('left'));
      $sprite1.css('left', (left + 10) + 'px');
      lastKey1 = 'x';
      counter1 = counter1+10;
      $sprite1.toggleClass('left1').toggleClass('right1');
      console.log(counter1);
    }
    if(e.key === ',' && lastKey2 === '.') {
      const left = parseFloat($sprite2.css('left'));
      $sprite2.css('left', (left + 10) + 'px');
      lastKey2 = ',';
      $sprite2.toggleClass('left2').toggleClass('right2');
      counter2 = counter2+10;
    } else if(e.key === '.' && lastKey2 === ',') {
      const left = parseFloat($sprite2.css('left'));
      $sprite2.css('left', (left + 10) + 'px');
      lastKey2 = '.';
      $sprite2.toggleClass('left2').toggleClass('right2');
      counter2 = counter2+10;
      console.log(counter2);
    }
    startCheering();
    getWinner();
  }
  
});
