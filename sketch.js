const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var block, blockImg;
var score = 0;

var backgroundImg;

function preload(){
    blockImg = loadImage('polygon.png');
    getBackgroundImg();
}

function setup(){
    createCanvas(1500, 800);

    engine = Engine.create();
    world = engine.world;
    stand = new Stand(750,780, 1500, 50);

    stand1 = new Stand(600, 500, 400, 20);
    stand2 = new Stand(1100, 400, 300, 20);


    //1st stand 
    //1st level
    box1 = new Box(600, 465, 50, 50);
    box2 = new Box(650, 465, 50, 50);
    box3 = new Box(550, 465, 50, 50);
    box4 = new Box(700, 465, 50, 50);
    box5 = new Box(500, 465, 50, 50);
    box6 = new Box(750, 465, 50, 50);
    box7 = new Box(450, 465, 50, 50);

    //2nd level
    box8 = new Box(600, 415, 50, 50);
    box9 = new Box(650, 415, 50, 50);
    box10 = new Box(550, 415, 50, 50);
    box11 = new Box(700, 415, 50, 50);
    box12 = new Box(500, 415, 50, 50);

    //3rd level
    box13 = new Box(600, 365, 50, 50);
    box14 = new Box(650, 365, 50, 50);
    box15 = new Box(550, 365, 50, 50);
    
    //4th level
    box16 = new Box(600, 315, 50, 50);

    //2nd stand
    //1st level
    box17 = new Box(1100, 365, 50, 50);
    box18 = new Box(1050, 365, 50, 50);
    box19 = new Box(1000, 365, 50, 50);
    box20 = new Box(1150, 365, 50, 50);
    box21 = new Box(1200, 365, 50, 50);

    //2nd level
    box22 = new Box(1100, 315, 50, 50);
    box23 = new Box(1050, 315, 50, 50);
    box24 = new Box(1150, 315, 50, 50);

    //3rd level
    box25 = new Box(1100, 265, 50, 50);

    //block
    var options = {
        restitution:1.0,
        density: 1.5,
        isStatic: false
    }
    block = Bodies.circle(50, 200, 50,options);
    World.add(world, block);
    console.log(block);

    //block = new Box(50, 300, 60, 60);

    //sling
    rope = new SlingShot(this.block, {x: 50, y: 300});

    var render = Render.create({
        element: document.body, 
        engine: engine, 
        options: { width: 1000, height: 800, showAngleIndicator: true }
        }); 
        Render.run(render);

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);
    stand.display();
    stand1.display();
    stand2.display();

    fill("turquoise");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //box7.display();

    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("lightgreen")
    box13.display();
    box14.display();
    box15.display();
    
    fill("skyblue")
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    fill("lightgreen");
    box22.display();
    box23.display();
    box24.display();
    
    fill("pink");
    box25.display();
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    textSize(24);
    text('Drag the Hexagonal Stone and Release it, to launch it towards the blocks', 382, 20);

    fill('white');
    text('SCORE: ' + score, 50, 30);

    //rope.display();
    imageMode(RADIUS);
    image(blockImg, this.block.position.x, this.block.position.y, 50, 50);

}

function mouseDragged(){
    Matter.Body.setPosition(this.block, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.block, {x: 50, y:200});
        rope.attach(this.block);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.jpg";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}