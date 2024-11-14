let duck = null;

document.addEventListener("DOMContentLoaded", () => {
  const duckForm = document.getElementById("duckInfoForm");
  const showBtn = document.getElementById("showButton");
  const quackBtn = document.getElementById("quackButton");

  // Event listener for form submission
  duckForm.addEventListener("submit", handleDuckFormSubmit);

  // Event listener for Show button
  showBtn.addEventListener("click", handleShowButtonClick);

  // Event listener for Quack button
  quackBtn.addEventListener("click", handleQuackButtonClick);
});

/////////////////////// Functions //////////////////////////
////////////////////////////////////////////////////////////

// Handles the duck form submission, creates a Duck object, and displays buttons if successful.
const handleDuckFormSubmit = (event) => {
  event.preventDefault();

  // Check if duck has already been created
  if (duck) {
    alert("Duck has already been created.");
    document.getElementById("createDuckButton").classList.add("disabled");
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

      // Disable the create duck button and add "disabled" class
      const createDuckBtn = document.getElementById("createDuckButton");
      createDuckBtn.disabled = true;
      createDuckBtn.classList.add("disabled");

      // Display the Show and Quack buttons
      document.getElementById("actionButtons").classList.remove("hide");

      // Clear previous output
      document.getElementById("output").innerHTML = "";
    };
    reader.readAsDataURL(imageFile);
  } else {
    alert("Please upload an image of your duck.");
  }
};

// Handles the Show button click, calls the Duck's show method to display details.
const handleShowButtonClick = () => {
  if (duck) {
    duck.show(document.getElementById("output"));
  }
};

//Handles the Quack button click, calls the Duck's quack method to display quacks.
const handleQuackButtonClick = () => {
  if (duck) {
    duck.quack(document.getElementById("output"));
  }
};
