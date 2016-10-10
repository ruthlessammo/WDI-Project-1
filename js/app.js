
var lastKey1 = 'x';
var lastKey2 = '.';

var $sprite1 = $('.sprite1');
var $sprite2 = $('.sprite2');

var counter1 = 0;
var counter2 = 0;

var trumpWins = 0;
var clintonWins = 0;

var raceInProgress = true;

var getWinner = function() {
  var winningScore = 60;
  var trumpResultsElements;
  var hillaryResultsElements;

  if(counter1 === winningScore || counter2 === winningScore) {
    raceInProgress = false;
    console.log('Winner!');
    if(counter1 === winningScore) {
      trumpWins++;
    } else if(counter2 === winningScore) {
      clintonWins++;
    }
    
    trumpResultsElements = document.getElementById('trumpResults');
    trumpResultsElements.textContent = trumpWins;
    hillaryResultsElements = document.getElementById('hillaryResults');
    hillaryResultsElements.textContent = clintonWins;
  }
};

$(document).on('keyup', function(e) {
  //------------player 1's movements-----------
  if (raceInProgress) {
    if(e.key === 'z' && lastKey1 === 'x') {
      var left = parseFloat($sprite1.css("left"));
      $sprite1.css("left", (left + 10) + "px");
      lastKey1 = 'z';
      $sprite1.toggleClass('left1').toggleClass('right1');
      counter1 = parseFloat(counter1+10);
    } else if(e.key === 'x' && lastKey1 === 'z') {
      var left = parseFloat($sprite1.css("left"));
      $sprite1.css("left", (left + 10) + "px");
      lastKey1 = 'x';
      counter1 = parseFloat(counter1+10);
      $sprite1.toggleClass('left1').toggleClass('right1');
      console.log(counter1);
    }
    if(e.key === ',' && lastKey2 === '.') {
      var left = parseFloat($sprite2.css("left"));
      $sprite2.css("left", (left + 10) + "px");
      lastKey2 = ',';
      $sprite2.toggleClass('left2').toggleClass('right2');
      counter2 = parseFloat(counter2+10);
    } else if(e.key === '.' && lastKey2 === ',') {
      var left = parseFloat($sprite2.css("left"));
      $sprite2.css("left", (left + 10) + "px");
      lastKey2 = '.';
      $sprite2.toggleClass('left2').toggleClass('right2');
      counter2 = parseFloat(counter2+10);
      console.log(counter2);
    }
    getWinner();
  }





  // var cheering = document.getElementById('cheering');
  // cheering.src= "../audio/cheering.mp3";
  // cheering.addEventListener('keydown', function() {
  //   cheering.play();
  // });
  // cheering();
});
