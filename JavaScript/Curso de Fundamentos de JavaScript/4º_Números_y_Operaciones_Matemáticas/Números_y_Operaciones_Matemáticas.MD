# Number

Tenemos 3 tipos de numeros

- Enteros y Decimales
  > Se `escirben diferente` pero su tipo de dato sigue siendo `number`
- Notación científica
- Infinitos

```JS
// 1. Tipo Entero y Decimal
const entero = 42; // Entero
const decimal = 3.14; // Decimal
console.log(typeof entero, typeof decimal); // "number"

// 2. Notación Científica
const cientifico = 5e3; // 5 * 10^3

// 3. Infinitos y NaN(Not a Number)
const infinito = Infinity;
const noEsUNNumero = NaN;
```

## Operaciones Aritmeticas

```JS

// Operaciones Aritméticas

// 1. Suma, Resta, Multiplicación y División
const suma = 10 + 5; // 15
const resta = 10 - 5; // 5
const multiplicacion = 10 * 5; // 50
const division = 10 / 5; // 2

// 2. Módulo y Exponenciación
const modulo = 15 % 4; // 3 (resto de la división)
const exponenciacion = 2 ** 3; // 8

// Precisión
const resultado = 0.1 + 0.2; // 0.30000000000000004
console.log(resultado);
console.log(resultado.toFixed(2)); // 0.30
console.log(resultado === 0.3); // false
// El igual === comprueba tanto el valor como el tipo, como el valor de la suma por lo que no es igual a 0.3

//A la hora de trabajar con números decimales, es importante tener en cuenta la precisión de los cálculos. Por ejemplo, al sumar 0.1 y 0.2, el resultado no es exactamente 0.3 debido a la forma en que se representan estos números internamente.

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16); // 4
const valorAbsoluto = Math.abs(-5); // 5
const aleatorio = Math.random(); // Número aleatorio entre 0 y 1

console.log(raizCuadrada)
console.log(valorAbsoluto);
console.log(aleatorio);
```

## Operadores

### typeof

Para saber el tido de dato

## Metodos

### toFixed()

🔹 ¿Qué es toFixed()?

toFixed() es un método del tipo Number en JavaScript que:

- Redondea un número a un número específico de decimales.
- Devuelve una cadena (string), no un número.
