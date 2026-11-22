// 最終課題を制作しよう
let notes = [];
let resulttext = "";
let resulttimer = 0;
let scores = 0;
let nco = 0;
let page = 0;
let hp = 0;
let life = 0;
let level1;
let level2;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(139, 90, 43); 
  triangle(width/2 -80, 0, width/2 -60, 0, width/2 - 50, 130);
  triangle(width/2 +80, 0, width/2 +60, 0, width/2 + 50, 130);
  triangle(width/2 -10, 0, width/2 +10, 0, width/2, 170);
  
}

function draw(){
  if(page == 0){
    
    background(139, 90, 43);
    triangle(width/2 -80, 0, width/2 -60, 0, width/2 - 50, 130);
    triangle(width/2 +80, 0, width/2 +60, 0, width/2 + 50, 130);
    triangle(width/2 -10, 0, width/2 +10, 0, width/2, 170);
    fill(0);
    textSize(50);
    textAlign(CENTER, CENTER);
    textFont("MonoSpace");
    text("うりぼー討伐", width/2, height/2 - 100);
    textSize(30);
    text("赤丸は↓矢印　青丸は→矢印で叩こう", width/2, height/2);
    textSize(30);
    text("↓矢印で討伐開始(初級)　↑矢印で討伐開始(上級)", width/2, height/2 + 100);
    
    if (keyIsDown(DOWN_ARROW)){
      page = 1;
      level1 = 50
      level2 = 90
     }
    if (keyIsDown(UP_ARROW)){
      page = 1;
      level1 = 20
      level2 = 10
    } 
    
    }
    
  if(page == 1){
     background(50);
    backg();
    
    fill(255)//(45,25,13)
    
    if(life==10){
    textSize(45);
    textAlign(LEFT, CENTER);
    text("LIFE: ❤️❤️💔", 18, 35);
    }
    else if(life==20){
      textSize(45);
      textAlign(LEFT, CENTER);
      text("LIFE: ❤️❤️", 18, 35);
    }
    else if(life==30){
      textSize(45);
      textAlign(LEFT, CENTER);
      text("LIFE: ❤️💔", 18, 35);
    }
    if(life==40){
      textSize(45);
      textAlign(LEFT, CENTER);
      text("LIFE: ❤️", 18, 35);
    }
    if(life==50){
      textSize(45);
      textAlign(LEFT, CENTER);
      text("LIFE: 💔", 18, 35);
    }
    if(life ==0){//scores>-40
    textSize(45);
    textAlign(LEFT, CENTER);
    text("LIFE: ❤️❤️❤️", 18, 35);
    }
    if(life == 60){
      page = 3
    }
  
  if(frameCount % level1 == 0|| frameCount % level2 == 0){
    notes.push({x:width + 10, y:height/2, vx: -10, nc: floor(random(2))})
  }
  for(let i = 0;i < notes.length; i ++){
    let no = notes[i];
    note(no.x,no.y,no.nc);
    nco = no.nc
    no.x += no.vx
    if(no.x < -20){
      notes.splice(i,1);
      i--;
    }
  }
  for(let i = 0; i < notes.length; i ++){
    let no = notes[i];

    if(no.x < 0){
      resulttext = "相手の攻撃";
      resulttimer = 20;
      scores -= 20;
      hp -= 0//revised
      life += 10;//実験
      notes.splice(i,1);
    } 
  }  
  for(let i = 0; i < notes.length; i ++){
    let no = notes[i];
    if (no.nc == 0) {
    if (keyIsDown(DOWN_ARROW)){
    //    for(let i = 0; i < notes.length; i ++){
    // let no = notes[i];
    
    //     if(abs(no.x - width/10) < 10){
    //       resulttext = "50";
    //       resulttimer = 20;
    //       scores += 50;
    //       hp +=50;
    //       notes.splice(i,1);
    //     }
    //     else if (abs(no.x - width/10) < 30){
    //       resulttext = "30";
    //       resulttimer = 20;
    //       scores += 30;
    //       hp += 30;
    //       notes.splice(i,1);
    //     }
    //     else if (abs(no.x - width/10) < 50){
    //       resulttext = "相手の攻撃";
    //       resulttimer = 20;
    //       scores -= 20;
    //       hp -=0;
    //       life += 10;//実験
    //       notes.splice(i,1);
    //     }
    //   }
    push();
    fill(255, 160, 50)
    ellipse(width/2, height-150, 260)
    fill(0)
    ellipse(width/2 - 60, height-150, 40, 80);
    ellipse(width/2 + 60, height-150, 40, 80);
    pop();
    }
    if (keyIsDown(RIGHT_ARROW)){
    //    for(let i = 0; i < notes.length; i ++){
    // let no = notes[i];
    //      if (abs(no.x - width/10) < 50){
    //       resulttext = "相手の攻撃";
    //       resulttimer = 20;
    //       scores -= 20;
    //       hp -= 0;
    //       life += 10;//実験
    //       notes.splice(i,1);
    //     }
    //   }
    push();
     fill(255, 160, 50);
     ellipse(width/2, height-150, 280);
     fill(210,170, 120);
     ellipse(width/2, height-150, 260);
     fill(0)
     ellipse(width/2 - 60, height-150, 40, 80);
     ellipse(width/2 + 60, height-150, 40, 80);
     pop();
    }
    
    
  }
  if (no.nc == 1) {
    if (keyIsDown(RIGHT_ARROW)){
    //    for(let i = 0; i < notes.length; i ++){
    // let no = notes[i];
    
    //     if(abs(no.x - width/10) < 10){
    //       resulttext = "50";
    //       resulttimer = 20;
    //       scores += 50;
    //       hp += 50;
    //       notes.splice(i,1);
    //     }
    //     else if (abs(no.x - width/10) < 30){
    //       resulttext = "30";
    //       resulttimer = 20;
    //       scores += 30;
    //       hp += 30;
    //       notes.splice(i,1);
    //     }
    //     else if (abs(no.x - width/10) < 50){
    //       resulttext = "相手の攻撃";
    //       resulttimer = 20;
    //       scores -= 20;
    //       hp -= 0;
    //       life += 10;
    //       notes.splice(i,1);
    //     }
    //   }
    push();
      fill(255, 160, 50);
      ellipse(width/2, height-150, 280);
      fill(210,170, 120);
      ellipse(width/2, height-150, 260);
      fill(0)
      ellipse(width/2 - 60, height-150, 40, 80);
      ellipse(width/2 + 60, height-150, 40, 80);
      pop();
    }
    if (keyIsDown(DOWN_ARROW)){
    //    for(let i = 0; i < notes.length; i ++){
    // let no = notes[i];
    //      if (abs(no.x - width/10) < 50){
    //       resulttext = "相手の攻撃";
    //       resulttimer = 20;
    //       scores -= 20;
    //       hp -= 0;
    //       life += 10
    //       notes.splice(i,1);
    //     }
    //   }
    push();
      fill(255, 160, 50)
      ellipse(width/2, height-150, 260)
      fill(0)
      ellipse(width/2 - 60, height-150, 40, 80);
      ellipse(width/2 + 60, height-150, 40, 80);
      pop();
    }

    
    
  }
  }
  
  
  
  if(resulttimer > 0){
  push();
  if(resulttext == "相手の攻撃"){
    textSize(25);
    textAlign(CENTER, TOP);
  }else{
    textSize(50);
    textAlign(CENTER, CENTER);
  } 
  textStyle(BOLD);
  textFont("Arial Black");

  if(resulttext == "50"){
    fill(255, 0, 0);
  }
  else if(resulttext == "30"){
    fill(255,165,0);
  }    
  else{
    fill(0);
  }
     
  text(resulttext, width/10-5, height/2-120);

  resulttimer--;
  pop();
  }
  if(page == 1){
    // textSize(30);
    // textAlign(RIGHT, CENTER);
    // fill(0);
    // textFont("MonoSpace");
    // text("スコア: " + scores, width - 20, 30);
    if((1000-hp) <= 0){
      page = 2;
    }
    // if(scores < -120){
    //   page = 3;
    // }  
  // fill(255,0,0);  
  // rect(width/2-80, height/2- 127, 263, 30);   
  textSize(35)
    textAlign(LEFT, CENTER)
    if((1000-hp)>100){
    fill(255,255,255);
    textFont("MonoSpace")
    text("うりぼーのHP:" + (1000-hp), width-310, 33)
    }else{
      fill(255,0,0);
    textFont("MonoSpace")
    text("うりぼーのHP:" + (1000-hp), width-310, 33)
    }
  
  }
}
  if(page == 2){
    push();
    background(139, 90, 43);
    strokeWeight(8)
    line(width/2-200, 200, width/2 -150, 150);
    line(width/2-200, 150, width/2-150, 200);
    line(width/2+200, 200, width/2 +150, 150);
    line(width/2+200, 150, width/2+150, 200);
    fill(0);
    ellipse(width/2, 280, 40, 80);
    //line(width/2-100, 300, width/2+100, 260);
    //line(width/2-100, 260, width/2 +100, 300);
    
    strokeWeight(0)
    fill(0);
    triangle(width/2 -80, 0, width/2 -60, 0, width/2 - 50, 130);
    triangle(width/2 +80, 0, width/2 +60, 0, width/2 + 50, 130);
    triangle(width/2 -10, 0, width/2 +10, 0, width/2, 170);

    

    fill(255,230,50);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("討伐完了！", width/2, height/2 + 100);
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("もう一度やりたければ、←矢印を押してください！", width/2, height/2+200);
    pop();
    if (keyIsDown(LEFT_ARROW)){
      page = 0;
      scores = 0;
      notes = [];
      hp = 0;
      life = 0;
      level1 = 0;
      level2 = 0;
    }
  }

  if(page == 3){
    push();
    background(0)
    fill(255,0,0);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("討伐失敗", width/2, height/2);
    textSize(30);
    text("あなたはうりぼーに食べられました",width/2,height/2+100);
    text("もう一度やりたければ、←矢印を押してください",width/2, height/2+140)
    pop();
    if(keyIsDown(LEFT_ARROW)){
      page = 0;
      scores = 0;
      notes = [];
      hp = 0;
      life = 0;
      level1 = 0;
      level2 =0;
    }
  }

}  

