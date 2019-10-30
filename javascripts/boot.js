$(function() {
  var game;
  
  $('#chart').hide();
  $("#newGame").bind("click", function() {
    if (game) {
      game.destroy();
    }
    game = new Game({shotsPerIteration: $("#shotsPerIteration").val()});
    new GameView({model: game}).render();
  });
});