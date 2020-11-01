import { get } from 'lodash';
import { Graphics } from 'pixi.js';

const generateRandomAngle = () => Math.random() * Math.PI;
const getVx = (angle, velocity) => Math.cos(angle) * velocity;
const getVy = (angle, velocity) => Math.sin(angle) * velocity;

export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 6;
    this.angle = generateRandomAngle();
    this.velocity = 2;
  }

  init() {
    const circle = new Graphics();
    circle.beginFill(0xFFFFFF);
    circle.drawCircle(0, 0, this.radius);
    circle.x = this.x;
    circle.y = this.y;
    circle.endFill();

    this.body = circle;

    this.vx = getVx(this.angle, this.velocity);
    this.vy = getVy(this.angle, this.velocity);
  }

  update() {
    if (this.isCollisionTop() || this.isCollisionBottom()) {
      console.log('collided')
      if (this.angle > Math.PI / 2) {
        this.angle += Math.PI / 4;
      } else {
        this.angle -= Math.PI / 4;
      }
    }

    this.body.x += getVx(this.angle, this.velocity);
    this.body.y += getVy(this.angle, this.velocity);
  }

  isCollision(other) {
    const selfCenterX = this.body.x + this.body.width / 2;
    const selfCenterY = this.body.y + this.body.height / 2;
    const otherCenterX = other.body.x + other.body.width / 2;
    const otherCenterY = other.body.y + other.body.height / 2;

    const selfHalfWidth = this.body.width / 2;
    const selfHalfHeight = this.body.height / 2;
    const otherHalfWidth = other.body.width / 2;
    const otherHalfHeight = other.body.height / 2;

    const vx = selfCenterX - otherCenterX;
    const vy = selfCenterY - otherCenterY;

    const combinedHalfWidth = selfHalfWidth + otherHalfWidth;
    const combinedHalfHeight = selfHalfHeight + otherHalfHeight;

    return Math.abs(vx) < combinedHalfWidth && Math.abs(vy) < combinedHalfHeight;
  }

  reverse() {
    this.vx = -this.vx;
    this.vy = -this.vy;
  }

  isCollisionTop() {
    return this.body.y < 10;
  }

  isCollisionBottom() {
    return this.body.y + this.body.height > 390;
  }
}