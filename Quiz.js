class Quiz {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();

      //using "once()" instead of "on()" becoz we want it to listen changes only once instead of continuously
      var contestantCountRef = await database.ref('contestantCount').once("value")
      
      if(contestantCountRef.exists()){

        contestantCount = contestantCountRef.val();
        contestant.getCount();

      }

      question = new Question();
      question.display();
    }
  }

     play(){

      question.hide();
      background("yellow");
fill(0)
textSize(30)
text("Result of the Quiz",340,65)
text("---------------------------",320,80)
      Contestant.getContestantInfo();

if(allContestants !== undefined){
 var display_Answers = 230;
  fill("blue")
  textSize(20)
  text("*Note:- Green color indicates the correct answers")

      for(var plr in allContestants){
        var correctAns = "4";
        if(correctAns === allContestants[plr].answer)
        fill("green")
        else
          fill("red");

display_Answers+=30;
textSize(20)
text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
      
}
      
    }
  

}


