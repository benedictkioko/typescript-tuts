// types that describe a function regarding parameters and the return values
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result is: " + num);
}

printResult(add(5, 13));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(6, 9));
