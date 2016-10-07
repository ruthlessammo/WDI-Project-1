
var lastKey1 = 'x';
var lastKey2 = '.';
var $sprite1 = $('.sprite1');
var $sprite2 = $('.sprite2');

$(document).on('keyup', function(e) {

  if(e.key === 'z' && lastKey1 === 'x') {
    var left = parseFloat($sprite1.css("left"));
    $sprite1.css("left", (left + 10) + "px");
    lastKey1 = 'z';
  } else if(e.key === 'x' && lastKey1 === 'z') {
    var left = parseFloat($sprite1.css("left"));
    $sprite1.css("left", (left + 10) + "px");
    lastKey1 = 'x'
  } else if(e.key === ',' && lastKey2 === '.') {
    var left = parseFloat($sprite2.css("left"));
    $sprite2.css("left", (left + 10) + "px");
    lastKey2 = ',';
  } else if(e.key === '.' && lastKey2 === ',') {
    var left = parseFloat($sprite2.css("left"));
    $sprite2.css("left", (left + 10) + "px");
    lastKey2 = '.';
  }
});
