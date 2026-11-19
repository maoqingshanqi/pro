function setup() {
  createCanvas(270, 180);
  background(0,51,153);
  const yellow =color(255,204,0)
  
  for(i=0;i<12;i++){
    let theta = TWO_PI*i/12;
    const x = 135 + cos(theta)*60;
    const y = 90 + sin(theta)*60;
    
    noStroke();
    fill(yellow);
    star(x,y,10);
    

  }
  
}

function star(cx, cy, r){
  beginShape();    
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  
  }
  endShape(CLOSE); 
}
