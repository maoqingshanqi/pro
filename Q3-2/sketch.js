// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 0.1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);
  
  // BLANK[1] キャラクターの左右移動
  if(keyIsDown(LEFT_ARROW)){ 
      x -= 5; 
  }
  if(keyIsDown(LEFT_ARROW)&&keyIsDown(DOWN_ARROW)){ 
      x -= 10; 
  }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(RIGHT_ARROW)&&keyIsDown(DOWN_ARROW)){ 
      x += 10; 
  }
  
  // BLANK[2] 重力とジャンプ
  
  
  
  vy += g;
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if( y > groundY - size/2){ y = groundY - size/2 }
  // if( y < 0 ){}
  
  if(y == groundY - size/2){
    vy = 0
    if(keyIsDown(UP_ARROW)){vy -= 8.5; }

  }

    

  
  
  
  
  // 位置を更新
   x += vx;
   y += vy;
  
  
  // キャラクターを描く
  fill(100,0,0);
  ellipse(x, y, size, size);
  
  
}