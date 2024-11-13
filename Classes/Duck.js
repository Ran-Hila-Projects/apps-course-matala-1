class Duck {
  /**
   * Creates a Duck.
   * @param {string} name - The name of the duck.
   * @param {string} color - The color of the duck.
   * @param {number} age - The age of the duck in years.
   * @param {number} weight - The weight of the duck in kilograms.
   * @param {string} imageUrl - The URL of the duck's image.
   */
  constructor(name, color, age, weight, imageUrl) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.imageUrl = imageUrl;
  }

  /**
   * Displays all the duck's details in the console and shows the image on the webpage.
   */
  show() {
    console.log(`Name: ${this.name}`);
    console.log(`Color: ${this.color}`);
    console.log(`Age: ${this.age} years`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Image: ${this.imageUrl}`);

    // Displaying the image in the browser
    const imgElement = document.createElement("img");
    imgElement.src = this.imageUrl;
    imgElement.alt = `Image of ${this.name}`;
    document.body.appendChild(imgElement);
  }

  /**
   * Prints "Quack" a number of times based on age and weight
   * and plays a quack sound 3 times.
   */
  quack() {
    const quackCount = Math.floor((this.age * this.weight) / 2);
    for (let i = 0; i < quackCount; i++) {
      console.log("Quack");
    }

    // Optional: play quack sound 3 times
    const audio = new Audio("quack-sound.mp3");
    audio.play();
    setTimeout(() => audio.play(), 500);
    setTimeout(() => audio.play(), 1000);
  }
}
