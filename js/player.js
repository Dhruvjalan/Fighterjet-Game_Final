class Player{
    constructor(){
        this.name = null;
        this.score = 0;
        this.distance = 0;
        this.index  = null;
        this.xpos = 300;
        this.ypos = 200;
        this.rotate = 0;
        this.bx = this.xpos
        this.by = this.ypos;
       
    }

    updatePos(){
      if(this.index!==null){
      database.ref("players/player"+this.index).update({
        xpos: this.xpos,
        ypos: this.ypos,
        rotate: this.rotate,
        bx: this.bx,
        by: this.by,
        score: this.score
        
      

      })
    }
    }

    getPos(){
      database.ref("players/player1/xpos").on("value",(data)=>{
        x1 = data.val()
      })
      database.ref("players/player1/ypos").on("value",(data)=>{
        y1 = data.val()
      })
      database.ref("players/player2/xpos").on("value",(data)=>{
        x2 = data.val() + 300
      })
      database.ref("players/player2/ypos").on("value",(data)=>{
        y2 = data.val()
      })
      database.ref("players/player1/rotate").on("value",(data)=>{
        r1 = data.val()
      })
      database.ref("players/player2/rotate").on("value",(data)=>{
        r2 = data.val()
      })
      //
      database.ref("players/player1/bx").on("value",(data)=>{
        b1x= data.val()
      })
      database.ref("players/player1/by").on("value",(data)=>{
        b1y= data.val()
      })
      database.ref("players/player2/bx").on("value",(data)=>{
        b2x = data.val() +300 
      })
      database.ref("players/player2/by").on("value",(data)=>{
        b2y = data.val()
      })
      
    }
  
    updateCount(value){
      database.ref("/").update({
        playerCount: value
      })
    }

    getCount(){
      database.ref("playerCount").once("value",(data)=>{
      playerCount = data.val();
      })
    }

    setPlayerChild(){
      if(player.index!==null){
      database.ref("players/player"+this.index).set({
        name: this.name,
        score: this.score,
        xpos: this.xpos,
        ypos: this.ypos,
        rotate: this.rotate,
        bx: this.bx,
        by: this.by,
        
      })

    
    }
  }

    static information(){
      database.ref("players").on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }