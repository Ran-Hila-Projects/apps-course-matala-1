/**
 * The Point class represents a point on a Cartesian coordinate system.
 * The x and y values can be positive or negative.
 */
class Point {
  /**
   * Creates a Point with specified x and y coordinates.
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Returns the point's coordinates in the format (x, y).
   * @returns {string} - A string representation of the point's coordinates.
   */
  Show() {
    return `(${this.x},${this.y})`;
  }

  /**
   * Compares this point with another point to determine if they are equal.
   * @param {Point} p - The point to compare with.
   * @returns {boolean} - Returns true if both x and y coordinates are equal, false otherwise.
   */
  Equals(p) {
    return this.x === p.x && this.y === p.y;
  }
}
