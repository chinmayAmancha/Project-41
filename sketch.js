var canvas;
var umberella;
var maxDrops = 100;
var drops;
var thunderimg1, thunderimg2, thunderimg3, thunderimg4;
var thunderimgs = ["thunderimg1", "thunderimg2", "thunderimg3", "thunderimg4"];
function preload(){
    thunderimg1 = loadImage("images/1.png");
    thunderimg2 = loadImage("images/2.png");
    thunderimg3 = loadImage("images/3.png");
    thunderimg4 = loadImage("images/4.png");
}

function setup(){
   canvas = createCanvas(displayWidth / 4, displayHeight);
   umberella = new Umberella();
   drops = new Drops();
}

function draw(){
   background(0,0,0);

   for(var i = 0; i < maxDrops; i++) {
       drops.push(new createDrop(random(0, 341.5), random(0, 341.5)));
   }

   umberella.display();
   drops.display();

   drops.update();

   if(frameCount % 10 === 0) {
       thunderimgs.destroy();
   }

   switch(thunderimgs) {

   case 0: thunderimg1;
        break;
   case 1: thunderimg2;
        break;
   case 2: thunderimg3;
        break;
   case 3: thunderimg4;
        break;
   }

//   console.log(displayWidth/4);
}   

