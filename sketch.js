var backgroundImage
var pl1
var pl2
var ground
var score=0
var pl1hp=100


function preload()
{ backgroundImage=loadImage("Bg.jpg")
pl1Image=loadImage("pl1img.png")


	
}

function setup() {
	createCanvas(1535,750);
pl1= createSprite(150,650,50,50)
pl1.addImage(pl1Image)
pl1.scale=3
pl1.debug=false
pl1.y=725
pl1.setCollider("rectangle",0,0,100,70)

pl2= createSprite(1385,650,50,50)
pl2.addImage(pl1Image)
pl2.scale=3
pl2.debug=false
pl2.y=725
pl2.setCollider("rectangle",0,0,100,70)
ground= createSprite(767,725,1535,40)

}


function draw() {
    background(backgroundImage);
    textSize(40)
    fill("orange")
    text(score,767.5,35)
  pl1.shapeColor="purple"
  console.log(pl1.y)
  score=Math.round(frameCount/61)
    if(keyDown("A")){
pl1.x-=6
  }
  pl1.collide(ground)
  pl2.collide(ground)
  if(keyDown("D")){
	pl1.x+=6
	  }

	  if(keyDown("space")&& pl1.y>=600){
		pl1.velocityY=-30
		  }
      pl1.velocityY= pl1.velocityY+2
      
      
      if(keyDown("left")){
        pl2.x-=6
          }
         
          if(keyDown("right")){
          pl2.x+=6
            }
        
            if(keyDown("up")&& pl2.y>=600){
            pl2.velocityY=-30
              }
              pl2.velocityY= pl2.velocityY+2

            text("HEALTH: "+pl1hp,150,35)
              if(pl1.isTouching(pl2)){
             pl1hp=pl1hp-0.1

              }
  drawSprites();
 
}



