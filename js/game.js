class Game{
    constructor(){
        
    }

    
    getState(){
      database.ref("gameState").once("value",(data)=>{
      gameState = data.val();
      })
    }

    updateState(value){
      database.ref("/").update({
        gameState: value
      })
    }

    async start(){
     if(gameState === 0){
       player = new Player();

       var playerRef = await database.ref("playerCount").once("value")

       if(playerRef.exists()){
          playerCount = playerRef.val();
          player.getCount()
       }

       form = new Form();
       form.display();
     } 

     bullet1 = createSprite(2000,2000,10,10);
     bullet1.addImage(bulletimg)
      bullet1.scale = 0.05;
      bullet1.visible = false
    
      bullet2 = createSprite(2000,2000,10,10);
      bullet2.addImage(bulletimg);
      bullet2.scale = 0.05;
      bullet2.visible = false
    

     jet1 = createSprite(x1,y1,50,50);
     jet1.addImage(jetimg1)
     jet1.visible = false
     jet2 = createSprite(x2,y2,50,50);
     jet2.addImage(jetimg2)
     jet2.scale = 0.78;
     jet2.visible = false

   var w = 100
   //  block = createSprite(600,200,10,140)

    
     background("black")
    }

    play(){

      form.hide();
      Player.information();
      drawSprites();

      if(allPlayers!== undefined){
        //background(bckgimage)

        for(var plr in allPlayers){
          index+=1;
          if(keyDown('space')){}
            //console.log(allPlayers[plr].xpos)
            if(player.index === 1){
              textSize(30)
          fill("red")
          text (name1+" (You): "+ score1,300,80)
          fill ("white")
          text (name2+": "+ score2,600,80)
              }

              if(player.index === 2){
                 textSize(30)
              console.log("index === 2, text2 function")
              textSize(30)
              fill("white")
              text (name1+": "+ score1,300,80)
              fill ("red")
              text (name2+" (You): "+ score2,600,80)
              }
          

          
          //console.log(allPlayers);

        }

        if(keyDown(UP_ARROW)){
          player.xpos = player.xpos
          player.ypos = player.ypos-5 
          console.log("ypos= "+this.ypos)
          player.updatePos()
          jet1.x = x1;
          jet1.y = y1;
          jet2.x = x2;
          jet2.y = y2;
          if(keyWentDown('r')){}        

          
        }if(keyDown(DOWN_ARROW)){
          player.xpos = player.xpos
          player.ypos = player.ypos+5
          console.log("ypos= "+this.ypos)
          player.updatePos() 
          player.getPos()   ;
          jet1.x = x1;
          jet1.y = y1;
          jet2.x = x2;
          jet2.y = y2;
          if(keyWentDown('r')){}        
      
        }if(keyDown(LEFT_ARROW)){
          player.xpos = player.xpos-5
          player.ypos = player.ypos
          console.log("xpos= "+this.xpos)
          player.updatePos()  
          player.getPos();
          jet1.x = x1;
          jet1.y = y1;
          jet2.x = x2;
          jet2.y = y2;
         
     
        }if(keyDown(RIGHT_ARROW)){
          player.xpos = player.xpos+5
          player.ypos = player.ypos
          console.log("xpos= "+this.xpos)
          player.updatePos()      
          player.getPos();
          jet1.x = x1;
          jet1.y = y1;
          jet2.x = x2;
          jet2.y = y2;
             
        }

        if(keyDown(UP_ARROW)&& keyDown('r')){
          angleMode(DEGREES)
          console.log('rotate up')
          player.rotate = 0
          player.updatePos() 
          angleMode(DEGREES)
          jet1.rotation = r1
          jet2.rotation = r2
        }  

        if(keyDown(DOWN_ARROW)&& keyDown('r')){
          angleMode(DEGREES)
          console.log('rotate down')
          player.rotate = 180;
          angleMode(DEGREES)
          player.updatePos() 
          jet1.rotation = r1
          jet2.rotation = r2
        }
        if(keyDown(LEFT_ARROW)&& keyDown('r')){
          angleMode(DEGREES)
          player.updatePos() 
          console.log('rotate left')
          player.rotate = 270;
          player.updatePos() 
          angleMode(DEGREES)

          jet1.rotation = r1
          jet2.rotation = r2
        }
        if(keyDown(RIGHT_ARROW)&& keyDown('r')){
          angleMode(DEGREES)
          player.updatePos() 
          console.log('rotate right')
          player.rotate = 90
          player.updatePos() 
          angleMode(DEGREES)
          jet1.rotation = r1
          jet2.rotation = r2
        }

        if(keyDown('space')){
           
            scState = 0

            
            player.bx = player.xpos;
            player.by = player.ypos

            bullet1.x = x1;
            bullet1.y = y1;
            bullet2.x = x2;
            bullet2.y = y2;
            angleMode(DEGREES);
            player.updatePos() 
            bullet1.rotaion = r1;
            console.log(r1)
            bulletExists = 1
            player.updatePos() 
            angleMode(DEGREES)
            bullet2.rotaion = r2;
            console.log(r2);
            bulletExists = 1;
              if(player.index === 1){
                bullet1.addImage(bulletimg);
                bullet2.addImage(bulletfimg)
                
               bullet1.visible = true
              bullet2.visible = true
              console.log("u r 1")   ;
              jet1.visible = true
              jet2.visible = true
             
              

              } else if(player.index === 2){
                bullet2.addImage(bulletimg);
                bullet1.addImage(bulletfimg);
                console.log("u r 2")              
            bullet1.visible = true
              bullet2.visible = true
              jet2.visible = true
              jet1.visible = true


              }
              





              
        }
               
       
      }

    }
  
  }