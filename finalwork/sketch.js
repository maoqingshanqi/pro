// 最終課題を制作しよう
// AIは基本copilotを使用
let page = 0;
let Name ='';
let nameInput;
let startButton;
let class_Button;
let titleInput;
let title;
let messageSelect;
let messageSelect2;
let messageSelect3;
let message1;
let message2;
let message3;
let log = true;
const eye = [1,2,3,4,5,6];
let eye_i = 0;
let finished = false;
let n = 1;
let cx = -40000;
let progress = true;
let move = false;
let bx ;
let by ;
let vbx = 0;
let vby = 0;
let g ;
let angle = 0;
let angle2 = 0;
let power;
let shoot = false;
let pw_h = 0.5;
let pw_v = 0.09;
let direction = 1; // 1:右 -1:左
let bullets = [];
let inosisis = [];
let score = 0;
let life = 5;
let alive = true;
let beast = false;
// 開始画面用の関数
function startApp(){
  Name = nameInput.value();

  if(Name !== ''){
    // 変数をリセットして１ページ目にもどる
    page = 1;
    n = 1;
    eye_i = 0;
    finished = false;
    progress = true;
    cx = -40000;
    move = false;
    shoot = false;
    vbx = 0;
    vby = 0;
    pw_h = 0.5;
    bx = width/10;
    by = height*3/5;
    angle = 0;
    angle2 = 0;
    direction = 1; // 1:右 -1:左
    bullets = [];
    inosisis = [];
    score = 0;
    life = 5;
    alive = true;
    beast = false;
    message1 = '';
    message2 = '';
    message3 = '';
    messageSelect.selected('送るメッセージを選択しましょう');
    messageSelect2.selected('送るメッセージを選択しましょう');
    messageSelect3.selected('送るメッセージを選択しましょう');
    nameInput.hide();
    startButton.hide();
  }
}
// メッセージ送信用の関数
function send_message(){
  title = titleInput.value();
  message1 = messageSelect.value();
    if(title !== '' && message1 !== '送るメッセージを選択しましょう'){
    page = 4;
    titleInput.hide();
    messageSelect.hide();
  }
}
function send_message2(){
  message2 = messageSelect2.value();
    if(message2 !== '送るメッセージを選択しましょう'){
    page = 4;
    messageSelect2.hide();
  }
}
function send_message3(){
  message3 = messageSelect3.value();
    if(message3 !== '送るメッセージを選択しましょう'){
    page = 4;
    messageSelect3.hide();
  }
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(235);
  let inputW = width/3;
  let inputH = height/30;
  let sch_wid = (width-width/20)/5;
  let sch_h = height/20;
  bx = width/10;
  by = height*3/5;
  nameInput = createInput();
  nameInput.size(inputW, inputH);
  nameInput.position(width/2 - inputW/2,height/2 - inputH/2);

  startButton = createButton('開　始');
  startButton.size(inputW/2,inputH);
  startButton.position(width/2-inputW/4,height/2+inputH);
  startButton.mousePressed(startApp);
  
  
  titleInput = createInput();
  titleInput.size(width*11.5/20,height/30);
  titleInput.position(width/3,height*8.75/20);
  titleInput.hide();

  messageSelect = createSelect();
  messageSelect.option('送るメッセージを選択しましょう');
  messageSelect.option('講義で分からないところがあって、、会いに行ってもいいですか？');
  messageSelect.option('どこか…二人で遊びに行きませんか？');
  messageSelect.option('実は、、好きになっちゃいました。');
  messageSelect.option('単位ください。');
  messageSelect.size(width*16/20,height*5/20);
  messageSelect.position(width*2/20,height*10.5/20);
  messageSelect.hide();

  messageSelect2 = createSelect();
  messageSelect2.option('送るメッセージを選択しましょう');
  messageSelect2.option('それでは、研究室に会いにいきますね。');
  messageSelect2.option('教授の家に行ってみたいです…');
  messageSelect2.option('体育館で集合しませんか…？');
  messageSelect2.option('単位ください。');
  messageSelect2.size(width*16/20,height*1/20);
  messageSelect2.position(width*2/20,height*16/20);
  messageSelect2.hide();
  
  messageSelect3 = createSelect();
  messageSelect3.option('送るメッセージを選択しましょう');
  messageSelect3.option('体育館デートしませんか？');
  messageSelect3.option('六甲山に上りましょうよ。');
  messageSelect3.option('夜、キャンパスで待ってますね。');
  messageSelect3.option('単位ください。');
  messageSelect3.size(width*16/20,height*1/20);
  messageSelect3.position(width*2/20,height*16/20);
  messageSelect3.hide();
}
// 共通のヘッダーを作成
function header(){
    stroke(150);
    fill(255)
  rect(0,0,width,height*0.08);
  huki(width/8,height/40,height*0.08/10);
  fill(50)
  textStyle(BOLD)
  textSize(15)
  textAlign(RIGHT,CENTER);
  text(Name ,width-width/100,height*2.3/20)
    let sch_wid = (width-width/20)/5;
}
// 通知アイコンを作成
function huki(x,y,size){
  fill(0);
  let w = size * 5
  let h = size * 3
  noStroke();
  triangle(x,y+size*3.8,x+size*2,y+size,x+size*4.5,y+size);
  rect(x,y,w,h*0.95,size*5/8);
  fill(255);
  ellipse(x+w/2,y+h/2,size*0.6);
  ellipse(x+w/4,y+h/2,size*0.6);
  ellipse(x+w*3/4,y+h/2,size*0.6);
}
// カレンダーアイコンを作成
function ca(x,y,size){
  fill(255);
  noStroke()
  rect(x,y,size*0.95,size,7);
  fill(10,60,130);
  
  rect(x+size/2.8*0.95,y+size/5,size/20,size/10)
  rect(x+size/1.75*0.95,y+size/5,size/20,size/10)
  rect(x+size/4*0.95,y+size/4,size/2*0.95,size/2);

  for(let i = 0; i < 3; i ++){
    for(let j = 0; j < 4; j ++){
      fill(255);
      rect(x+size/4*1.15+(size/6.8*0.95)*i,y+size/2.85+size/10*j,size/11,size/18);
    }
  }
}
function draw(){
  // 開始画面を作成
  if(page == 0){
  start();
}
// 時間割画面を表示
if(page == 1){
  schedule();
}
  // 授業詳細画面を表示
  if(page == 2){
  class_detail();
}
// メッセージ送信画面を表示
if(page == 3){
  message();
  messageSelect.show();

}
// 再度時間割画面を表示
if(page == 4){
  schedule();
  if(message1 !== '実は、、好きになっちゃいました。'){
    fill(255,0,0);
    ellipse(width/8+height*8/200,height/40,height/100)
    if(log == false){
      fill(250);
      rect(width/8,height*3/40,width/4,height/40);
      textAlign(LEFT,CENTER);
      fill(75)
      textStyle(BOLD)
      text('返信があります。',width/8+height/30,height*3.5/40)
    }
  }
}
// ストーリーの分岐

if(page == 5){
 class_detail();
 reply();
 
}
if(page == 6){
 class_detail();
 reply();
}
if(page == 7){
 class_detail();
 ending();
}
if(page == 8){
 class_detail();
 reply();
}
// さらに分岐
if(page == 9){
  give_message();
  rep_cont();
  messageSelect2.show()
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('送　信',width/2,height*15.75/20);
}
if(page == 10){
  give_message();
  rep_cont();
  messageSelect3.show()
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('送　信',width/2,height*15.75/20);
}
if(page == 11|| page == 16 || page == 17 || page == 18 || page == 19){
  give_message();
  rep_cont();
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('Next',width/2,height*15.75/20);
}
if(page == 12 || page == 13 || page == 14 || page == 15){
 class_detail();
 reply();
 
}
if(page == 201 || page == 202 || page == 203 || page == 204){
 class_detail();
 reply();
}

// パパラッチ説明
if(page == 21){
  nameInput.hide();
    startButton.hide();
  background(10,200,150);
  fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('パパラッチ',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('教授の様子がどこかおかしく感じました。\n高速で走り去る教授の車を撮影して真相を突き止めましょう。\n撮影は右矢印 →で行います。下矢印↓を押して始めましょう。',width/2,height/2.5);
    if(keyIsDown(DOWN_ARROW)){
      page = 31;
    }
    
}
// バスケ説明
if(page == 22 || page == 221){
  nameInput.hide();
    startButton.hide();
  background(10,200,150);
  fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('バスケ',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('体育館で教授と会うことになりました。\nシュートが入れば晴れて教授と…\nマウスを長押しして力を調節します。\n下矢印↓をクリックして始めましょう。',width/2,height/2.5);
    if(keyIsDown(DOWN_ARROW)){
      page = 32;
    }
    
}
// パパラッチ画面を描写
if(page == 31){
  background(20,75,150);
  papa();
  cameraUI(0,0,width,height)
  car(cx,height/2,1);
  if(progress){
    cx += 80;
  }
  else{
    cx += 0;
  }
  // シャッターをきる
  // と進まなくなる
  if(keyIsDown(RIGHT_ARROW) && progress){
    progress = false;
    // フラッシュを再現
    fill(255);
    rect(0,0,width,height)
  }
  if(!progress){
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('Next',width/2,height*15.75/20);
  }
}
if(page == 32){
  background(226,214,190);
  basket();
  basket_ball(bx,by,height/30);
  power = 1;
  g = height/1000;
  if(move){
    vby -= g;
    if(vbx > 0){
      angle -= vbx * 0.1;
    }
    if(vbx < 0){
      angle += vbx * 0.1;
    }
    
  }
  bx += vbx;
  by -= vby;
  // バウンドしたとき
  if(by >= height*2/3 - width/40){
    vby = -1*vby;
    vby *= 0.70;
    if(vbx > 0){
      vbx -= 1.5
    }
    finished = true;
  }
  if(by > height*2/3 - width/40){
    by = height*2/3 - width/40
  }

  if(pw_h < 0.26){
       power = 2;
    }
    else if(pw_h < 0.66){
       power = 1;
    }
    else{
      power = 0;
    }
  if(finished){
  noStroke();
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('Next',width/2,height*15.75/20);
  }
}
// サイコロ
if(page == 90){
  nameInput.hide();
    startButton.hide();
  background(10,200,150);
  fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('サイコロ',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('単位を獲得するためにサイコロを投げることになりました。\n5か6を出すことができれば単位をもらえます。\n下矢印↓をクリックして始めましょう。',width/2,height/2.5);
    if(keyIsDown(DOWN_ARROW)){
      page = 100;
    } 
}
if(page == 100){
  background(10,200,150);
  dice();
  if(finished){
    fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('Next',width/2,height*15.75/20);
  }
}
if(page == 211 || page == 212 || page == 213 || page == 214){
  give_message();
  rep_cont();
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('Next',width/2,height*15.75/20);
}
if(page == 223){
    nameInput.hide();
    startButton.hide();
    background(10,200,150);
    fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('イノシシ狩り',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('夜のキャンパスを歩いていると、案の定イノシシにでくわしました。\n銃の腕前を魅せ、教授のハートも打ち抜きましょう。\n← →で方向を変え、上矢印↑で撃ちます。\n下矢印↓をクリックして始めましょう。',width/2,height/2.5);
    if(keyIsDown(DOWN_ARROW)){
      page = 233;
    } 
}
if(page == 233){
  let ran_h = height/40;
  let groundY = height*2/3-ran_h;
  ix = 300;
  iy = groundY;

  background(30,0,100);
  campus();
  // いのしし試し書き（不要）
  // inosisi(ix,iy,ran_h);
  push();
  translate(width/2,height*2/3);
  
  if(beast){
  inosisi(0,-height/40,height/40);
  // ライフが0で倒れちゃう
  }else{
  rotate(angle2);
  player(0,0,100);
  } 
  pop();
  gun();
  // 弾と体の向きが変わるように
  if(keyIsDown(RIGHT_ARROW)){
    direction = 1;
  }
  if(keyIsDown(LEFT_ARROW)){
    direction = -1;
  }
  if(alive && !finished){
    if(keyIsDown(UP_ARROW)&&frameCount % 15 == 0){
    bullets.push({x:width/2+direction*height/20,y:height*18.65/30,vx:direction * 8})
  }
  }
  
  if(score <= 50){
    // AIにバグの修正を聞いたら↓の方式を勧めてきたので採用
    for(let i = inosisis.length - 1 ; i >= 0; i--){
  let ino = inosisis[i];

  inosisi(ino.x, ino.y, ino.size);
  ino.x += ino.vx;

  if(ino.x < -100 || ino.x > width + 100){
    // 重くなるので配列から削除方法をAIにきいたらこれを勧められたのでこれ以降↓を採用
    inosisis.splice(i,1);
  }
}
  }
  if(frameCount % 17 == 0){
  let side = random([0,1]); // 0=左 1=右
  let ino = {
    y: height*2/3 - height/40,
    size: height/40
  };
  // イノシシが左右どちらかから出てくるか
  if(side == 0){
    ino.x = -50;
    ino.vx = 5;
  }else{
    ino.x = width + 50;
    ino.vx = -5;
  }
  inosisis.push(ino);
}
for(let i = bullets.length - 1; i >= 0; i--){
  for(let j = inosisis.length - 1; j >= 0; j--){
    // 差の絶対値で弾とイノシシの接触
    if(abs(bullets[i].x - inosisis[j].x) < 10){
      bullets.splice(i,1);
      inosisis.splice(j,1);
      score += 1;
      break;
    }
  }
}
// ぶつかったら体力が減ります
// イノシシも消えます
for(let i = inosisis.length - 1 ; i >= 0; i--){
  let ino = inosisis[i];
  if(abs(ino.x - width/2) < 20){
    life -= 1;
    inosisis.splice(i,1);
  }
}

fill(0);
textAlign(CENTER,CENTER);
textSize(50);
text(score+'匹'+ '　　残りライフ'+life,width/2,height*18/20);
// 生きるか死ぬか
if(life <= 0){
  alive = false;
}
// 生き残ったら
if(score>=51 || !alive){
  finished = true;
}
// 生き残れなかったら
if(!alive && angle2 < PI/2){
  angle2 += 0.1;
}
// イノシシにもまれ続けたら
if(life <= -50){
  beast = true;
}
// 終了判定
if(finished || !alive){
  fill(75);
  rect(width/2-height/20,height*15.5/20,height*2/20,height*0.5/20,7);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(height/80);
  text('Next',width/2,height*15.75/20);
  }
} 
// エンディングページへ 
if(page == 20 || page == 41 || page == 42 || page == 51 || page == 52 || page == 62 || page == 101 || page == 102 || page == 222 || page == 243 || page == 253 || page == 263){
  ending();
}
}
// 返信内容用の関数
function rep_cont(){
  if(page == 9){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message1,width*8.25/20,height*9/20);
    text(Name+'さん、研究室であれば構いませんよ。',width*2.25/20,height*11/20);
  }
  if(page == 10){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message1,width*8.25/20,height*9/20);
    text(Name+'さんはどこに行きたいのですか？',width*2.25/20,height*11/20);
  }
  if(page == 11){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message1,width*8.25/20,height*9/20);
    text(Name+'さん、素直な人は嫌いではありません。賭けをしましょう。',width*2.25/20,height*11/20);
  }
  if(page == 16){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message2,width*8.25/20,height*9/20);
    text(Name+'さん、かしこまりました。お待ちしていますね。',width*2.25/20,height*11/20);

  }
  if(page == 17){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message2,width*8.25/20,height*9/20);
    text('それはちょっと…諸事情により許可できかねます。',width*2.25/20,height*11/20);

  }
  if(page == 18){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message2,width*8.25/20,height*9/20);
    text('仕方ありませんね。楽しみにしています。',width*2.25/20,height*11/20);

  }
  if(page == 19){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message2,width*8.25/20,height*9/20);
    text(Name+'さん、素直な人は嫌いではありません。賭けをしましょう。',width*2.25/20,height*11/20);

  }
  if(page == 211){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message3,width*8.25/20,height*9/20);
    text(Name+'さん、…予約しておきますね。',width*2.25/20,height*11/20);

  }
  if(page == 212){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message3,width*8.25/20,height*9/20);
    text('まだそれは…諸事情により不可能です。',width*2.25/20,height*11/20);

  }
  if(page == 213){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message3,width*8.25/20,height*9/20);
    text(Name+'さん、、少し危険ですがよいでしょう。',width*2.25/20,height*11/20);

  }
  if(page == 214){
    textAlign(LEFT,CENTER);
    textSize(height/100);
    fill(75)
    text(message3,width*8.25/20,height*9/20);
    text(Name+'さん、素直な人は嫌いではありません。賭けをしましょう。',width*2.25/20,height*11/20);

  }
}
// ページ送り用の関数
// 特定の範囲内でマウスが押されたら作動するようにした
function mousePressed(){
// 授業情報ページを開く専用
  if(page == 1){

    let sch_wid = (width - width/20) / 5;

    let x = width/20 + sch_wid * 1;
    let y = height*6/20 + height/20 * 2;
    let w = sch_wid;
    let h = height/30;  

    if(mouseX >= x &&mouseX <= x + w &&mouseY >= y &&mouseY <= y + h){
      page = 2;
    };
  }
  // メッセージページを開く専用
  if (page == 2){
    let plus_size = height/30;
    let px = width/20+height/40-plus_size/2;
    let py = height*12/20+height*4/20-height/40-plus_size/2;
    if(mouseX >= px &&mouseX <= px + plus_size &&mouseY >= py &&mouseY <= py + plus_size){
      page = 3;
    };
    
  }
  if(page == 3){
    if(mouseX >= width*16/20 && mouseX <= width*18/20 && mouseY >= height*16.15/20 && mouseY <= height*16.15/20 + height/30){
      send_message();
    }
  }
  // 授業情報ページを再度開く専用
  if(page == 4){

    let sch_wid = (width - width/20) / 5;
    let x = width/20 + sch_wid * 1;
    let y = height*6/20 + height/20 * 2;
    let w = sch_wid;
    let h = height/30;  
    let h1 = height*8/1000;
    

    if(mouseX >= x &&mouseX <= x + w &&mouseY >= y &&mouseY <= y + h){
      if(message1 == '講義で分からないところがあって、、会いに行ってもいいですか？'){
        page = 5;
      };
      if(message1 == 'どこか…二人で遊びに行きませんか？'){
        page = 6;
      };
      if(message1 == '実は、、好きになっちゃいました。'){
        page = 7;
      };
      if(message1 == '単位ください。'){
        page = 8;
      };
    };
    if(mouseX >= x &&mouseX <= x + w &&mouseY >= y &&mouseY <= y + h){
      if(message2 == 'それでは、研究室に会いにいきますね。'){
        page = 12;
      };
      if(message2 == '教授の家に行ってみたいです…'){
        page = 13;
      };
      if(message2 == '体育館で集合しませんか…？'){
        page = 14;
      };
      if(message2 == '単位ください。'){
        page = 15;
      };
    };
    if(mouseX >= x &&mouseX <= x + w &&mouseY >= y &&mouseY <= y + h){
      if(message3 == '体育館デートしませんか？'){
        page = 201;
      };
      if(message3 == '六甲山に上りましょうよ。'){
        page = 202;
      };
      if(message3 == '夜、キャンパスで待ってますね。'){
        page = 203;
      };
      if(message3 == '単位ください。'){
        page = 204;
      };
    };
    // 通知欄を開く専用
    // タップしたら開け閉めします
    if(mouseX >= width/8 && mouseX <= width/8+h1*5 && mouseY >= height/40 && mouseY <= height/40 + h1*3*0.95 ){
      if(log){
        log = false;
      }
      else{
        log = true;
      }
    }
  }
// 返信を見る専用
if(page == 5){
    let plus_size = height/30;
    let px = width/20+height/40-plus_size/2;
    let py = height*12/20+height*4/20-height/40-plus_size/2;

    if(mouseX >= px &&mouseX <= px + plus_size &&mouseY >= py &&mouseY <= py + plus_size){
      page = 9;
    }
  if(mouseX >= width/20 + height*5/20 && mouseX <= width/20 + height*5/20 + height/20 && mouseY >= height*13/20 && mouseY <= height*14/20 ){
    page = 9;
  }
  }
 if(page == 6){
    let plus_size = height/30;
    let px = width/20+height/40-plus_size/2;
    let py = height*12/20+height*4/20-height/40-plus_size/2;

    if(mouseX >= px &&mouseX <= px + plus_size &&mouseY >= py &&mouseY <= py + plus_size){
      page = 10;
    }
  if(mouseX >= width/20 + height*5/20 && mouseX <= width/20 + height*5/20 + height/25 && mouseY >= height*13/20 && mouseY <= height*14/20 ){
    page = 10;
  }
  }
 if(page == 8){
    let plus_size = height/30;
    let px = width/20+height/40-plus_size/2;
    let py = height*12/20+height*4/20-height/40-plus_size/2;

    if(mouseX >= px &&mouseX <= px + plus_size &&mouseY >= py &&mouseY <= py + plus_size){
      page = 11;
    }
  if(mouseX >= width/20 + height*5/20 && mouseX <= width/20 + height*5/20 + height/25 && mouseY >= height*13/20 && mouseY <= height*14/20 ){
    page = 11;
  }
}

if(page == 9){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
      send_message2();
    }
  }
  if(page == 10){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
      send_message3();
    }
  }
  if(page == 11 || page == 19 || page == 214){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
      page = 90;
    }
  }
  if(page == 12|| page ==13 || page == 14 || page == 15){
    let plus_size = height/30;
    let px = width/20+height/40-plus_size/2;
    let py = height*12/20+height*4/20-height/40-plus_size/2;

    if(mouseX >= px &&mouseX <= px + plus_size &&mouseY >= py &&mouseY <= py + plus_size){
      page += 4;
    }
  if(mouseX >= width/20 + height*5/20 && mouseX <= width/20 + height*5/20 + height/20 && mouseY >= height*13/20 && mouseY <= height*14/20 ){
    page += 4;
  }
  }
  if(page == 16 || page == 17 || page == 18 ){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
      page += 4;
    }
  }
  if(page == 31){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
     if(cx >= 0 && cx <= width){
        page = 41
     }
     else{
        page = 51
     }
     
     }
  }
  if(page == 32){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(finished){
       if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20 ){
     if(power == 0){
        page = 62;
     }
     if(power == 1){
        page = 52;
     }
     if(power == 2){
        page = 42;
     }
     
     }
    }
    
  }
  if(page == 201|| page ==202 || page == 203 || page == 204){
    let plus_size = height/30;
    let px = width/20+height/40-plus_size/2;
    let py = height*12/20+height*4/20-height/40-plus_size/2;

    if(mouseX >= px &&mouseX <= px + plus_size &&mouseY >= py &&mouseY <= py + plus_size){
      page += 10;
    }
  if(mouseX >= width/20 + height*5/20 && mouseX <= width/20 + height*5/20 + height/20 && mouseY >= height*13/20 && mouseY <= height*14/20 ){
    page += 10;
  }
  }
  if(page == 211 || page == 212 || page == 213){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
      page += 10;
    }
  }
  if(page == 233){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    
    if(finished && alive && !beast){
       if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20 ){
        page = 243
     }
    }
    if(finished && !alive && !beast){
       if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20 ){
        page = 253
     }
    }
    if(finished && !alive && beast){
       if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20 ){
        page = 263
     }
    }
  }
  if(page == 100){
    let nx = width/2 - height/20;
    let ny = height*15.5/20;
    if(finished){
      if(mouseX >= nx && mouseX <= nx + height*2/20 && mouseY >= ny && mouseY <= ny + height*0.5/20){
      if(n == 5 || n == 6){
        page = 101;
      }
      if(n == 1 || n == 2 || n == 3 || n == 4){
        page = 102;
      }
     }
    }
  }

}
// メッセージ追加ボタン用の関数
function plus(x,y,size){
  fill(255);
  ellipse(x,y,size,size)
  stroke(108, 198, 79)
  strokeWeight(height/300)
  line(x,y,x,y+size/4)
  line(x,y,x,y-size/4)
  line(x,y,x+size/4,y)
  line(x,y,x-size/4,y)
}
// 開始画面を作成
function start(){
    background(64, 192, 164);
    
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(width/18);

    text('お願い教授',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(width/40)
    text('様々なメッセージを送って教授と仲良くなりましょう。\n分岐するストーリーから、いろんなエンディングを目指してください。',width/2,height/2.75)

    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(width/48)
    text('↓ユーザー名を入力してスタート↓',width/2,height/2.2)
}
// 時間割画面を作成
function schedule(){
  
  background(235);
  header();
  fill(10,60,130);
  rect(0,height*3/20,width,height/12);
  ca(width/50,height*3/18.8,height/16);
  for(let i = 0; i < 7; i++){
    fill(233,176,151);
    
    stroke(255);
    strokeWeight(1);
    rect(0,height*6/20+height/20*i,width/20,height/15);
    if(i>0){
      fill(0);
      noStroke();
      textSize(height/72);
      textStyle(NORMAL);
      textAlign(CENTER,CENTER);
      text(i+'時限',width/42,height/32+height*6/20+height/20*i);
    }
   
    
  }
  // 一コマのサイズ
  let sch_wid = (width-width/20)/5;
  // 後で曜日を書く用
  let dwo = ['月','火','水','木','金'];
  
  // 時間割を描画
  for(let j = 0; j < 5; j++ ){
    for(let k = 0; k < 7; k++ ){
      fill(255);
      stroke(150);
      strokeWeight(0.1);
      if(k == 0){
        
        strokeWeight(0.2);
        stroke(255);
        fill(151,161,206);
      }
      rect(width/20+sch_wid*j,height*6/20+height/20*k,sch_wid,height/15);
      // 曜日を一番上だけ書く
      if(k == 0){
       fill(255);
       noStroke();
       textAlign(CENTER,CENTER);
       textSize(height/72);
       text(dwo[j],width/20 + sch_wid*j + sch_wid/2,height*6/20 + height/40);
     }
    }
   }
  // プログラミング基礎演習の授業コマを描画
  fill(156,170,212);
  rect(width/20 + sch_wid * 1,height*6/20 + height/20*2, sch_wid,height/35);
  fill(60);
  textAlign(CENTER,CENTER);
  textSize(height/75);

  text("3H088 プログラミング基礎演習 1",width/20 + sch_wid * 1 + sch_wid/2,height*6/20 + height/20*2 + height/60);

  }
// 授業詳細ページを描画
function class_detail(){
  background(235);
  header();
  fill(255);
  stroke(150);
  strokeWeight(1);
  rect(0,height*3/20,width,height*8/20);
  line(0,height*4/20,width,height*4/20);
  line(0,height*7.5/20,width,height*7.5/20);
  
  noStroke();
  rect(width/20,height*12/20,width-width/10,height*4/20);
  stroke(150);
  line(width/20,height*13/20,width-width/20,height*13/20);
  if(page>3){
    line(width/20,height*14/20,width-width/20,height*14/20);
  }
  fill(108, 198, 79);
  noStroke();
  rect(width/20,height*12/20,height*4/20);
  fill(255);
  rect(width/20+height/14,height*13/20,height*1/16,height*2/32,height/100);
  huki(width/20+height/12.25,height*13/20+height*1.5/100,height/120);
  plus(width/20+height/40,height*12/20+height*4/20-height/40,height/30)
  fill(255,0,0);

  // ボタンの範囲確認用（不要）
  // let plus_size = height/30;
  // rect(width/20+height/40-plus_size/2,height*12/20+height*4/20-height/40-plus_size/2,plus_size,plus_size)
  textAlign(LEFT,CENTER);
  fill(0,0,255);
  noStroke();
  textSize(height/50);
  textStyle(BOLD);
  text('2026 第3クォーター 3H088 プログラミング基礎演習1',width/20,height*3.5/20);
  
  fill(75);
  text('コースの概要説明/Course Summary',width/20,height*4.5/20);
  text('授業情報',width/20,height*8/20);
  textSize(height/75);
  text('タイトル ▽',width/20+height*5/20,height*12.5/20);
  textAlign(RIGHT,CENTER);
  text('問い合わせ作成日時 ▽　　　ステータス▽',width*0.9,height*12.5/20);

  fill(255);
  textSize(height/50);
  textAlign(CENTER,CENTER);
  text('担当へのメッセージ',width/20+height/10,height*14.75/20);
}
// メッセージ画面を描画
function message(){
  background(235);
  header();
  fill(255);
  rect(0,height*3/20,width,height*3/20);
  rect(width/20,height*7/20,width*18/20,height*10/20);
  stroke(150);
  strokeWeight(1);
  line(0,height*4/20,width,height*4/20);
  line(width/20,height*8/20,width*19/20,height*8/20);
  line(width/20,height*10/20,width*19/20,height*10/20);
  line(width/20,height*16/20,width*19/20,height*16/20);
  noFill();
  stroke(0);
  rect(width*2/20,height*10.5/20,width*16/20,height*5/20);

  textAlign(LEFT,CENTER);
  fill(0,0,255);
  noStroke();
  textSize(height/50);
  textStyle(BOLD);
  text('2026 第3クォーター 3H088 プログラミング基礎演習1',width/20,height*3.5/20);
  fill(75);
  text('担当へのメッセージ',width/20,height*5/20);
  textSize(height/75);
  text('タイトル(問い合わせ概要)',width*2/20,height*9/20);
  // 送信ボタン
  fill(50);
  rect(width*18/20,height*16.15/20,-width*2/20,height/30,5);
  textAlign(CENTER,CENTER);
  textStyle(NORMAL)
  fill(255);
  text('送　信',width*17/20,height*16.5/20);
  titleInput.show();
}
// 返信ステータス用関数を作成
function reply(){
 fill(0,0,255)
 textAlign(LEFT,CENTER)
 textSize(height/75);
 text(title,width/20+height*5/20,height*13.5/20);
 fill(75)
 textAlign(RIGHT,CENTER);
 text('返信済　　　',width*0.9,height*13.5/20);
}
function give_message(){
  background(235);
  header();
  fill(255);
  rect(0,height*3/20,width,height*3/20);
  stroke(150);
  strokeWeight(1);
  line(0,height*4/20,width,height*4/20);
  textAlign(LEFT,CENTER);
  fill(0,0,255);
  noStroke();
  textSize(height/50);
  textStyle(BOLD);
  text('2026 第3クォーター 3H088 プログラミング基礎演習1',width/20,height*3.5/20);
  fill(75);
  text('担当へのメッセージ',width/20,height*5/20);
  fill(168,191,167);
  rect(width/20,height*7/20,width*18/20,height*0.4);
  fill(108, 198, 79);
  rect(width/20,height*7/20,width*18/20,height/20);
  fill(255);
  text(title,width/20+height/30,height*7.5/20);
  my_huki(width*8/20,height*8.5/20,width*10/20,height/20);
  opo_huki(width*2/20,height*10.5/20,width*10/20,height/20);
  textSize(height/80);
  fill(75);
  textAlign(RIGHT,CENTER);
  text('教授',width*11.8/20,height*11.8/20);
  text('氏名：'+Name,width*17.8/20,height*9.8/20);
  
}
// 相手のふきだしを描画
function opo_huki(x,y,size,h){
  fill(231,201,201);
  rect(x,y,size,h,7);
  triangle(x,y+h/3,x,y+h*2/3,x-size/24,y+h/3);
}
// 自分のふきだしを描画
function my_huki(x,y,size,h){
  fill(190,208,218);
  rect(x,y,size,h,7);
  triangle(x+size,y+h/3,x+size,y+h*2/3,x+size+size/24,y+h/3);
}
// さいころ用の関数
function dice(){
  let size = height*2/5;
  let x = width/2 - size/2;
  let y = height/3;
  fill(255);
  rect(x,y,size,size,30);
  // おみくじを応用したけど早すぎたから遅くする
  if(mouseIsPressed && frameCount % 3 == 0 && !finished){
    eye_i = (eye_i+1) % eye.length;
  }
  n = eye[eye_i];
  let cir_size = size/6;
  fill(0);
  if(n == 1){
    fill(255,0,0);
    circle(width/2,y+size/2,cir_size);
  }
  if(n == 2){
    circle(x+size-size/4,y+size/4,cir_size);
    circle(x+size/4,y+size-size/4,cir_size);
  }
  if(n == 3){
    circle(width/2,y+size/2,cir_size);
    circle(x+size-size/4,y+size/4,cir_size);
    circle(x+size/4,y+size-size/4,cir_size);
  }
  if(n == 4){
    circle(x+size/4,y+size/4,cir_size);
    circle(x+size-size/4,y+size/4,cir_size);
    circle(x+size/4,y+size-size/4,cir_size);
    circle(x+size-size/4,y+size-size/4,cir_size);
  }
  if(n == 5){
    circle(width/2,y+size/2,cir_size);
    circle(x+size/4,y+size/4,cir_size);
    circle(x+size-size/4,y+size/4,cir_size);
    circle(x+size/4,y+size-size/4,cir_size);
    circle(x+size-size/4,y+size-size/4,cir_size);
  }
  if(n == 6){
    circle(x+size/3.5,y+size/4,cir_size);
    circle(x+size/3.5,y+size/2,cir_size);
    circle(x+size/3.5,y+size-size/4,cir_size);
    circle(x+size-size/3.5,y+size/4,cir_size);
    circle(x+size-size/3.5,y+size/2,cir_size);
    circle(x+size-size/3.5,y+size-size/4,cir_size);

  }
}
function mouseReleased(){
  if(page == 32 && shoot == false){
    move = true;
    // 強さの場合分け
    if(power == 0){
      vbx += width/120;
    }
    if(power == 1){
      vbx += width/70;
    }
    if(power == 2){
      vbx += width/50;
    }
    vby += height/30
    shoot = true;
    
  }
  if(page == 100){
    finished = true;
  }
}
// エンディング画面用の関数を作成
function ending(){
  if(page == 7){
    background(0);
    fill(255,0,0);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('BAD END1',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('いきなり攻めすぎました。\n警戒されてしまい、返信がもらえなかったようです。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 20){
    background(200);
    fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('NORMAL END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('講義についての質問ができました。\n一方で進展はありませんでした…\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 41){
    background(255,215,0);
    fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('PAPARAZZI END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('教授の裏の顔を見事暴くことができました。\n見事な腕前でしたね。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 51){
    background(0);
    fill(250);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('BAD END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('教授の裏の顔を暴くことに失敗しました。\nところで何キロ出していたんでしょうか…?\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 42){
    background(200);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('POWERFUL END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('力が強すぎてゴールを飛び越えてしまいました。\n強すぎる人ってちょっと…\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 52){
    background(233,82,78);
    fill(250);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('HAPPY END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('見事シュートを決め、教授のハートを射抜くことに成功しました。\nいい力加減でしたね。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 62){
    background(200);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('POWERLESS END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('力が弱すぎて教授のお眼鏡にはかなわなかったようです。\n筋トレからはじめていきたいですね。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 101){
    background(240,145,153);
    fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('LUCKY END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('見事賭けに勝つことができ、単位を獲得しました。\n運の良さも時には大切です。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 102){
    background(0);
    fill(0,0,250);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('BAD END2',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('賭けに負け、単位を落としました。\n運がない人は日ごろから頑張りたいですね。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 222){
    background(200);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('BAD END3',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('教授の諸事情により、誘いを断わられました。\nいつかは六甲山の高さまでたどり着くことができたらいいですね。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 243){
    background(240,145,153);
    fill(50);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('HUNTER END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('見事イノシシたちを狩りきり、教授と自分を救うことができました。\nもう一流のハンターかもしれません。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 253){
    background(200);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('DEAD END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('うまくイノシシたちをさばききれませんでした。\n命からがら逃げだしましたが教授はお怒りです。\nもう一度始めるにはユーザーネームを入力して開始してください。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
  if(page == 263){
    background(90,58,34);
    fill(34,85,45);
    stroke(225)
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    textSize(height/18);
    text('BEAST END',width/2,height/4);
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(height/40);
    text('あなたは獣たちにもまれ続け、ついに体が獣になってしまいました。\nそして教授を襲わないよう夜の森へと消えていきました…\nおめでとうございます。シークレットエンドです。',width/2,height/2.5);
    nameInput.show();
    startButton.show();
  }
}
// 体育館などを作成
function basket(){
  fill(195,135,67);
  noStroke();
  rect(0,height*2/3,width,height/3);
  rect(width,height*2/8,-width/40,height*2.25/20);
  // リングとネット
  strokeWeight(4);
  stroke(150);
  line(width-width/40,height*2.5/8+height/20,width-width/40-width/150,height*2.5/8+height/7);
  line(width-width/450-width/8,height*2.5/8+height/20,width-width/450-width/8+width/150,height*2.5/8+height/7);
  noStroke();
  fill(215,82,0);
  ellipse(width-width/40,height*2.5/8+height/20,height/70)
  ellipse(width-width/450-width/8,height*2.5/8+height/20,height/70)
  // パワーゲージ
  fill(0,0,255);
  stroke(150)
  rect(width/20,height/20,height/20,height*5/20)
  fill(255,0,0);
  rect(width/20,height/20,height/20,height*1.5/20);
  fill(0,255,0);
  rect(width/20,height/20+height*1.3/20,height/20,height*2/20)
  stroke(0);
  strokeWeight(10);
  line(width/40,height*1/20+pw_h*height*5/20,width/8,height*1/20+pw_h*height*5/20)

  if(mouseIsPressed && !shoot){

  pw_h += pw_v;

  if(pw_h >= 1){
    pw_h = 1;
    pw_v = -0.09;
  }

  if(pw_h <= 0){
    pw_h = 0;
    pw_v = 0.09;
  }

}
}
// バスケットボールを作成
function basket_ball(x,y,size){
  let s = size/2;
  let t = size/4;
  let u = size/2.5;

  push();
  // ここまできてようやくAIにtranslateをおしえてもらったので以後これを採用
  translate(x,y);
  rotate(angle);

  stroke(0);
  strokeWeight(size/25);
  fill(195,135,67);

  circle(0,0,size);

  line(-s,0,s,0);
  line(0,-s,0,s);

  strokeWeight(size/35);
  line(-t,-u,-t,u);
  line(t,-u,t,u);

  pop();
}
// 車道を作成
function papa(){
  fill(150);
  rect(0,height/2,width,height/2);
}
// 車を作成
// 時短のためAIに車を作ってもらった
// 車体は青だったがもっと見にくくなるするため黒に変更
function car(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  // 車体
  fill(5);
  stroke(30);
  strokeWeight(2);
  rect(-65, -48, 130, 36, 8);

  // 屋根
  quad(-35, -48, -20, -72, 25, -72, 43, -48);

  // 窓
  fill(190, 230, 255);
  quad(-29, -51, -17, -68, 0, -68, 0, -51);
  quad(5, -51, 5, -68, 22, -68, 35, -51);

  // ライト
  fill(255, 245, 120);
  rect(58, -38, 7, 12, 3);

  // タイヤ
  fill(30);
  circle(-40, -12, 24);
  circle(40, -12, 24);

  // ホイール
  fill(180);
  circle(-40, -12, 10);
  circle(40, -12, 10);

  pop();
}
// カメラ画面を作成
// バッテリーやその他スケールがややこしかったのでAIにききながら作成
function cameraUI(x, y, w, h) {
  push();
  translate(x, y);

  let s = min(w / 460, h / 260);
  let m = 18 * s;
  let len = 50 * s;

  stroke(255);
  strokeWeight(2 * s);
  noFill();
  // 上下左右のカクカク
  line(m, m, m + len, m);
  line(m, m, m, m + len);
  line(w - m - len, m, w - m, m);
  line(w - m, m, w - m, m + len);
  line(m, h - m - len, m, h - m);
  line(m, h - m, m + len, h - m);
  line(w - m, h - m - len, w - m, h - m);
  line(w - m - len, h - m, w - m, h - m);
  // RECマーク
  noStroke();
  fill(255, 0, 0);
  circle(m + 15*s, m + 25*s, 15*s);
  fill(255);
  textSize(22*s);
  textAlign(LEFT, BASELINE);
  textFont("monospace");
  text("REC", m + 28*s, m + 32*s);
  // 中央の照準
  stroke(255);
  strokeWeight(1.5*s);
  line(w/2 - 12*s, h/2, w/2 + 12*s, h/2);
  line(w/2, h/2 - 12*s, w/2, h/2 + 12*s);

  // バッテリー
  let bx = w - m - 45*s;
  let by = m + 10*s;

  noFill();
  stroke(255);
  rect(bx, by, 34*s, 17*s);
  rect(bx + 34*s, by + 5*s, 4*s, 7*s);

  noStroke();
  fill(255);
  for (let i = 0; i < 3; i++) {
    rect(bx + (3 + i*10)*s, by + 3*s, 7*s, 11*s);
  }
  pop();
}
function inosisi(x,y,size){
   push();
   translate(x,y);
   scale(size);
  //  耳
   fill(90, 58, 34);
   triangle(0,-0.75,-1,-1,-1,-0.3);
   triangle(0,-0.75,1,-1,1,-0.3)
   fill(196,150,150);
   triangle(0,-0.75,-0.85,-0.8,-0.9,-0.3);
   triangle(0,-0.75,0.85,-0.8,0.9,-0.3);
  // 足
   fill(70, 58, 34);
   ellipse(-0.45, 0.95, 0.25, 0.18);
   ellipse( 0.45, 0.95, 0.25, 0.18);
  //  顔
   fill(90,58,34);
   ellipse(0,0,2.25,2);
   stroke(60, 35, 20);
   strokeWeight(0.08);
   line(-0.25, -0.65, -0.15, -0.25);
   line( 0.00, -0.70,  0.00, -0.20);
   line( 0.25, -0.65,  0.15, -0.25);
   noStroke();
   fill(255);
   triangle(-0.45, 0.15, -0.7, 0.25, -0.45, 0.35);
   triangle( 0.45, 0.15,  0.7, 0.25,  0.45, 0.35);
   fill(196, 150, 150);
   ellipse(0,0.2,0.75,0.5);
   fill(5);
   ellipse(-0.2,0.2,0.1,0.2);
   ellipse(0.2,0.2,0.1,0.2);
   ellipse(-0.3,-0.2,0.2,0.2);
   ellipse(0.3,-0.2,0.2,0.2);
   pop();
}
// 夜のキャンパスの背景を作成
function campus(){
  fill(202,162,115);
  rect(0,height*2/3,width,height/3);
  fill(150);
  noStroke();
  rect(width*2/20,height/3,width*16/20,height/3);
  rect(width*7/20,height/5,width*6/20,height/3);
}
// 銃弾を作成
function gun(){
  for(let i = bullets.length - 1; i >= 0; i--){
    let b = bullets[i];
    b.x += b.vx;
    fill(0);
    ellipse(b.x,b.y,height/75);
  }
}
// プレイヤーを作成
function player(x,y,size){
  push();
  translate(x,y);
  scale(direction*size,size);
  stroke(5);
strokeWeight(0.05)
line(0.1,-0.5,0.1,0.04)
line(-0.1,-0.5,-0.1,0.04);

noStroke();
  fill(255,0,0);
ellipse(0,-0.5,0.5,0.75);
fill(0);
stroke(255);
strokeWeight(0.03)
  ellipse(0.1,-0.6,0.15)
  rifle(0,-0.4,2)
  pop();
}
// 猟銃を作成
function rifle(x,y){
  push();
  translate(x,y);
  scale(height/10000);
  stroke(25);
  fill(142,105,50);
  rect(0,0,5,-0.75);
  strokeWeight(0);
  fill(92,55,50)
  ellipse(0,0,1.5,1.5)
  pop();
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

