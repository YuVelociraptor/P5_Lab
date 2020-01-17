const s = 200;
let wSliders = new Array(4);
let lSliders = new Array(4);

function setup() {
  createCanvas(1200, 800);
  background(255);

  for(let c = 0; c < wSliders.length; c++){
    wSliders[c] = createSlider(0, 100, 10, 1);
    wSliders[c].position(1000, 100 * (c + 1));
    wSliders[c].style('width', '100px');
  }

  for(let c = 0; c < lSliders.length; c++){
    lSliders[c] = createSlider(0, 360, 0, 1);
    lSliders[c].position(1100, 100 * (c + 1));
    lSliders[c].style('width', '100px');
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

    let ls = new Array(lSliders.length);
    for(let c = 0; c < lSliders.length; c++){

      ls[c] = lSliders[c].value() * 2 * PI / 360;
    }

    var x = wavePosition(t, ws[0], ls[0]) + wavePosition(t, ws[1], ls[1]);
    var y = wavePosition(t, ws[2], ls[2]) + wavePosition(t, ws[3], ls[3]);

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