class Counter {
  /**
   * Creates a Counter (initialize to 0).
   */
  constructor() {
    this.value = 0;
  }

  /**
   * Initializes the counter to a specific value.
   * @param {number} value - The value to set the counter to.
   */
  initialize(value) {
    this.value = value;
  }

  /**
   * Increments the counter by 1.
   */
  increment() {
    this.value += 1;
  }

  /**
   * Generates an array of numbers from 0 to the current counter value.
   * @returns {number[]} An array containing numbers from 0 up to the counter's value.
   */
  go() {
    let numArr = [];
    for (let i = 0; i <= this.value; i++) {
      numArr.push(i);
    }
    return numArr;
  }
}
