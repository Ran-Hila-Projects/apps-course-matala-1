let duck = null;

document.addEventListener("DOMContentLoaded", () => {
  const duckForm = document.getElementById("duckInfoForm");
  const createDuckBtn = document.getElementById("createDuckButton");
  const actionBtns = document.getElementById("actionButtons");
  const showBtn = document.getElementById("showButton");
  const quackBtn = document.getElementById("quackButton");
  const outputDiv = document.getElementById("output");

  // Event listener for form submission
  duckForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check if duck has already been created
    if (duck) {
      alert("Duck has already been created.");
      createDuckBtn.classList.add("disabled");
      return;
    }

    // Reading values from the form
    const name = document.getElementById("name").value;
    const color = document.getElementById("color").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const imageInput = document.querySelector('input[type="file"]');
    const imageFile = imageInput.files[0];

    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;

        // Create Duck object
        duck = new Duck(name, color, age, weight, imageDataUrl);

        // Disable the create duck btn and add "disabled" class
        createDuckBtn.disabled = true;
        createDuckBtn.classList.add("disabled");

        // Display the Show and Quack btns
        actionBtns.classList.remove("hide");

        // Clear previous output
        outputDiv.innerHTML = "";
      };
      reader.readAsDataURL(imageFile);
    } else {
      alert("Please upload an image of your duck.");
    }
  });

  // Event listener for Show btn
  showBtn.addEventListener("click", () => {
    if (duck) {
      duck.show(outputDiv); // Call show method with output container
    }
  });

  // Event listener for Quack btn
  quackBtn.addEventListener("click", () => {
    if (duck) {
      duck.quack(outputDiv); // Call quack method with output container
    }
  });
});
