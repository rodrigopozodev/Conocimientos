// Explicit Type Casting

const string = "42";
const integer = parseInt(string);
console.log(integer); // 42
console.log(typeof integer); // "number"

const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
console.log(float); // 3.14
console.log(typeof float); // "number"

const binary = "1010";
const decimal = parseInt(binary, 2);
console.log(decimal); // 10
console.log(typeof decimal); // "number"

// Implicit Type Casting

const sum = "5" + 3; 
console.log(sum); // "53"
// esto lo que hace es pasar el 3 a string y concatenarlo con "5"

const sumWithBoolean = "3" + true;
console.log(sumWithBoolean); // "3true"
// Aquí, el booleano true se convierte en la cadena "true" y se concatena con "3"

const sumWithNumber = 2 + true;
console.log(sumWithNumber); // 3
// Aquí, el booleano true se convierte en 1 y se suma a 2, resultando en 3

const stringValue = "10";
const numberValue = 10;
const booleanValue = true;
console.log("----------------------");
console.log(stringValue + stringValue); // "1010"
console.log(stringValue + numberValue); // "1010"
console.log(stringValue + booleanValue); // "10true"
console.log(numberValue + stringValue); // "1010"
console.log(numberValue + numberValue); // 20
console.log(numberValue + booleanValue); // 11
console.log(booleanValue + stringValue); // "true10"
console.log(booleanValue + numberValue); // 11
console.log(booleanValue + booleanValue); // 2

// Con Strings Concatena
// Sin strings Suma