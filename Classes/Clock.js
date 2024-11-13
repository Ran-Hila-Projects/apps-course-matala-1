class Clock {
  /**
   * Creates a Clock instance.
   * @param {number} hours - The hours (0-23).
   * @param {number} minutes - The minutes (0-59).
   * @param {number} seconds - The seconds (0-59).
   * @param {string} country - The name of the country.
   */
  constructor(hours, minutes, seconds, country) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.country = country;
  }

  /**
   * Converts the time to seconds.
   * @returns {number} The total seconds.
   */
  convertToSeconds() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  }

  /**
   * Returns the time in hh:mm:ss format with leading zeros.
   * @returns {string} The time formatted as hh:mm:ss.
   */
  show() {
    const hoursStr = String(this.hours).padStart(2, "0");
    const minutesStr = String(this.minutes).padStart(2, "0");
    const secondsStr = String(this.seconds).padStart(2, "0");
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  }
}
