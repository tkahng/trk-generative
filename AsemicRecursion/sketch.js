// homage to anders hoff, e.g.
// https://img.inconvergent.net/img/gen/20171231-111025.png

let gridSize = 8;

function drawLetter(weight, depth) {
  let opt = int(random(5));
  if (random() < 0.5) {
    rotate(PI*0.125 * int(random(16)));
  }
  if (opt == 0) {
    ellipse(0, 0, 20, 20);
    rotate(PI*0.5);
    translate(20, 0);
  }
  else if (opt == 1) {
    line(-20, 0, 20, 0);
    translate(10, 0);
  }
  else if (opt == 2) {
    line(0, -20, 0, 20);
    translate(0, 10);
  }
  else if (opt == 3) {
    arc(0, 0, 20, 20, random(TWO_PI), random(TWO_PI));
  }
  else {
    line(-5, -10, -5, 10);
    line(5, -10, 5, 10);
    translate(0, 10);
  }
  // always recurse on first call, then only at random and
  // if we're not already too deep
  if ((depth == 1) || (random() < 0.9 && depth < 5)) {
    scale(0.75);
    weight *= 1.33;
    strokeWeight(weight);
    // scale() affects strokeWeight, so to keep the
    // strokeWeight even, we need to pass the current
    // weight plus a multiplier in the recursion
    drawLetter(weight, depth+1);
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  push();
  translate(width/(gridSize*2), height/(gridSize*2));
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
  		push();
  		translate(i * (width/gridSize), j * (height/gridSize));
      scale(1.25);
  		stroke(0);
  		noFill();
  		drawLetter(1, 1);
  		pop();		
    }
  }
  pop();
  noLoop();
}

function mousePressed() {
  draw();
}