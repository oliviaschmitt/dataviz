// setup() is called once at page-load
function setup() {
    createCanvas(720,400);
    frameRate(1);

}
// draw() is called 1 time per second

function draw() {
  background('Pink');

  let hr = hour();
  let min = minute();
  let sec = second();
  
 push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 40, hr / 2);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 60, min);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 80, sec);
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}



