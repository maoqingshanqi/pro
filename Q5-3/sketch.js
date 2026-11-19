// カレンダーを描画しよう
let year = 2025
let month = 10
function setup(){
  
  createCanvas(200, 200);
  drawCalendar(2025, 10);
  createButton("←").mousePressed(prevMonth);
  createButton("→").mousePressed(nextMonth);
}
function draw(){
  background(255);
  drawCalendar(year,month);
  fill(0)
  text(year+'年'+month+'月のカレンダー',0,175)
}

function drawCalendar(y, m){
  for(let i = 0; i < 7; i++){
    const x = i * width / 7;
    const Y = 20;
   
    stroke(255);
    text(dayOfWeekAsString(i), x, Y);
    
    }

  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
  
  let index = dow + d - 1;

  let col = index % 7;
  let row = floor(index / 7);

  let x = col * width/7;
  let yp = 40 + row * 20;
  
  
  if(col == 0){
    fill(255,0,0);
  }
  else if(col == 6){
    fill(0,0,255);

  }
  else{
    fill(0);
  }
  
  
  text(d, x, yp);
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
  let count = 0;
  for(i=1970;i<y;i++){
    count += daysInYear(i);
  }
  count += dayOfYear(y, m, d) - 1;
  return (count + 4) % 7;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow]; 
}
function prevMonth(){
  month--;

  if(month < 1){
    month = 12;
    year--;
  }
}

function nextMonth(){
  month++;

  if(month > 12){
    month = 1;
    year++;
  }
}
