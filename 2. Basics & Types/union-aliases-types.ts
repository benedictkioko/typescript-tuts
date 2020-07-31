// storing union types in our aliases
type optional = number | string;
type conversion = "as-number" | "as-text";

function combine(n1: optional, n2: optional, resultConversion: conversion) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

const combinedAges = combine(30, 34, "as-number");

console.log(combinedAges);

const combinedStringAges = combine("30", "34", "as-number");

console.log(combinedStringAges);

const combinedNames = combine("Max", "wel", "as-text");

console.log(combinedNames);
