export interface Point2DRecord {
  readonly x: number;
  readonly y: number;
}

export class Point2D implements Point2DRecord {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export interface HexAxialRecord {
  readonly q: number;
  readonly r: number;
}

export interface HexCubeRecord extends HexAxialRecord {
  readonly s: number;
}

export class Hex implements HexCubeRecord {
  readonly q: number;
  readonly r: number;

  constructor(q: number, r: number) {
    this.q = q;
    this.r = r;
  }

  get s(): number {
    return -this.q - this.r;
  }
}

export interface TriangleRecord {
  readonly a: number;
  readonly b: number;
  readonly c: number;
}

export class Triangle implements TriangleRecord {
  readonly a: number;
  readonly b: number;
  readonly c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