function note(x,y,nc){
  push();
  translate(x,y);
  stroke(0);
  strokeWeight(1);
  fill(139, 90, 43);
  ellipse(0, 0, 100, 100);

  if(nc == 0){
    fill(240, 82, 78);
    nco = 0;
    ellipse(0,0,75,75);
  }
  else{
    fill(135,206,235);
    nco = 1;
    ellipse(0,0,75,75);
  }
  
  pop();
}

function backg(){
  push();
   stroke(0);
   strokeWeight(3);
   line(0, height/2 - 75, width, height/2 - 75);
   line(0, height/2 + 75, width, height/2 + 75);
   fill(139, 90, 43);
   ellipse(width/10, height/2, 100);
   fill(255);
   ellipse(width/10, height/2, 75);
   fill(139, 90, 43);
   rect(0,0,width,height/2 - 75);
   fill(139, 90, 43);
   rect(0,height/2 +75, width, height/2 - 75);
   fill(0);
   triangle(width/2 -80, 0, width/2 -60, 0, width/2 - 50, 130);
   triangle(width/2 +80, 0, width/2 +60, 0, width/2 + 50, 130);
   triangle(width/2 -10, 0, width/2 +10, 0, width/2, 170);
   fill(120, 72, 35);
   ellipse(width/2, height-150, 280);
   fill(210, 170, 120)
   ellipse(width/2, height-150, 260);
   fill(0)
   ellipse(width/2 - 60, height-150, 40, 80);
   ellipse(width/2 + 60, height-150, 40, 80);
   pop();
}

