import * as PIXI from 'pixi.js';

import { createKeyboardHandler } from './utils/keyboard';
import Player from './objects/Player';

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: 400, 
  height: 400,                       
  antialias: true, 
  transparent: false, 
  resolution: 1
});

document.body.appendChild(app.view);
app.loader.load(setup);

let state;
let player1;

function setup() {
  state = play;
  player1 = new Player(10, 20);
  player1.init();

  app.stage.addChild(player1.body);

  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  state(delta)
}

function play() {
}