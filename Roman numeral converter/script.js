document.getElementById("convert-btn").addEventListener("click", convertNumber);

function convertNumber() {
  const numberInput = document.getElementById("number").value;
  const output = document.getElementById("output");
  const number = parseInt(numberInput);

  if (!numberInput) {
    output.textContent = "Please enter a valid number";
    return;
  }

  if (number < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (number >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = convertToRoman(number);
}

function convertToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}