function keyPressed(){
  if(page == 1){

    for(let i = 0; i < notes.length; i++){
      let no = notes[i];

      if(no.nc == 0){

        if(keyCode == 40){
          
          if(abs(no.x - width/10) < 10){
            resulttext = "50";
            resulttimer = 20;
            scores += 50;
            hp += 50;
            notes.splice(i,1);
      
          }
          else if(abs(no.x - width/10) < 30){
            resulttext = "30";
            resulttimer = 20;
            scores += 30;
            hp += 30;
            notes.splice(i,1);
         
          }
          else if(abs(no.x - width/10) < 50){
            resulttext = "相手の攻撃";
            resulttimer = 20;
            scores -= 20;
            life += 10;
            notes.splice(i,1);
          
          }
        }

     
        if(keyCode == 39){
          
          if(abs(no.x - width/10) < 50){
            resulttext = "相手の攻撃";
            resulttimer = 20;
            scores -= 20;
            life += 10;
            notes.splice(i,1);

          }
        }
      }

      if(no.nc == 1){

       
        if(keyCode == 39){
          
          if(abs(no.x - width/10) < 10){
            resulttext = "50";
            resulttimer = 20;
            scores += 50;
            hp += 50;
            notes.splice(i,1);

          }
          else if(abs(no.x - width/10) < 30){
            resulttext = "30";
            resulttimer = 20;
            scores += 30;
            hp += 30;
            notes.splice(i,1);
      
          }
          else if(abs(no.x - width/10) < 50){
            resulttext = "相手の攻撃";
            resulttimer = 20;
            scores -= 20;
            life += 10;
            notes.splice(i,1);
           
          }
        }

        if(keyCode == 40){
          
          if(abs(no.x - width/10) < 50){
            resulttext = "相手の攻撃";
            resulttimer = 20;
            scores -= 20;
            life += 10;
            notes.splice(i,1);
           
          }
        }
      }
    }
  }
}
