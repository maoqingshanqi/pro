let board = [];
let size;
let turn = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);

  size = width / 8;

  // 盤面作成
  for (let row = 0; row < 8; row++) {
    board.push([]);

    for (let col = 0; col < 8; col++) {
      board[row].push(0);
    }
  }

  // 初期配置
  board[3][3] = 1;
  board[3][4] = 2;
  board[4][3] = 2;
  board[4][4] = 1;
}

function draw() {
  background(220);

  // マスを描画
  strokeWeight(3);

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      fill(0,84, 0);
      rect(
        col * size,
        row * size,
        size,
        size
      );

      let x = col * size + size / 2;
      let y = row * size + size / 2;

      
        if (board[row][col] == 2) {
          fill(0);
          circle(x, y, size - 15);
        }

        
        if (board[row][col] == 1) {
          fill(255);
          circle(x, y, size - 15);
        }
    }
  }
  
textSize(30);

if (turn == 1) {
  fill(255);
  text("白の番", 420, 50);
}

if (turn == 2) {
  fill(0);
  text("黒の番", 420, 50);
}
}

function mousePressed() {

  let col = floor(mouseX / size);
  let row = floor(mouseY / size);
  
  
 if(board[row][col]==0 ){


  board[row][col] = turn;
  turn = 3-turn;
 }
 
 
}
