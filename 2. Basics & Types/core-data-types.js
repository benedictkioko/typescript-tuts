//  Numbers, Strings & Booleans
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 3.8;
var printResult = true;
var resultPhrase = "The result is: ";
add(number1, number2, printResult, resultPhrase);
