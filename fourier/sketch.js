var step = 0.01;
var yo;
var y;
var t = 0;

function setup() {
  createCanvas(1200, 800);
  background(255);

  yo = new Array(width);
  y = new Array(width);

  for (var i = 0; i < y.length; i++) {
    if (
      (i >= 0 && i < 100) ||
      (i >= 200 && i < 300) ||
      (i >= 400 && i < 500) ||
      (i >= 600 && i < 700) ||
      (i >= 800 && i < 900) ||
      (i >= 1000 && i < 1100) ||
      (i >= 1200 && i < 1300)
    ) {
      yo[i] = 100;
    } else {
      yo[i] = 0;
    }
  }

  drawArray(yo);
}

function draw() {
  if (t == 0) {
    var a0 = yo.reduce((arg1, arg2) => arg1 + arg2) / yo.length;

    for (var i = 0; i < y.length; i++) {
      y[i] = a0;
    }
  } else {
    var an = 0;
    var bn = 0;

    for (var i = 0; i < y.length; i++) {
      an += y[i] * cos((2 * PI * t * i * step) / width) * 2 / width;
      bn += y[i] * sin((2 * PI * t * i * step) / width) * 2 / width;
    }

    for (var i = 0; i < y.length; i++) {
      y[i] +=
        an * cos((2 * PI * t * i * step) / width) + bn * sin((2 * PI * t * i * step) / width);
    }

    console.log(an + bn);
  }

  drawArray(y);
  t++;
}

function drawArray(array) {
  for (var i = 0; i < array.length; i++) {
    pp(i, array[i]);
  }
}

function pp(x, y) {
  point(cx(x), cy(y));
}

function cx(x) {
  // return x + width / 2;
  return x;
}

function cy(y) {
  return height / 2 - y;
}
