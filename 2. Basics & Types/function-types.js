// types that describe a function regarding parameters and the return values
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
printResult(add(5, 13));
var combinedValues;
combinedValues = add;
console.log(combinedValues(6, 9));
