/*

Operadores Lógicos

*/

const a = 10;
const b = 20;
const c = "10";

a == b && a === c; // false, porque a no es igual b y a no es estrictamente igual a c porque son de tipos diferentes
a != b || a === c; // true
!(a === c); //true
