let display_xo = false;
let diplay_width = 0;
let display_height = 0;

let question_length = 0;
let question_trim = 0;

let button_length = 0;
let button_trim = 0;

let clear_button_length = 0;

let button_start_h = 0;

let var1 = 0;
let var2 = 0;

let correct_answer = -99;
let player_answer = -100;

const answer_max = 16;

let count = localStorage.getItem('count');
if (count === null) {
  count = 0;
} else {
  count = parseInt(count, 10);
}

function setup() {
  diplay_width = windowWidth * 0.97
  display_height = windowHeight * 0.97
  createCanvas(diplay_width, display_height);

  question_length = min(diplay_width / 6, display_height / 2) * 0.95;
  question_trim = min(diplay_width * 0.05, display_height * 0.05);

  button_length = min(diplay_width / 8, display_height / 5) * 0.95;
  button_trim = min(diplay_width * 0.03, display_height * 0.03);

  button_start_h = question_length + question_trim * 2;

  clear_button_length = min(diplay_width / 10, display_height / 8) * 0.95;

  makeQuestion();
}

function draw() {
  background(180, 220, 190);

  dispQuestion();
  dispButton();

  if(display_xo){
    if(correct_answer == player_answer){
      dispOK();
      count++;
      localStorage.setItem('count', count);
    }else{
      dispNG();
    }
  }

  fill(0, 0, 0);
  noStroke();
  textSize(button_length * 0.3);
  text(countNumberText(count), diplay_width - question_trim * 2, question_trim * 2);

  noLoop();
}

function mousePressed() {
  if(display_xo){
    display_xo = false;

    if(correct_answer == player_answer){
      makeQuestion();
    }
  }else{

    rect(diplay_width - question_trim * 2, question_trim * 2.1, clear_button_length, button_length * 0.3);

    if(
        mouseX > diplay_width - question_trim * 2 &&
        mouseX < diplay_width - question_trim * 2 + clear_button_length &&
        mouseY > question_trim * 2.1 &&
        mouseY < question_trim * 2.1 + button_length * 0.3
    ){
        clearCount();
    }else{

      let xCnt = 0;
      let yCnt = 0;
      for(let i = 0; i < answer_max; i++){

        if(button_trim + (xCnt + 1) * (button_length + button_trim) >= diplay_width){

          xCnt = 0;
          yCnt++;
        }

        let xs = button_trim + xCnt * (button_length + button_trim);
        let ys = button_start_h + yCnt * (button_length + button_trim);
        xCnt++;

        rect(xs, ys, button_length, button_length);

        if(
            mouseX > xs &&
            mouseX < xs + button_length &&
            mouseY > ys &&
            mouseY < ys + button_length
        ){
          player_answer = i + 1;
          display_xo = true;
          break;
        }
      }
    }
  }

  loop();
}

function dispOK(){

  stroke(255, 0, 0);
  strokeWeight(17);
  noFill();

  const r = min(diplay_width, display_height) * 0.7;
  ellipse(diplay_width / 2, display_height / 2 ,r, r);
}

function dispNG(){

  const l = min(diplay_width, display_height) * 0.4;

  stroke(255, 0, 0);
  strokeWeight(17);

  line(
    diplay_width / 2 - l / 1.41, 
    display_height / 2 - l / 1.41, 
    diplay_width / 2 + l / 1.41, 
    display_height / 2 + l / 1.41
  );

  line(
    diplay_width / 2 + l / 1.41,
    display_height / 2 - l / 1.41,
    diplay_width / 2 - l / 1.41,
    display_height / 2 + l / 1.41
  );

}

function dispQuestion(){

  stroke(0, 0, 0);
  strokeWeight(1);

  fill(255, 255, 255);
  //rect(question_trim, question_trim, question_length, question_length);
  //rect(question_trim + question_length * 2.3, question_trim, question_length, question_length);
  //rect(question_trim + question_length * 1.3, question_trim * 1.9, question_length * 0.7, question_length * 0.7);
  rect(question_trim, question_trim, question_length * 3.5, question_length);

  fill(0, 0, 0);
  textSize(question_length * 0.8);
  text(questionNumberText(var1), question_trim, question_trim + question_length * 0.8);
  text(questionNumberText(var2), question_trim + question_length * 2.3, question_trim + question_length * 0.8);
  text(operator, question_trim + question_length * 1.33, question_trim + question_length * 0.8);
}

function makeQuestion(){
  do{
    var1 = round(random(1, answer_max));
    var2 = round(random(1, answer_max));

    if(random(0,15) > 5){
      operator = '-';
      correct_answer = var1 - var2;
    }else{
      operator = '+';
      correct_answer = var1 + var2;
    }
  }while(correct_answer < 1 || correct_answer > answer_max)
}

function questionNumberText(v){
  return v.toString().padStart(2, ' ');
}

function countNumberText(v){
  return v.toString().padStart(3, '0');
}

function dispButton(){

  line(0, button_start_h, diplay_width, button_start_h);

  let xCnt = 0;
  let yCnt = 0;
  for(let i = 0; i < answer_max; i++){

    if(button_trim + (xCnt + 1) * (button_length + button_trim) >= diplay_width){

      xCnt = 0;
      yCnt++;
    }
    
    let xs = button_trim + xCnt * (button_length + button_trim);
    let ys = button_start_h + yCnt * (button_length + button_trim);
    xCnt++;

    fill(255, 255, 255);
    rect(xs, ys, button_length, button_length);

    fill(0, 0, 0);
    textSize(button_length * 0.8);
    text(questionNumberText(i + 1), xs, ys + button_length * 0.8);
  }

  fill(255, 255, 255);
  rect(diplay_width - question_trim * 2, question_trim * 2.1, clear_button_length, button_length * 0.3);

  fill(0, 0, 0);
  textSize(button_length * 0.2);
  text('リセット', diplay_width - question_trim * 2, question_trim * 2.05 + button_length * 0.3);
}

function clearCount(){
  count = 0;
  localStorage.setItem('count', count);
}