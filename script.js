const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      currentInput += value;
      display.value = currentInput;
    } else if (button.id === "equals") {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else if (button.id === "clear") {
      currentInput = "";
      display.value = "";
    } else if (button.id === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }
  });
});
