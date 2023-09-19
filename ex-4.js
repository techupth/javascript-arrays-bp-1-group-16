let number = 0;

function setNumber(newNumber) {
  number = newNumber;
  return number;
}

// Start coding here

let results = [number, setNumber];

console.log(number);
let functionFromArray = results[1];
functionFromArray(10);
console.log(number);
