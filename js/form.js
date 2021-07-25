class Form{
  constructor(){
  this.title = createElement("h1");
  this.input = createInput().attribute("placeholder", "Enter your name");
  this.button = createButton("Play");
  this.greeting = createElement("h5");
  this.resetbutton = createButton("Reset");


  }

  display(){
      fill('black')
    this.title.position(400,50);
    this.title.html("FighterJet Game")
    this.input.position(400,200);
    this.button.position(400,250);
    this.resetbutton.position(400,750);

    this.button.mousePressed(()=> {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1
        player.index = playerCount;
        player.setPlayerChild();
        player.updateCount(playerCount);
        this.greeting.position(400,100);
        this.greeting.html("Welcome to 'FighterJet Game'.")
        console.log("play clicked", playerCount)

    })   
     
    this.resetbutton.mousePressed(()=>{
      game.updateState(0);
      player.updateCount(0);
      database.ref("players").remove()
      location.reload()
    })
    
  }

  hide(){

    this.title.hide();
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }



}