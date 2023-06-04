// Con la introducción de `let` y `const` en ES6, se agregó el alcance de bloque. El alcance de bloque permite que las variables sean accesibles solo dentro del bloque en el que se declaran, ya sea un bloque de función, un bloque condicional (como `if` o `for`), o cualquier otro bloque delimitado por llaves `{}`.

// Aquí tienes una explicación más detallada de `let` y `const`:

// 1. `let`: `let` se utiliza para declarar variables con alcance de bloque. Esto significa que una variable declarada con `let` solo es accesible dentro del bloque donde se declara y cualquier bloque anidado dentro de él. Fuera de ese bloque, la variable no es visible y genera un error si se intenta acceder a ella. Además, a diferencia de las variables declaradas con `var`, las variables declaradas con `let` pueden ser reasignadas dentro del mismo alcance de bloque.

//    Ejemplo:

   function example() {
     if (true) {
       let x = 10;
       console.log(x); // 10
     }
     console.log(x); // Error: x is not defined
   }


// 2. `const`: `const` también se utiliza para declarar variables con alcance de bloque, pero a diferencia de `let`, una vez que se asigna un valor a una variable con `const`, no se puede reasignar. Las variables declaradas con `const` son de solo lectura y no pueden cambiar su valor después de la asignación inicial. Esto las hace útiles para declarar constantes o valores que no deben cambiar.

//    Ejemplo:

   function example() {
     if (true) {
       const y = 20;
       console.log(y); // 20
       y = 30; // Error: Assignment to constant variable
     }
   }


// En resumen, `let` y `const` introducen variables con alcance de bloque en JavaScript. Esto ayuda a evitar problemas de reasignación no deseada y facilita el control y la legibilidad del código al limitar el alcance de las variables a los bloques específicos donde se necesitan.