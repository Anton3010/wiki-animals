$(document).ready(function() {
  var animals = parseInt(prompt("Select an aninal of your choice in numbers: 1 - Turtles, 2 - Snakes, 3 - Insects"));

  if (animals === 1) {
    $(".turtles").show();
  } else if (animals === 2) {
    $(".snakes").show();
  } else if (animals === 3) {
    $(".insects").show();
  }

});
