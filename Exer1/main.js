document.addEventListener("DOMContentLoaded", () => {
  const COUNTER_INPUT = document.getElementById("counterInput");

  let counter;

  document.getElementById("startButton").addEventListener("click", () => {
    let inputValue = parseInt(COUNTER_INPUT.value, 10);
    if (!isNaN(inputValue)) {
      counter = new Counter(inputValue);
      COUNTER_INPUT.value = inputValue;
      alert(`Counter object has been created with value = ${inputValue}`);
    } else {
      alert("Please Enter Valid Input");
    }
  });

  document.getElementById("incrementButton").addEventListener("click", () => {
    counter.increment();
    COUNTER_INPUT.value = counter.value;
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
