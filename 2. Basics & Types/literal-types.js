function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 34, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "34", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Max", "wel", "as-text");
console.log(combinedNames);
