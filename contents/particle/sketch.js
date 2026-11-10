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

    circle(this.position.x, this.position.y, 50);
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

  if(p5.Vector.dist(particle_org.position, particle_counter.position) > 5){

    return createVector(0, 0);
  }

  // repulsive force
  if(p5.Vector.dist(particle_org.position, particle_counter.position) < 1){

    return p5.Vector.sub(particle_counter, particle_org);
  }
  
  // attractive force
  return p5.Vector.sub(particle_org, particle_counter);

}
