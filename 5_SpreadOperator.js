// Veamos cómo funciona el Spread Operator con ejemplos prácticos.

// Descomponer una matriz:


const nums = [1, 2, 3];

console.log(...nums); // Imprime: 1 2 3


// En este ejemplo, utilizamos el operador de propagación (`...`) antes de la matriz `numbers`. Esto "descompone" la matriz en sus elementos individuales. Al imprimir `...numbers`, obtenemos los valores de la matriz separados por espacios.

// El operador de propagación también puede ser utilizado para concatenar o combinar matrices:

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [...numbers1, ...numbers2];

console.log(combined); // Imprime: [1, 2, 3, 4, 5, 6]


// Aquí, utilizamos el operador de propagación (`...`) para descomponer las matrices `numbers1` y `numbers2`, y luego los combinamos en una nueva matriz llamada `combined`. Esto nos permite crear una matriz que contiene todos los elementos de ambas matrices.

// El operador de propagación también es útil al pasar argumentos a funciones:


function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // Imprime: 6


// En este ejemplo, tenemos una función `sum` que toma tres argumentos y devuelve su suma. Utilizamos el operador de propagación (`...`) para pasar los elementos de la matriz `numbers` como argumentos individuales a la función `sum`. Esto es equivalente a llamar `sum(1, 2, 3)`.

// Además de las matrices, el operador de propagación también se puede utilizar con objetos:


const person = {
  name: 'John',
  age: 30
};

const updatedPerson = {
  ...person,
  age: 31
};

console.log(updatedPerson);
// Imprime:
// {
//   name: 'John',
//   age: 31
// }


// En este ejemplo, utilizamos el operador de propagación (`...`) para descomponer el objeto `person` en sus propiedades individuales. Luego, creamos un nuevo objeto `updatedPerson` que hereda todas las propiedades de `person`, pero con una propiedad `age` actualizada.

// En resumen, el operador de propagación (`...`) nos permite descomponer objetos o matrices en partes individuales. Esto resulta útil al pasar argumentos a funciones, combinar o concatenar estructuras de datos, o actualizar propiedades de objetos. El Spread Operator es una herramienta poderosa que facilita el trabajo con estructuras de datos en JavaScript.