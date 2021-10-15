

function preload(){
  foodwrap = loadImage('assets/foodwrap.png');
  glove = loadImage('assets/glove.png');
  bag = loadImage('assets/bag.png');

}

function setup() {


  createCanvas(375, 812);
  background('black');


  input = createInput();
  input.position(23, 608);
  input.style('font-size', '30px');
  input.size(303, 67);


  button = createButton('search');
  button.position(133, 697);
  button.size(108, 34);
  button.mousePressed(search);

  button2 = createButton('purchase price');
  button2.position(23, 463);
  button2.size(88, 40);


  button3 = createButton('potential savings');
  button3.position(137, 463);
  button3.size(88, 40);


  button3 = createButton('last for');
  button3.position(251, 463);
  button3.size(88, 40);



  }

function draw(){
  fill(255, 255, 255);
    textSize(48);
    // textFont('Summer');
  text ('Sustainable', 60, 50);

  fill(255, 255, 255);
    textSize(16);
  text ('for ex: food wrap, gloves, bag', 70, 780);
}







function search() {
  const name = input.value();
  // input.value('');
  // greeting.html('hello ' + name + '!');
  if (name === 'food wrap'){
    image(foodwrap, 23, 108, 316, 271);
    fill(255, 255, 255);
    textSize(30);
  text ('Reusable food wrap', 45, 410);
  textSize(16);
  text ('$2.85', 48, 524);
  text ('$34/year', 150, 524);
  text ('one year', 260, 524);
  }

  if (name === 'gloves'){
    image(glove, 23, 108, 316, 271);
    fill(255, 255, 255);
    textSize(30);
  text ('Eco gloves', 116, 410);
  textSize(16);
  text ('$0.14', 48, 524);
  text ('', 150, 524);
  text ('Compostable', 250, 524);
  }

  if (name === 'bag'){
    image(bag, 23, 108, 316, 271);
    fill(255, 255, 255);
    textSize(30);
  text ('Reusable bags', 80, 410);
  textSize(16);
  text ('$1.04', 48, 524);
  text ('$50/year', 150, 524);
  text ('3-5 years', 260, 524);
  }


}



// function draw(){
//
//
//     text (name, 20, 175);
//
// }
