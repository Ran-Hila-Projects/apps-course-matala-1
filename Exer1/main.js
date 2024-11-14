var counter; // Stores the Counter object
var counterInput; // Stores the Counter Input object

document.addEventListener("DOMContentLoaded", () => {
  counterInput = document.getElementById("counterInput");

  // Initialize the counter with the input value on 'start' button click
  document.getElementById("startButton").addEventListener("click", start);

  // Increment the counter and update the input field
  document
    .getElementById("incrementButton")
    .addEventListener("click", incrementCounter);

  // Display counter range on 'go' button click
  document
    .getElementById("goButton")
    .addEventListener("click", displayCounterRange);
});

/////////////////////// Functions //////////////////////////
////////////////////////////////////////////////////////////

const start = () => {
  let inputValue = parseInt(counterInput.value, 10);
  // Checks if the value is a valid number
  if (!isNaN(inputValue)) {
    counter = new Counter(inputValue); // Create Counter with input value
    counterInput.value = inputValue; // Update input field
    document.querySelector(".container-part-2").classList.remove("hide");
    document.querySelector("#startButton").classList.add("hide");
  } else {
    alert("Please Enter Valid Input"); // Show error for invalid input
  }
};

// Function to increment the counter and update the input field
const incrementCounter = () => {
  counter.increment(); // Call increment method
  counterInput.value = counter.value; // Update input field with new counter value
};

// Function to display the counter range in the output div
const displayCounterRange = () => {
  let output = document.getElementById("output");

  // Check if the 'output' div exists, if not, create it and append to body
  if (!output) {
    output = document.createElement("div");
    output.id = "output";
    document.querySelector(".main").appendChild(output);
  }

  // Generate and display formatted range
  let numberOut = "";
  counter.go().forEach((number) => {
    numberOut += number + " , ";
  });
  output.textContent = `Numbers: ${numberOut.slice(0, -3)}`; // Display formatted range
};
