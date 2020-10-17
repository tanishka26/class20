var fobj,mobj;

function setup() {
  createCanvas(800,400);
  fobj=createSprite(100, 200, 50, 100);
  mobj=createSprite(100, 200, 100, 50);
  fobj.shapeColor="green";
  mobj.shapeColor="green";
fobj.debug=true;
mobj.debug=true;

}

function draw() {
  background(255,255,255);  
  mobj.x=mouseX
  mobj.y=mouseY
  console.log(mobj.width/2+fobj.width/2);
  console.log(mobj.x-fobj.x);
  console.log(fobj.x-mobj.x);
  console.log(mobj.x);
  if(mobj.x-fobj.x<mobj.width/2+fobj.width/2 &&
    fobj.x-mobj.x<mobj.width/2+fobj.width/2 &&
    mobj.y-fobj.y<mobj.height/2+fobj.height/2 &&
    fobj.y-mobj.y<mobj.height/2+fobj.height/2){
    fobj.shapeColor="red";
    mobj.shapeColor="red";
  }
  else{
    fobj.shapeColor="green";
    mobj.shapeColor="green";
  }
  drawSprites();
}