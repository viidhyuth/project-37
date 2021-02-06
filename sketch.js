var canvas;
var gameState = 0;
var contestantCount,database,quiz;
var question,contestant;
var allContestants;

function setup(){
  canvas = createCanvas(1500,500);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){

    quiz.update(1);
  }

  if(gameState===1){

    //clearing the screen
    clear();

   quiz.play();
  }
  
}
