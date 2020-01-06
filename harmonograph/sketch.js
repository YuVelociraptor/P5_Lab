function setup() {
  createCanvas(1200, 800);
  background(255);

}

function draw() {

  for(var t = 0; t < 1000; t += 0.01){

    plotGraph(cos(t), sin(t));
  }
}

function plotGraph(x, y){
  point(plotedX(x), plotedY(y));
}

function plotedX(x){

  return x + width / 2;
}

function plotedY(y){

  return -y + height / 2;
}