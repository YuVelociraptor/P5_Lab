const s = 200;
let wSliders = new Array(4);

function setup() {
  createCanvas(1200, 800);
  background(255);

  for(let c = 0; c < wSliders.length; c++){
    wSliders[c] = createSlider(0, 100, 10, 1);
    wSliders[c].position(1000, 100 * (c + 1));
    wSliders[c].style('width', '200px');
  }
}

function draw() {

  background(255);

  for(let t = 0; t < 1000; t += 0.01){

    stroke(cos(t) * 255, cos(t + 2 * PI / 3) * 255, cos(t + 4 * PI / 3) * 255);

    let ws = new Array(wSliders.length);
    for(let c = 0; c < wSliders.length; c++){

      ws[c] = wSliders[c].value();
    }

    const l1 = 1;
    const l2 = 1;
    const l3 = 1;
    const l4 = 1;

    var x = wavePosition(t, ws[0], l1) + wavePosition(t, ws[1], l2);
    var y = wavePosition(t, ws[2], l3) + wavePosition(t, ws[3], l4);

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