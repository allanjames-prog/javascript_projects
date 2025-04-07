//create the variables
/*let result;
let hashes = '!';
let space = ' ';
let n = 10;
let j = 0;
let inverted = true;

//print the spaces + the hashes for each row
if (inverted) {
  for (let i = n; i >= 0; i--) {
    result = space.repeat(j) + hashes.repeat(2 * i + 1);
    console.log(result);
    j++;
  }
} else {
  j = n - 1;
  for (let i = 0; i < n ; i++) {
    result = space.repeat(j) + hashes.repeat(2 * i + 1);
    console.log(result);
    j--;
  }
} */



//Modified code for pyramid printer
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }
  
  let result = "";
  
  for (const row of rows) {
    result = result + "\n" + row;
  }
  
  console.log(result);
