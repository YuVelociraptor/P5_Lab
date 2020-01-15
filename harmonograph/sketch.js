const s = 200;
var cnt = 1;

function setup() {
  createCanvas(1200, 800);
  background(255);

}

function draw() {

  background(255);

  for(let t = 0; t < 1000; t += 0.01){

    stroke(cos(t) * 255, sin(t) * 255, sin(t) * 255);

    const w1 = 11;
    const w2 = 13;
    const w3 = 13;
    const w4 = 17;

    const l1 = 1;
    const l2 = 1;
    const l3 = 1;
    const l4 = 1;

    var x = wavePosition(t, w1, l1) + wavePosition(t, w2, l2);
    var y = wavePosition(t, w3, l3) + wavePosition(t, w4, l4);

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