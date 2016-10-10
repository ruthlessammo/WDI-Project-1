
var lastKey1 = 'x';
var lastKey2 = '.';

var $sprite1 = $('.sprite1');
var $sprite2 = $('.sprite2');

var counter1 = "0";
var counter2 = "0";

var trumpWins = '0'
var clintonWins = '0'


$(document).on('keyup', function(e) {
  //------------player 1's movements-----------
  if ($sprite1.hasClass('active')) {
    if(e.key === 'z' && lastKey1 === 'x') {
      var left = parseFloat($sprite1.css("left"));
      $sprite1.css("left", (left + 10) + "px");
      lastKey1 = 'z';
      $sprite1.toggleClass('.left1 .right1');
      counter1 = parseFloat(counter1+10);
    } else if(e.key === 'x' && lastKey1 === 'z') {
      var left = parseFloat($sprite1.css("left"));
      $sprite1.css("left", (left + 10) + "px");
      lastKey1 = 'x';
      counter1 = parseFloat(counter1+10);
      $sprite1.toggleClass('.right1 .left1')
      console.log(counter1);
    }
  }


  //------------player 2's movements-----------
  if($sprite2.hasClass('active')) {
    if(e.key === ',' && lastKey2 === '.') {
      var left = parseFloat($sprite2.css("left"));
      $sprite2.css("left", (left + 10) + "px");
      lastKey2 = ',';
      counter2 = parseFloat(counter2+10);
    } else if(e.key === '.' && lastKey2 === ',') {
      var left = parseFloat($sprite2.css("left"));
      $sprite2.css("left", (left + 10) + "px");
      lastKey2 = '.';
      counter2 = parseFloat(counter2+10);
      console.log(counter2);
    }
  }




  var getWinner = function() {
    if(counter1 === 100 || counter2 === 100) {
      $sprite1.removeClass('active') && $sprite2.removeClass('active');
      console.log('Winner!');
      if(counter1 === 100) {
        trumpWins++;
      } else if(counter2 === 100) {
        clintonWins++;
      }
      document.getElementsByClassName('.trumpResults').innerHTML = trumpWins; document.getElementsByClassName('.hillaryResults').innerHTML = clintonWins;
    }
  }
  getWinner();

});
