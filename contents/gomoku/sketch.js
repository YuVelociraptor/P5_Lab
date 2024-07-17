const cell_num = 5;
const max_text_size = 100;

let array;
let board_size;
let cell_size;

function setup() {

  createCanvas(windowWidth * 0.97, windowHeight * 0.97);
  board_size = min(windowWidth, windowHeight) * 0.95;
  cell_size = board_size / cell_num;

  init();
}

function draw() {
  background(180, 220, 190);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {

      fill(180, 220, 210);
      square(i * cell_size , j * cell_size, cell_size);

      if (array[i][j] > 0) {

        if (array[i][j] == 1) {
          fill(255, 0, 0);
        }else{
          fill(255, 255, 255);
        }
        
        ellipse(i * cell_size + cell_size / 2, j * cell_size + cell_size / 2, cell_size * 0.8);
      }
    }
  }

  let res = checkCellCnt();

  if(windowWidth > windowHeight){

    let tSize = (windowWidth - board_size) / 4;
    tSize = min(tSize, max_text_size);

    fill(255, 0, 0);
    textSize(tSize);
    text('R : ' + res[0], board_size, tSize + 10);
  
    fill(255, 255, 255);
    textSize(tSize);
    text('W : ' + res[1], board_size, tSize * 3);

  }else{

    let tSize = (windowHeight - board_size);
    tSize = min(tSize, board_size / 8);
    tSize = min(tSize, max_text_size);
    console.log(tSize);

    fill(255, 0, 0);
    textSize(tSize);
    text('R : ' + res[0], 10, board_size + tSize) ;
  
    fill(255, 255, 255);
    textSize(tSize);
    text('W : ' + res[1], tSize * 4, board_size + tSize);
  }


}

function mouseClicked() {

  if(mouseX < board_size && mouseY < board_size){
    chengeCell(floor(mouseX / board_size * cell_num), floor(mouseY / board_size * cell_num));
  }
}

function init() {
  array = new Array(cell_num);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(cell_num);
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = 0;
    }
  }
}

function chengeCell(x, y) {
  array[x][y]++;

  if (array[x][y] > 2) {
    array[x][y] = 0;
  }
}

function checkCellCnt(){

  let maxRCnt = 0;
  let maxWCnt = 0;

  for(let j = 0; j < array.length; j++){

    let rCnt = 0;
    let wCnt = 0;

    for(let i = 0; i < array[j].length; i++){
      
      if(array[j][i] == 1){
        rCnt++;
        wCnt = 0;

      }else if(array[j][i] == 2){
        wCnt++;
        rCnt = 0;

      }else{
        rCnt = 0;
        wCnt = 0;
      }

      maxRCnt = max(maxRCnt, rCnt);
      maxWCnt = max(maxWCnt, wCnt);
    }
  }

  for(let i = 0; i < array.length; i++){

    let rCnt = 0;
    let wCnt = 0;

    for(let j = 0; j < array[i].length; j++){

      if(array[j][i] == 1){
        rCnt++;
        wCnt = 0;
      
      }else if(array[j][i] == 2){
        wCnt++;
        rCnt = 0;

      }else{
        rCnt = 0;
        wCnt = 0;
      }

      maxRCnt = max(maxRCnt, rCnt);
      maxWCnt = max(maxWCnt, wCnt);
    }
  }

  let rCnt = 0;
  let wCnt = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i][i] == 1){
      rCnt++;
      wCnt = 0;
    }else if(array[i][i] == 2){
      wCnt++;
      rCnt = 0;
    }else{
      rCnt = 0;
      wCnt = 0;
    }
    maxRCnt = max(maxRCnt, rCnt);
    maxWCnt = max(maxWCnt, wCnt);
  }

  rCnt = 0;
  wCnt = 0;
  for(let i = 0; i < array.length; i++){
    if(array[array.length - 1 - i][i] == 1){
      rCnt++;
      wCnt = 0;
    }else if(array[array.length - 1 - i][i] == 2){
      wCnt++;
      rCnt = 0;
    }else{
      rCnt = 0;
      wCnt = 0;
    }
    maxRCnt = max(maxRCnt, rCnt);
    maxWCnt = max(maxWCnt, wCnt);
  }

  return [maxRCnt, maxWCnt];
}