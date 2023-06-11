/// JavaScript Let

/// Cannot be Redeclared

let x = "john doe";
// let x = 2; cannot redeclare variable

/// With var you can:

var y = "john doe";
var y = 0;

/// Block Scope

let z = 1;

/// Redeclaring Variables

var a = 1;
console.log(a);

var a = 2;
console.log(a);

console.log(a);

/// Let Hoisting

carName = "tesla";
var carName;
