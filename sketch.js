var h
var m
var s
var hangle, mangle, sangle

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
}

function draw() {
  translate(250,250)
  rotate(-90)
  background(0); 
  h=hour()
  m=minute()
  s=second()
  mangle=map (m,0,60,0,360)
  sangle=map(s,0,60,0,360)
  hangle=map(h%12,0,12,0,360)
  push()
  rotate(mangle)
  stroke("white")
  line(0,0,80,0)
  pop()
  push()
  rotate(sangle)
  stroke("red")
  line(0,0,70,0)
  pop()
  push()
  rotate(hangle)
  stroke("green")
  line(0,0,50,0)
  pop()
  noFill()
  stroke("green")
  arc(0,0,200,200,0,hangle)
  stroke("white")
  arc(0,0,180,180,0,mangle)
  stroke("red")
  arc(0,0,160,160,0,sangle)
  drawSprites();
  

}