//const COLOR_0 = color(255, 255, 255);
//const COLOR_1 = color(116, 255, 255);
//const COLOR_2 = color(147, 207, 255);
//const COLOR_3 = color(198, 146, 226);
//const COLOR_4 = color(153, 136, 236);

class Particle{
  constructor(x, y){
    this.position = createVector(x, y);
  }

  update(force_vect){
    this.position.add(force_vect);
  }

  draw_particle(){

    circle(this.position.x, this.position.y, 5);
  }
}

const particle_num = 10;
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
    p = new Particle(400 + random(10), 400 + random(10));
    particles[i] = p;
  }
}

function update_particles() {

  let c = new Array(particle_num);
  for(let i = 0; i < c.length; i++){
    c[i] = createVector(0, 0);
  }
  
  for(let i = 0; i < particles.length; i++){
    for(let j = 0; j < particles.length; j++){

      if(i != j){
        c[i].add(force(particles[i], particles[j]));
      }
    }
  }

  for(let i = 0; i < particles.length; i++){
    particles[i].update(c[i]);
  }
}

function force(particle_org, particle_counter){

  if(p5.Vector.dist(particle_org.position, particle_counter.position) > 10){

    return createVector(0, 0);
  }

  // repulsive force
  if(p5.Vector.dist(particle_org.position, particle_counter.position) < 1){

    return p5.Vector.sub(particle_counter.position, particle_org.position).mult(0, 0);
  }
  
  // attractive force
  return p5.Vector.sub(particle_org.position, particle_counter.position).mult(1, 1);

}
