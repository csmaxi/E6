// La sintaxis básica de los Template Literals utiliza comillas invertidas (```) en lugar de las comillas simples ('') o comillas dobles ("") tradicionales para delimitar la cadena de texto. Veamos un ejemplo sencillo:


const name = 'John';
const age = 30;

const message = `Mi nombre es ${name} y tengo ${age} años.`;

console.log(message); // Imprime: Mi nombre es John y tengo 30 años.


// En este ejemplo, utilizamos un Template Literal para crear la cadena de texto en la variable `message`. La interpolación de variables se realiza utilizando la sintaxis `${variable}` dentro del Template Literal. En tiempo de ejecución, la expresión `${name}` es reemplazada por el valor de la variable `name`, y `${age}` es reemplazada por el valor de `age`. Esto nos permite incluir de manera más sencilla y legible las variables dentro de una cadena de texto.

// Además de la interpolación de variables, los Template Literals también nos permiten realizar operaciones más complejas dentro de las expresiones. Por ejemplo, podemos realizar cálculos y utilizar funciones:


const a = 10;
const b = 5;

const result = `El resultado de la suma de ${a} y ${b} es ${a + b}.`;

console.log(result); // Imprime: El resultado de la suma de 10 y 5 es 15.


// Aquí, la expresión `${a + b}` calcula la suma de las variables `a` y `b` dentro del Template Literal.

// Otra característica útil de los Template Literals es la capacidad de formatear cadenas de texto en varias líneas sin necesidad de utilizar caracteres de escape o concatenación:


const multiline = `
  Esta es una cadena de texto
  que abarca varias líneas.
  Permite mantener la estructura y el formato de manera más legible.
`;

console.log(multiline);
// Imprime:
//   Esta es una cadena de texto
//   que abarca varias líneas.
//   Permite mantener la estructura y el formato de manera más legible.


// En resumen, los Template Literals nos permiten crear cadenas de texto más legibles y con interpolación de variables de una manera sencilla utilizando comillas invertidas (```). Esto hace que el código sea más conciso y más fácil de leer, especialmente cuando se trata de combinar variables y expresiones dentro de cadenas de texto.