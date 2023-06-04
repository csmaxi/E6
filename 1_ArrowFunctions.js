// Las Arrow Functions son una característica introducida en ECMAScript 6 (también conocido como ES6 o ES2015) que proporciona una sintaxis más concisa y resuelve el problema de la pérdida de contexto de `this` que puede ocurrir en las funciones regulares.


// Aquí tienes un ejemplo de una Arrow Function que suma dos números:


const sum = (a, b) => {
  return a + b;



// Esta función `sum` toma dos parámetros, `a` y `b`, y devuelve la suma de ambos. La sintaxis más concisa de las Arrow Functions permite omitir las llaves y la palabra clave `return` si la función tiene una única expresión, lo cual se conoce como una "expresión de retorno implícita". Por lo tanto, la función de suma podría ser escrita de manera aún más concisa de la siguiente manera:


const sum = (a, b) => a + b;


// Las Arrow Functions también son útiles cuando se trata de preservar el contexto de `this`. En las funciones regulares, el valor de `this` depende de cómo se llama la función, lo que puede llevar a confusión y a errores. Sin embargo, las Arrow Functions heredan automáticamente el contexto de `this` del ámbito en el que se definen. Esto significa que `this` en una Arrow Function se refiere al valor de `this` en el contexto circundante. Veamos un ejemplo:


const obj = {
  name: "John",
  sayHello: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

obj.sayHello(); // Imprime: Hello, John


// En este ejemplo, `obj` tiene un método `sayHello` que utiliza `setTimeout` para imprimir un saludo después de 1 segundo. La función pasada a `setTimeout` es una Arrow Function, y esto es importante porque permite que `this` se refiera al objeto `obj`. Si se hubiera utilizado una función regular en su lugar (`function() { ... }`), `this` se habría referido al objeto global (`window` en el navegador) en lugar de `obj`, lo cual no es lo que deseamos en este caso.

/