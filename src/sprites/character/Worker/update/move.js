import { nextCoord } from '../../../../utils';

export default function move(direction) {
  if (this.moving) return;

  this.face(direction);

  const moveSpeed = 10;

  const nextPixelCoord = nextCoord({ x: this.x, y: this.y }, direction, 32);

  this.move(nextPixelCoord);
}
