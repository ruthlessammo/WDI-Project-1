
var lastKey1 = 'x';
var $sprite1 = $('.sprite1');

$(document).on('keyup', function(e) {

  if(e.key === 'z' && lastKey1 === 'x') {
    var left = parseFloat($sprite1.css("left"));
    $sprite1.css("left", (left + 10) + "px");
    lastKey1 = 'z';
  } else if(e.key === 'x' && lastKey1 === 'z') {
    var left = parseFloat($sprite1.css("left"));
    $sprite1.css("left", (left + 10) + "px");
    lastKey1 = 'x'
  }
});
