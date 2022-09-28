
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var chao1,chao2,chao3,chao4,chao5,chao6,chao7,chao8,chao9,chao10;
var chao11,chao12,chao13,chao14,chao15,chao16,chao17,chao18,chao19,chao20;
var chao21,chao22,chao23,chao24,chao25,chao26;
var labirintogp;
var mistica, misticaimg;
var fogo1, fogo2, fogo3, fogo4, fogo5, fogo6, fogoimg;
var fogogp, gameOver, gameOverimg;


function preload()
{
	misticaimg = loadImage("mistica.png")
	fogoimg = loadImage("fogo1.png")
	gameOverimg = loadImage("gameOver.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
		//x, y, largura, altura
	//Crie os Corpos aqui.


	chao25 = createSprite (1250, 300, 120, 20)
		chao25.shapeColor = "black"

	chao1 = createSprite (10, 10, 3000, 20)
		chao1.shapeColor = "midnightBlue"
	chao2 = createSprite (10, 100, 300, 20)
		chao2.shapeColor = "navy"
	chao3 = createSprite (275, 175, 20, 155)
		chao3.shapeColor = "cornflowerblue"
	chao4 = createSprite (10, 390, 20, 600)
		chao4.shapeColor = "darkslateblue"
	chao5 = createSprite (10, 689, 3000, 20)
		chao5.shapeColor = "slateblue"
	chao6 = createSprite (1490, 10, 20, 1150)
		chao6.shapeColor = "mediumslateblue"
	chao7 = createSprite (201, 250, 170, 20)
		chao7.shapeColor = "#436EEE"
	chao8 = createSprite (400, 175, 20, 350)
		chao8.shapeColor = "mediumBlue"
	chao9 = createSprite (310, 351, 200, 20)
		chao9.shapeColor = "royalblue"
	chao10 = createSprite (110, 325, 20, 290)
		chao10.shapeColor = "blue"
	chao11 = createSprite (380, 590, 555, 20)
		chao11.shapeColor = "dodgerblue"
	chao12 = createSprite (320, 460, 400, 20)
		chao12.shapeColor = "deepskyblue"
	chao13 = createSprite (510, 295, 20, 350)
		chao13.shapeColor = "skyblue"
	chao14 = createSprite (650, 120, 300, 20)
		chao14.shapeColor = "lightskyblue"
	chao15 = createSprite (790, 395, 20, 568)
		chao15.shapeColor = "steelblue"
	chao16 = createSprite (650, 400, 20, 400)
		chao16.shapeColor = "lightsteelblue"
	chao17 = createSprite (900, 250, 20, 500)
		chao17.shapeColor = "lightblue"
	chao18 = createSprite (1000, 595, 220, 20)
		chao18.shapeColor = "powderblue"
	chao19 = createSprite (1100, 350, 20, 510)
		chao19.shapeColor = "paleturquoise"
	chao20 = createSprite (1000, 300, 20, 400)
		chao20.shapeColor = "darkturquoise"
	chao21 = createSprite (1140, 100, 300, 20)
		chao21.shapeColor = "mediumturquoise"
	chao22 = createSprite (1390, 340, 20, 500)
		chao22.shapeColor = "turquoise"
	chao23 = createSprite (1300, 290, 20, 400)
		chao23.shapeColor = "cyan"
	chao24 = createSprite (1200, 450, 20, 500)
		chao24.shapeColor = "lightcyan"
	chao26 = createSprite (1395, 580, 210, 20)
		chao26.shapeColor = "aquamarine"

	mistica = createSprite(40, 55, 50, 50)	
	mistica.addImage(misticaimg)
	mistica.scale = 0.25
	mistica.setCollider("rectangle", 0, 0, 100,200)


	labirintogp = new Group()
	labirintogp.add(chao1)
	labirintogp.add(chao2)
	labirintogp.add(chao3)
	labirintogp.add(chao4)
	labirintogp.add(chao5)
	
	labirintogp.add(chao6)
	labirintogp.add(chao7)
	labirintogp.add(chao8)
	labirintogp.add(chao9)
	labirintogp.add(chao10)
	labirintogp.add(chao11)
	labirintogp.add(chao12)
	labirintogp.add(chao13)
	labirintogp.add(chao14)
	labirintogp.add(chao15)
	labirintogp.add(chao16)
	labirintogp.add(chao17)
	labirintogp.add(chao18)
	labirintogp.add(chao19)
	labirintogp.add(chao20)
	labirintogp.add(chao21)
	labirintogp.add(chao22)
	labirintogp.add(chao23)
	labirintogp.add(chao24)
	labirintogp.add(chao25)
	labirintogp.add(chao26)

	//labirintogp.setColorEach("#412369")

	fogogp = new Group()

	gameOver = createSprite(650, 50, 100, 10)
	gameOver.addImage (gameOverimg)
	gameOver.visible = false

	Engine.run(engine);
  
	fogo1 = createSprite(30,315,50,50); 
	fogo2 = createSprite(433,160,50,50); 
	fogo3 = createSprite(930,160,50,50); 
	fogo4 = createSprite(1132,315,50,50); 
	fogo5 = createSprite(1335,430,50,50); 
	fogo6 = createSprite(670,395,50,50);

	fogo1.addImage(fogoimg)
	fogo2.addImage(fogoimg)
	fogo3.addImage(fogoimg)
	fogo4.addImage(fogoimg)
	fogo5.addImage(fogoimg)
	fogo6.addImage(fogoimg)

	fogo1.scale = 0.1
	fogo2.scale = 0.1
	fogo3.scale = 0.1
	fogo4.scale = 0.1
	fogo5.scale = 0.1
	fogo6.scale = 0.1
	
	fogo1.velocityX = 0.8
	fogo2.velocityX = 0.8
	fogo3.velocityX = 0.8
	fogo4.velocityX = 0.8
	fogo5.velocityX = 0.8
	fogo6.velocityX = 0.8
	

	fogo1.setCollider("circle", 0, 0, 10)
	fogo2.setCollider("circle", 0, 0, 10)
	fogo3.setCollider("circle", 0, 0, 10)
	fogo4.setCollider("circle", 0, 0, 10)
	fogo5.setCollider("circle", 0, 0, 10)
	fogo6.setCollider("circle", 0, 0, 10)

	fogogp.add(fogo1)
	fogogp.add(fogo2)
	fogogp.add(fogo3)
	fogogp.add(fogo4)
	fogogp.add(fogo5)
	fogogp.add(fogo6)

}


function draw() {
  rectMode(CENTER);
  background(0);

  if(mistica.x >= 1500){
	textAlign(CENTER,TOP)
	textSize(60)
	fill(	"white")
	text("Você Ganhou!!", 650, 50)

	fogogp.setVelocityXEach(0)
	
}

  if(mistica.isTouching(labirintogp)){
	  mistica.x = 40
	  mistica.y = 55
  }

  if(mistica.isTouching(fogogp)){
	  mistica.destroy()
	  gameOver.visible = true
	  fogogp.setVelocityXEach(0)
  }

  obstacle()
  move()
  drawSprites();
  //text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
}

function move(){
	//if(keyIsDown(UP_ARROW)|| keyDown ("w") ){
	//	mistica.y -= 3
	//}
	//if(keyIsDown(LEFT_ARROW)|| keyDown ("a") ){
	//	mistica.y = 3	
	//}


mistica.velocityY = 0;
mistica.velocityX = 0;

	if (keyDown("UP_ARROW")) {
		mistica.velocityY= -3;
		}
		
		 if (keyDown("DOWN_ARROW")) {
		mistica.velocityY= 3;
		 }
	   if (keyDown("RIGHT_ARROW")) {
		mistica.velocityX= 3;
		}
	   if (keyDown("LEFT_ARROW")) {
		mistica.velocityX= -3;
		}

}

	function obstacle(){		
		
		fogo1.bounceOff(chao4)
		fogo1.bounceOff(chao10)
		
		fogo2.bounceOff(chao8)
		fogo2.bounceOff(chao13)
		
		fogo3.bounceOff(chao17)
		fogo3.bounceOff(chao20)
		
		fogo4.bounceOff(chao19)
		fogo4.bounceOff(chao24)
		
		fogo5.bounceOff(chao22)
		fogo5.bounceOff(chao23)
		
		fogo6.bounceOff(chao15)
		fogo6.bounceOff(chao16)
		
		
		

	}