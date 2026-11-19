// 小手調べ
function setup(){
  createCanvas(100,100)
  
  for(let i = 0; i<10 ; i++){
    if(i>5){
      stroke(255,0,0)
    }
    else{
      stroke(0,0,255)
    }
    let size = (i+1)*10;
    noFill()
    ellipse(50,50,size);
  }
}
