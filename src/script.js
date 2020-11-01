import * as PIXI from 'pixi.js';

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: 400, 
  height: 400,                       
  antialias: true, 
  transparent: false, 
  resolution: 1
});

const imgUrl = 'https://raw.githubusercontent.com/kittykatattack/learningPixi/master/examples/images/cat.png';

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
app.loader
  .add('catImage', imgUrl)
  .load(setup);

let cat;

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  cat = new PIXI.Sprite(app.loader.resources.catImage.texture);

  // set position on canvas
  cat.position.set(100, 100)

  // positioning can also be done like so so:
  // cat.x = 100;
  // cat.y = 100;

  // change width and height of image
  cat.width = 200;
  cat.height = 100;

  // scale resets width and height
  cat.scale.x = 1;
  cat.scale.y = 1;

  // scaling can also be done like so:
  cat.scale.set(2, 2);

  // center rotation anchor
  cat.anchor.x = 0.5;
  cat.anchor.y = 0.5;

  // there is also function for setting anchor
  // cat.anchor.set(0.5, 0.5);

  // rotate image 90deg clockwise
  cat.rotation = Math.PI / 2;

  //Add the cat to the stage
  app.stage.addChild(cat);

  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop() {
  cat.x += 1;
}