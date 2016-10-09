
var lastKey1 = 'x';
var lastKey2 = '.';

var $sprite1 = $('.sprite1');
var $sprite2 = $('.sprite2');

var counter1 = "0";
var counter2 = "0";


$(document).on('keyup', function(e) {
  //------------player 1's movements-----------
  if(e.key === 'z' && lastKey1 === 'x') {
    var left = parseFloat($sprite1.css("left"));
    $sprite1.css("left", (left + 10) + "px");
    lastKey1 = 'z';
    counter1 = parseFloat(counter1+10);
  } else if(e.key === 'x' && lastKey1 === 'z') {
    var left = parseFloat($sprite1.css("left"));
    $sprite1.css("left", (left + 10) + "px");
    lastKey1 = 'x';
    counter1 = parseFloat(counter1+10);
    console.log(counter1);


    //------------player 2's movements-----------
  } else if(e.key === ',' && lastKey2 === '.') {
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



  var trumpWins = function() {
    if(counter1 === 100) {
      console.log("trump won");
      $(document).on('keyup', function(e) {
        if(e.key === 'z' && lastKey1 ==='x') {
          $sprite1.css(0);
          lastKey1 = 'z';
        }
      });
    }
  }

  trumpWins();




});
