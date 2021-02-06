class Question {

  constructor() {
    //created properties for html elements
    this.answer = createInput("Type the answer here");
    this.name = createInput("Enter your name")

    this.title = createElement('h2');

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.question = createElement('h3');
    this.greeting = createElement('h2');

    this.button = createButton('Submit');
    
  }
  hide(){
this.title.hide();
this.name.hide();
this.button.hide();
this.answer.hide();
    
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,0);

    this.question.html("Question:-  A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?");
    this.question.position(150,80);

    this.option1.html("1.Grandfather");
    this.option1.position(150,100);

    this.option2.html("2.Grandmother");
    this.option2.position(150,120);

    this.option3.html("3.Uncle");
    this.option3.position(150,140);

    this.option4.html("4.Granddaughter");
    this.option4.position(150,160);

    this.button.position(290,350);

    this.answer.position(150,230);
    this.name.position(350,230);

    this.button.mousePressed(()=>{

      this.title.hide();

      //this.title.html("Result of the game");
      //this.title.position(350,0);

      this.answer.hide();
      this.button.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      this.name.hide();

      contestant.name = this.name.value();
      contestant.answer = this.answer.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    })
  }
}
