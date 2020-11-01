import * as PIXI from 'pixi.js';

import { createKeyboardHandler } from './utils/keyboard';
import Player from './objects/Player';
import Ball from './objects/Ball';

const WIDTH = 600;
const HEIGHT = 400;

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: WIDTH, 
  height: HEIGHT,                       
  antialias: true, 
  transparent: false, 
  resolution: 1
});

document.body.appendChild(app.view);
app.loader.load(setup);

let state;
let player1;
let player2;
let ball;

function setup() {
  state = play;
  player1 = new Player(10, 20);
  player2 = new Player(580, 340);
  ball = new Ball(WIDTH / 2, HEIGHT / 2)

  player2.init();
  player1.init();
  ball.init();

  app.stage.addChild(player1.body);
  app.stage.addChild(player2.body);
  app.stage.addChild(ball.body);

  app.ticker.add(delta => gameLoop(delta));

  const keyA = createKeyboardHandler('KeyA');
  const keyZ = createKeyboardHandler('KeyZ');

  keyA.onPress = () => player1.vy = -3;
  keyA.onRelease = () => player1.vy = 0;

  keyZ.onPress = () => player1.vy = 3;
  keyZ.onRelease = () => player1.vy = 0;

  const arrowUp = createKeyboardHandler('ArrowUp');
  const arrowDown = createKeyboardHandler('ArrowDown');

  arrowUp.onPress = () => player2.vy = -3;
  arrowUp.onRelease = () => player2.vy = 0;

  arrowDown.onPress = () => player2.vy = 3;
  arrowDown.onRelease = () => player2.vy = 0;
}

function gameLoop(delta) {
  state(delta)
}

function play() {
  player1.update();
  player2.update();
  ball.update();

  if (ball.isCollision(player1) || ball.isCollision(player2)) {
    ball.reverse();
  }
}