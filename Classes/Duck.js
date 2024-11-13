class Duck {
  /**
   * Creates a Duck.
   * @param {string} name - The name of the duck.
   * @param {string} color - The color of the duck.
   * @param {number} age - The age of the duck in years.
   * @param {number} weight - The weight of the duck in kilograms.
   * @param {string} image - The URL of the duck's image.
   */
  constructor(name, color, age, weight, image) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.image = image;
  }

  /**
   * Displays all the duck's details in the specified container.
   * @param {HTMLElement} container - The container element to display the duck's details.
   */
  show(container) {
    container.innerHTML = ""; // Clear previous content

    const details = document.createElement("p");
    details.innerHTML = `
      <strong>Name:</strong> ${this.name}<br>
      <strong>Color:</strong> ${this.color}<br>
      <strong>Age:</strong> ${this.age} years<br>
      <strong>Weight:</strong> ${this.weight} kg<br>
    `;

    const imgElement = document.createElement("img");
    imgElement.src = this.image;
    imgElement.alt = `Image of ${this.name}`;
    imgElement.width = 200;

    // Append the details and image to the container
    container.appendChild(details);
    container.appendChild(imgElement);
  }

  /**
   * Displays "Quack" a calculated number of times in the specified container
   * and plays a quack sound 3 times.
   * @param {HTMLElement} container - The container element to display the quacks.
   */
  quack(container) {
    container.innerHTML = ""; // Clear previous content

    const quackCount = Math.floor((this.age * this.weight) / 2);
    const quackText = "Quack ".repeat(quackCount);

    const quackParagraph = document.createElement("p");
    quackParagraph.textContent = quackText;
    container.appendChild(quackParagraph);

    // Play the quack sound 3 times
    const audio = new Audio("../assets/sounds/quack.mp3");
    audio.play();
    setTimeout(() => audio.play(), 4000);
    setTimeout(() => audio.play(), 8000);
  }
}
