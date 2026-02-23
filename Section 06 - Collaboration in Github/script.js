// alert("This is an alert!");
// File edited to cover section 11 of the course

export function convertCelsiusToKelvin(celsius) {
  return parseFloat(celsius) + 273.15;
}

export function getEmoji(celsius) {
  if (celsius <= 0) return "🧊";
  if (celsius <= 20) return "☁️";
  if (celsius <= 35) return "😎";
  return "🔥";
}

// Checks for tests
if (typeof document !== "undefined") {
  const inputEl = document.getElementById("celsiusInput");
  const rezultatEl = document.getElementById("rezultat");

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      let userInput = inputEl.value;
      if (userInput === "" || isNaN(userInput)) {
        alert("Please input a valid integer!");
        inputEl.value = "";
        return;
      }
      rezultatEl.innerText = `>>> Temperature is ${convertCelsiusToKelvin(userInput)}K ${getEmoji(userInput)} <<<`;
    }
  });
}
