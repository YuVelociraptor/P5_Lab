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

  draw_particle(){

    circle(this.x, this.y, 100);
  }
}

const particle_num = 2;
let particles;

function setup() {

  createCanvas(800, 800);

  init();
}

function draw() {
  background(255);

  for(let i = 0; i < particles.length; i++){
    particles[i].draw_particle();
  }
  update_particles();
}

// reset board when mouse is pressed
function mousePressed() {
  init();
}

// Fill board randomly
function init() {

  particles = new Array(particle_num);

  for(let i = 0; i < particles.length; i++){
    p = new Particle(50 * (i + 1),  50 * (i + 1));
    particles[i] = p;
  }
}

function update_particles() {

  for(let i = 0; i < particles.length; i++){
    for(let j = 0; j < particles.length; j++){

      if(i != j){
        f = force(p[i], p[j]);

        particles[i].update(particles[i].x + f[0], particles[i].y + f[1]);
      }
    }

  }
}

function force(particle_org, particle_counter){

  if((particle_org.x - particle_counter.x)^2 + (particle_org.y - particle_counter.y)^2 > 5^2){

    return [0, 0];
  }

  vec = [
    particle_counter.x - particle_org.x,
    particle_counter.y - particle_org.y
  ]

  // repulsive force
  if((particle_org.x - particle_counter.x)^2 + (particle_org.y - particle_counter.y)^2 < 1^2){

    return vec;
  }
  
  // attractive force
  return -vec;

}