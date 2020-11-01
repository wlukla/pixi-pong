import { Graphics } from 'pixi.js';

export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;

    this.width = 10;
    this.height = 50;
  }

  init() {
    const rectangle = new Graphics();
    rectangle.beginFill(0xFFFFFF);
    rectangle.drawRect(this.x, this.y, this.width, this.height);
    rectangle.endFill();

    this.body = rectangle;
  }

  update() {
    this.body.y += this.vy;
  }
}