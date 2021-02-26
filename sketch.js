// YOu are trying to defend your castle using towers
// enimies are attacking your castle and you place towers to defend yourself
// 3 enimies
var enemy
var knights
var archers
var wizards
var castle
var towers
var cannonButton
var mortarButton
var machineGunButton
var laserButton
var money
var can1

function setup() {
  createCanvas(displayWidth-40,displayHeight-40);
  castle=createSprite(50, displayHeight/2, 50, 50);
  cannonButton=createSprite(300,displayHeight-100,40,60)
  cannonButton.shapeColor=rgb(0,0,0)
  mortarButton=createSprite(displayWidth/2-150,displayHeight-100,40,60)
  mortarButton.shapeColor=rgb(0,0,255)
  machineGunButton=createSprite(displayWidth/2+150,displayHeight-100,40,60)
  machineGunButton.shapeColor=rgb(0,255,0)
  laserButton=createSprite(displayWidth-300,displayHeight-100,40,60)
  laserButton.shapeColor=rgb(255,0,0)
  can1=createSprite(300,displayHeight-200,10,10)  
}

function draw() {

  background(200,200,200);
  cannonButton.y=mouseY
  can1.y=cannonButton.y
  //can1.y=mouseY
 // can1.x=mouseX

  SpawnEnimies()
  if(mousePressedOver(cannonButton)){
    can1.velocityX=random(5,9)
    can1.velocityY=random(8,-7)
   //can1.y=300
    can1.x=mouseX
  can1.y=mouseY
   
  }  
  
 
  drawSprites();
}

//spawn the enimies in waves and they will get stronger every wave
function SpawnEnimies(){
if(frameCount%50===0){
enemy=createSprite(displayWidth-100,displayHeight,10,10)
enemy.y=Math.round(random(displayHeight/8,displayHeight/2+250))
enemy.pointTo(castle.x,castle.y)
enemy.setSpeedAndDirection(5)
}
}