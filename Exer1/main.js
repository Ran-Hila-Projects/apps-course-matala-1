document.addEventListener("DOMContentLoaded", () => {
  const COUNTERINPUT = document.getElementById("counterInput");

  let counter;

  document.getElementById("startButton").addEventListener("click", () => {
    let inputValue = parseInt(COUNTERINPUT.value, 10);
    if (!isNaN(inputValue)) {
      counter = new Counter(inputValue);
      COUNTERINPUT.value = inputValue;
      alert(`Counter object has been created with value = ${inputValue}`);
    } else {
      alert("Please Enter Valid Input");
    }
  });

  document.getElementById("incrementButton").addEventListener("click", () => {
    counter.increment();
    COUNTERINPUT.value = counter.value;
  });

  document.getElementById("goButton").addEventListener("click", () => {
    console.log(counter);
    let output = document.getElementById("output");
    let numberOut = "";
    counter.go().forEach((number) => {
      numberOut += number + " - ";
    });
    output.textContent = `Numbers: ${numberOut.slice(0, -3)}`;
  });
});
