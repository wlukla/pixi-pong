import * as PIXI from 'pixi.js';

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: 256, 
  height: 256,                       
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

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  let cat = new PIXI.Sprite(app.loader.resources.catImage.texture);

  //Add the cat to the stage
  app.stage.addChild(cat);
}
