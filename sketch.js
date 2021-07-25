var form, player, game, database,gameState = 0,playerCount = 0,allPlayers;
var jet1,jet2,jetimg1,jetimg2,bckgimage;
var index=0;
var x1 = 300, y1 = 200, x2 = 600 , y2 = 200,r1 = 0, r2 = 0;
var bulletimg, bullet1,bullet2, bulletfimg,bulletf, bulletExists = 0;
var scState=1, name1,name2, sc1 = 0,sc2 = 0,score1 = 0,score2 = 0;
var b1x,b1y,b2x,b2y, block;


function preload(){
  jetimg2 = loadImage("images/jet2.png");
  jetimg1 = loadImage("images/jet1.png");
  bckgimage = loadImage("images/background.jpg");
  bulletimg = loadImage("images/bullet.png")
bulletfimg = loadImage("images/bulletf.png")

}

function setup() {
  createCanvas(800,800 );
  database = firebase.database();
  gameState = 0;

  game = new Game();
  game.start();

  game.getState();

  

}

function draw() {
  background(0,0,0);
  
console.log(player.by,player.bx)
database.ref("playernull").remove()

  player.getCount();
  game.getState();
  
  


  
  if(playerCount === 2){
     game.updateState(1)
  }

  if(gameState=== 1){
    game.play();
    player.updatePos();
  player.getPos()
  jet1.rotation = r1;
  jet2.rotation = r2;
  jet1.x = x1;
  jet1.y = y1;
  jet2.x = x2;
  jet2.y = y2;
  bullet1.rotation = r1;
  bullet2.rotation = r2;
  bullet1.x = b1x;
  bullet1.y = b1y;
  bullet2.x = b2x;
  bullet2.y = b2y;

  if(jet2.visible === false && player.index ===2){
    textSize(40)
    fill('white')
            text("Please Click on Space Bar",400,400)
  }
  if(jet1.visible === false && player.index ===1){
    textSize(40)
    fill('white')

    text("Please Click on Space Bar",400,400)
  }
 // player.bx = player.xpos;
  //player.by = player.ypos

  
  
  

  if(player.rotate === 0){
    player.by=player.by- 5
    player.updatePos();
    //console.log("one")
  }
  if(player.rotate === 90){
    player.bx=player.bx + 5;
    player.updatePos()
    //console.log("two")

  }
  if(player.rotate === 180){
    player.by= player.by+ 5;
    player.updatePos()
    //console.log("three")

  }
  if(player.rotate === 270){
    player.bx= player.bx-5;
    player.updatePos();
    //console.log("four")
 }


if(bullet1.isTouching(jet2)){
  console.log("bullet1 hits jet2",sc1,scState);
  if(scState===0){
    player.score +=1;
    sc1+=1
    scState = 1;
    player.updatePos()
  } 

} 

if(bullet2.isTouching(jet1)){
  console.log("bullet2 hits jet1",sc2,scState);
  if(scState===0){
    player.score +=1;
    sc2+=1
    scState = 1
    player.updatePos()

} 

}

database.ref("players/player1/name").once("value", function(data){
  name1 = data.val()
 })
 database.ref("players/player2/name").once("value", function(data){
  name2 = data.val()
 })
 database.ref("players/player1/score").once("value", function(data){
  score1 = data.val()
 })
 database.ref("players/player2/score").once("value", function(data){
  score2 = data.val()
 })

  

  
}
}