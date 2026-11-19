
let playful; //画像の変数playfulを定義


function preload(){
  playful = loadImage('a.jpg');//画像を読み込む
  
}


function setup() {
  createCanvas(400, 400);
  background(220);
 // image(playful,0,0);//画像を表示
}

function draw() {
 // background(220);
  image(playful,0,0);
}