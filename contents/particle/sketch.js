//const COLOR_0 = color(255, 255, 255);
//const COLOR_1 = color(116, 255, 255);
//const COLOR_2 = color(147, 207, 255);
//const COLOR_3 = color(198, 146, 226);
//const COLOR_4 = color(153, 136, 236);

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  update(x, y){
    this.x = x;
    this.y = y;
  }
}

let particles;

function setup() {

  createCanvas(800, 800);

  init();
}

function draw() {
  background(255);

  generate();
  circle(particles[0].x, particles[0].y, 100);
  particles[0].update(particles[0].x + 2, particles[0].y + 1);
}

// reset board when mouse is pressed
function mousePressed() {
  init();
}

// Fill board randomly
function init() {

  particles = new Array(1);

  p = new Particle(100, 200);
  particles[0] = p;
  console.log(particles[0]);
}

// The process of creating the new generation
function generate() {


}

