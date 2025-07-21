# String

Lo primero de todo es crear la variable , nombrarla y redactarla entre comillas.

```JS
let string1 = ""
```

Podemos usar los 3 tipos de comillas:

- Simples ''
- Dobles ""
- Invertidas ``

  - Estas sirven para concatenr strings

  > `¿Concatenar?` Significa que podemos sumar Strings

Aunque tenemos 3 tipos de comillas simpre escribe tu codigo con simples o dobles. Porque ambas son iguales y por tema de codigo limpio se usa solo uno de estos dos tipos. sin contar la excepcion de las invertidas que las puedes usar siempre para concatenar.

## Concatenación

Dentro de las comillas invertidas ``colocamos el simbolo de dolar $ y las llaves {} y le decimos que string ya nombrados queremos utilizar y a continuacion podemos usar otro srting o texto como si fuera un string normal.

```JS
let string1 = 'Hola, mundo';
let string2 = "JavaScript es genial";
let string3 = `${string1} feliz :)`;
```

Tambien tenemos otro forma de concatenar utilizadon el simbolo de sumar `+`. Hay que añadir un espacio por que esta concatenacion no crea espacios.

```JS
let string4 =  string1 + " " + string2;
```

## Metodos

- Te voy a mostrar algunos de los metedos mas conocidos.

- Tines que tener en cuenta que los strings empiezan en `0` es decir si tenemos `Hola` la `H` tiene como valor `0` y la `a` vale `3`.

los metodos se utilizan de la siguiente manera:

- Dentro de un `console.log` llamamos a la funcion por ejemplo `frase` y le añadimos un `.` y el nombre del metodo por ejemplo `length`

```JS
let frase = "JavaScript es un lenguaje de programación versátil";
console.log(frase.length); // Longitud de la cadena
```

### length

Este metodo se utiliza para saber la longitud del string.

### toLowerCase()

Para convertir el string a minusculas

### toUperCase()

Para convertir el string a mayusculas

### substring()

Se utiliza para mostrar unicamente un trozo del string.

En este caso:

```JS
let frase = "JavaScript es un lenguaje de programación versátil";
```

Si queremos mostrar solo `JavaScript` vemos que si empezamos desde 0 contamos 9 letras. Pues tenemos que sumar simpre una mas al numero final serian 10 y esta seria la sintaxis:

```JS
console.log(frase.substring(0, 10));
```
