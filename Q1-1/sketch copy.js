let i = 0;
  const luck = ["大吉","中吉","吉","末吉","凶","大凶"];
function setup(){
  createCanvas(200,200) ;
}
function draw(){
  background(220);
  if(mouseIsPressed){
    i = (i+1)%luck.length;
  }
  
  fill(255-i*42,0,0)
  
  
  textSize(48)
  textAlign(CENTER,CENTER)
  text(luck[i],width/2,height/2);
}