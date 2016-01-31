// Start creating your game here

// Our 5 Main Components
var TableTop = require('tabletop-boardgames');
var Checkers = require('./checkers_game');
var CheckerBoard = require('./checkers_board');
var CheckerView = require('./checkers_view');

// create the Board and Game
var board = new CheckerBoard();
var checkers = new Checkers(board);

//create our startView
var startView = new TableTop.StartView(checkers);
var view = new CheckerView(checkers);
var nextPlayerView = new TableTop.NextPlayerView(checkers);
var gameOverView = new TableTop.GameOverView(checkers);

//create the turnmap
var turnMap = new TableTop.ManualTurn(checkers, startView, view, gameOverView, nextPlayerView);

checkers.setTurnMap(turnMap);

// this initiates the TurnMap ("Gameloop") and 
// gets the ball rolling!

checkers.subscribe(function(message) {
    var div = document.getElementById("messages");
    div.innerHTML = div.innerHTML.concat("<br>" + message);
});

checkers.updateState("start");