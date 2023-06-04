// Los módulos en ECMAScript 6 (ES6) son una característica que permite organizar y reutilizar el código en diferentes archivos. Esto es especialmente útil al trabajar en proyectos grandes con múltiples componentes de React, ya que nos permite dividir el código en módulos más pequeños y mantener una estructura de proyecto más limpia.

// La sintaxis de los módulos en ES6 se basa en dos conceptos principales: la exportación (`export`) y la importación (`import`).

// La exportación se utiliza para exponer elementos (funciones, variables, clases, etc.) desde un módulo para que puedan ser utilizados en otros archivos. Hay varias formas de exportar elementos:

// - Exportación con nombre: 


// math.js
export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;


// En este ejemplo, hemos exportado dos funciones, `sum` y `subtract`, utilizando la palabra clave `export`. Ahora, estas funciones pueden ser importadas y utilizadas en otros archivos.

// - Exportación por defecto:


// utils.js
export default function multiply(a, b) {
  return a * b;
}


// En este caso, hemos exportado la función `multiply` utilizando la palabra clave `export default`. Esto permite que la función sea importada como el valor predeterminado del módulo en el que se encuentra.

// La importación se utiliza para traer elementos de otros archivos o módulos y utilizarlos en el archivo actual. La sintaxis de importación puede variar dependiendo de cómo se exportan los elementos.

// - Importación con nombre:


// app.js
import { sum, subtract } from './math.js';

console.log(sum(2, 3)); // Imprime: 5
console.log(subtract(5, 2)); // Imprime: 3


// En este ejemplo, estamos importando las funciones `sum` y `subtract` desde el módulo `math.js`. Utilizamos la sintaxis `{ sum, subtract }` para importar específicamente esos elementos.

// - Importación por defecto:


// app.js
import multiply from './utils.js';

console.log(multiply(2, 3)); // Imprime: 6


// Aquí, estamos importando la función `multiply` como el valor predeterminado del módulo `utils.js`. Al utilizar la importación por defecto, no es necesario utilizar llaves `{}`.

// Es importante tener en cuenta que los módulos ES6 siguen el modelo de importación/exportación asíncrona. Esto significa que las importaciones se resuelven y ejecutan en tiempo de ejecución, lo que permite importar módulos dinámicamente y mejora la carga inicial de la aplicación.

// Además, los módulos ES6 también admiten la importación y exportación de elementos específicos de un módulo utilizando la palabra clave `as`. Esto nos permite asignar nombres diferentes a los elementos importados o exportados, lo que puede ser útil para evitar conflictos de nombres.

// En resumen, los módulos en ECMAScript 6 (ES6) permiten organizar y reutilizar el código en diferentes archivos. La exportación (export) se utiliza para exponer elementos desde un módulo, mientras que la importación (import) se utiliza para traer elementos de otros módulos y utilizarlos en el archivo actual. Los módulos ES6 son especialmente útiles al trabajar con múltiples componentes de React, ya que nos permiten dividir el código en módulos más pequeños y mantener una estructura de proyecto más limpia.