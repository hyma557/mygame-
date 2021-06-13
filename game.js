class Game {
    constructor() { }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        
    }

    play() {
        form.hide()
        bg = createSprite(width / 2, height / 2)
        bg.addImage(bgi)
        bg.scale = 1.15
        bg.velocityX = -2

        tank1 = createSprite(width / 2 - 550, height - 200, 50, 50);
         tank1.addImage(tank1I)
         tank1.scale = 0.5

        var tank1position = database.ref("tank1/position")
        tank1position.on("value", readPosition, showError)

         tank2 = createSprite(width - 100, height - 200, 50, 50);
         tank2.addImage(tank2I)
         tank2.scale = 0.5

         var tank2position = database.ref("tank2/position")
         tank2position.on("value", readPosition2, showError)

         tanks = [tank1, tank2]

         if(bg.x < 500){
            bg.x = width/2
          }
          if(position !== undefined){
            if(keyDown("D")||keyDown("d")){
              setPosition(0, 10)
            }
          
            if(keyDown("A")||keyDown("a")){
              setPosition(0, -10)
            }
          
            if(keyDown(RIGHT_ARROW)){
              writePosition(10, 0)
            }
          
            if(keyDown(LEFT_ARROW)){
              writePosition(-10, 0)
            }
          }

            

            function showError(){
              console.log("message")
            }

            function readPosition2(data){
              position = data.val();
              tank2.x = position.x
              
            }

            function readPosition(data){
              position = data.val();
              tank1.x = position.x
            }

            function  writePosition(x) {
              database.ref("tank2/position").set({
                "x": position.x += x
              })
            }
        
            function  setPosition(x){
              database.ref("tank1/position").set({
                "x": position.x += x
              })
            }

            
           

            drawSprites()

    }

/*writePosition() {
      database.ref("tank2/position").set({
        'x': position.x + x
      })
    }

    setPosition(){
      database.ref("tank1/position").set({
        'x': position.x + x
      })
    }*/

     
    
     

   
}