function setup() {
  createCanvas(500, 300);

  unionjack(0,0,500)
  
}
function unionjack(x1,y1,wid){
  const red = color(200,16,46);
  const blue = color(1,33,105);
  background(blue);
  let hei = wid*3/5
  let red_line = wid/25
  let half = red_line/2
  stroke(255);
  strokeWeight(wid*3/25);
  line(x1,y1,wid/2,hei/2);
  line(wid,y1,wid/2,hei/2);
  line(wid,hei,wid/2,hei/2);
  line(x1,hei,wid/2,hei/2);
  stroke(red);
  strokeWeight(red_line);
  line(x1,y1+half,wid/2,hei/2+half);
  line(wid-half,y1,wid/2-half,hei/2);
  line(wid,hei-half,wid/2,hei/2-half);
  line(x1+half,hei,wid/2+half,hei/2);
  for(let i=0; i<2; i++){
    if(i==0){
      stroke(255);
      strokeWeight(wid*4/25);
    }
    else{
      stroke(red);
      strokeWeight(wid*3/25);
    }
    line(wid/2,y1,wid/2,hei);
    line(x1,hei/2,wid,hei/2);
  }
  


}