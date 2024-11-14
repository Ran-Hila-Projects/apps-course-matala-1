var clocks = []; // Array to hold Clock objects

document.addEventListener("DOMContentLoaded", () => {
  const clockForm = document.getElementById("clockForm");

  // Event listener for form submission
  clockForm.addEventListener("submit", handleFormSubmit);
});

/////////////////////// Functions //////////////////////////
////////////////////////////////////////////////////////////

// Handles form submission to create a new clock and display clocks if there are 5 entries.
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Reading values from the form
  const country = document.getElementById("country").value;
  const hours = parseInt(document.getElementById("hours").value);
  const minutes = parseInt(document.getElementById("minutes").value);
  const seconds = parseInt(document.getElementById("seconds").value);

  // Create a Clock object and add it to the array
  const clock = new Clock(hours, minutes, seconds, country);
  clocks.push(clock);

  // Clear the form fields
  event.target.reset();

  // Display clocks if there are 5 entries
  if (clocks.length === 5) {
    displayClocks();
  } else {
    alert(`added succesfully, only ${5 - clocks.length} is left.`);
  }
};

//Displays the list of clocks with country name, time, and time in seconds.
const displayClocks = () => {
  const clockList = document.getElementById("clockList");
  clockList.innerHTML = ""; // Clear previous content

  clocks.forEach((clock) => {
    const clockItem = document.createElement("div");
    clockItem.classList.add("clock-item");
    clockItem.innerHTML = `
      <p><strong>Country:</strong> ${clock.country}</p>
      <p><strong>Time:</strong> ${clock.show()}</p>
      <p><strong>Time in Seconds:</strong> ${clock.convertToSeconds()}</p>
    `;
    clockList.appendChild(clockItem);
  });
};
