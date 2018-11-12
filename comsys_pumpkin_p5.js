var x, y, z;

function setup() {
   createCanvas(640,360);
   background(0);
   
   fill(255, 193, 37);
  noStroke();
  beginShape();
  vertex(244.1, 46.13);
  bezierVertex(211.91, 37.34, 170.81, 61.28, 151.05, 94.33);
  bezierVertex(141.97, 109.51, 139.79, 149.88, 135.75, 172.97);
  bezierVertex(128.18, 216.24, 105.55, 255.65, 128.1, 294.74);
  bezierVertex(144.96, 323.95, 178.66, 353.72, 204.58, 346.75);
  bezierVertex(214.88, 343.98, 238.5, 325.87, 253.02, 328.99);
  bezierVertex(262.32, 330.99, 310.69, 343.22, 320.58, 346.75);
  bezierVertex(336.81, 352.54, 361.16, 334.39, 383.04, 334.07);
  bezierVertex(401.52, 333.8, 407.1, 350.42, 422.56, 351.83);
  bezierVertex(452.09, 354.52, 480.75, 325.27, 490.12, 317.58);
  bezierVertex(542.04, 275, 515.63, 207.77, 502.87, 159.02);
  bezierVertex(496, 132.81, 462.04, 52.45, 435.3, 43.59);
  bezierVertex(410.58, 35.4, 384.33, 71.41, 356.27, 55.01);
  bezierVertex(346.54, 49.33, 332.01, 44.55, 321.85, 43.59);
  bezierVertex(306.14, 42.11, 303.43, 54, 286.16, 55.01);
  bezierVertex(271.9, 55.84, 257.88, 49.89, 244.1, 46.13);
  endShape();
  
  fill(12, 48, 6);
  stroke(255, 193, 37);
  ellipse(320.76, 86.72, 35.69, 17.76);
  beginShape();
  vertex(307.37, 87.35);
  bezierVertex(299.39, 48.25, 271.68, 22.66, 262.76, 23.93);
  bezierVertex(259.84, 24.34, 259.01, 12.36, 260.21, 9.98);
  bezierVertex(262.76, 4.91, 275.43, 9.57, 280.61, 12.52);
  bezierVertex(289.53, 17.59, 318.93, 39.36, 337.97, 87.36);
  endShape();
}

function draw() {
  textSize(10);
  fill(255);
  text("Click pumpkin to add spots.", 20, 20);
  text("Press any key to change color of spot.", 20, 40);
  
  //draw spots
  if (mouseIsPressed) {
    fill(x, y, z);
    ellipse(mouseX, mouseY, mouseX%20+10, mouseX%20+10);
  }
  
  if (keyIsPressed === true) {
    x = 255;
    y = 193;
    z = 37;
  } else {
    x = 0;
    y = 0;
    z = 0;
  }
}
