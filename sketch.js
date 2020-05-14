/*
Name: Hyunjin.Kim (김현진)
Assignment Name: Track Mouse in 4 Squares
Course Number: cs099s20
Term & Year : spring / 2020

*/


let mx, my;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

}

function draw() {
  background(220);
  
  mx = mouseX;
  my = mouseY;
  
  strokeWeight(3);
  line(0, 0, 0, 400);
  line(0, 0, 400, 0);
  line(0, 400, 400, 400);
  line(400, 0, 400, 400);
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  
  if(mx < 200 && my < 200) circle(100, 100, 100);
  if(mx < 200 && my > 200) square(100, 300, 100);
  if(mx > 200 && my < 200) {
    triangle(245, 150, 300, 50, 355, 150);
  }
  if(mx > 200 && my > 200) {
    line(250, 250, 350, 350);
    line(250, 350, 350, 250);
  }
   
}
