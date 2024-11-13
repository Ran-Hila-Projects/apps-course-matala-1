class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  Show() {
    console.log(`(${this.x},${this.y})`);
  }

  Equals(p) {
    return this.x === p.x && this.y === p.y;
  }
}
