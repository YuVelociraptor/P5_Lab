const s = 300;
var cnt = 1;

function setup() {
  createCanvas(1200, 800);
  background(255);

}

function draw() {

  background(255);

  for(var t = 0; t < 1000; t += 0.01){

    stroke(cos(t) * 255, sin(t) * 255, sin(t) * 255);

    var x = wavePosition(t, 1, PI / 2);
    var y = wavePosition(t, 1, 0);
    plotGraph(x, y);
  }
}

function plotGraph(x, y){
  point(plotedX(x), plotedY(y));
}

function plotedX(x){

  return s * x + width / 2;
}

function plotedY(y){

  return s * (-y) + height / 2;
}

function wavePosition(t, w, l){

  return sin(t * w + l);
}