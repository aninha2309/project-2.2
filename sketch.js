const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var playerArcherImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  
  world = engine.world;
  
  angleMode(DEGREES);

  var options ={
    isStatic:true
  };
  
  playerBase = Bodies.rectangle(200,350,180,150, options);
  World.add(world,playerBase);
  
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180, options);
  World.add(world,player);

  //criar corpo da base do jogador
  playerArcher =Bodies.rectangle(280,playerBase.position.y - 160,50,100,options);
  World.add(world,playerArcher);
  //criar corpo do jogador



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()


  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  image(playerArcherImg,playerArcher.position.x,playerArcher.position.y,50,180)
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
