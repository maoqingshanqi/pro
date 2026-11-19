// チェッカー
function setup(){
  createCanvas(200,200);
  const size = width/8
  

  for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
      if((i+j)%2==1){
        fill(120);
        rect(i*size,j*size,size,size);
        if(j<3){
          fill(255,0,0)
          ellipse(i*size+size/2,j*size+size/2,20)

        }
        if(j>4){
          fill(0)
          ellipse(i*size+size/2,j*size+size/2,20)

        }
      }
      else{
        fill(255);
        rect(i*size,j*size,size,size);
      }
      
     

    }
  }

}
      
       

    
       
       
     // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
