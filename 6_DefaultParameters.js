// Los Default Parameters o Parámetros predeterminados son una característica introducida en ECMAScript 6 (ES6) que nos permiten asignar valores predeterminados a los parámetros de una función. Esto facilita la escritura de código más robusto y legible al proporcionar valores por defecto cuando los argumentos no son pasados o son `undefined`.

// Veamos cómo funcionan los Default Parameters con algunos ejemplos.


function greet(name = 'John') {
  console.log(`Hola, ${name}!`);
}

greet(); // Imprime: Hola, John!
greet('Sarah'); // Imprime: Hola, Sarah!


// En este ejemplo, definimos una función `greet` que toma un parámetro `name`. Hemos asignado `'John'` como valor predeterminado para `name`. Esto significa que si no se proporciona ningún argumento al llamar a `greet`, el valor predeterminado `'John'` será utilizado. Sin embargo, si se proporciona un argumento, ese valor se utilizará en lugar del valor predeterminado.

// Los Default Parameters también pueden depender de otros parámetros de la función:


function createPerson(name, age = 30) {
  console.log(`La persona ${name} tiene ${age} años.`);
}

createPerson('John'); // Imprime: La persona John tiene 30 años.
createPerson('Sarah', 25); // Imprime: La persona Sarah tiene 25 años.


// En este caso, hemos asignado `30` como valor predeterminado para `age`. Si no se proporciona un segundo argumento al llamar a `createPerson`, se utilizará el valor predeterminado `30`. Sin embargo, si se proporciona un segundo argumento, ese valor se utilizará en lugar del valor predeterminado.

// Es importante tener en cuenta que los Default Parameters se evalúan en tiempo de ejecución. Esto significa que si el valor predeterminado es una expresión, se evaluará cada vez que se llame a la función.


function calculateTax(amount, taxRate = amount * 0.1) {
  console.log(`El impuesto sobre ${amount} al ${taxRate * 100}% es ${amount * taxRate}.`);
}

calculateTax(100); // Imprime: El impuesto sobre 100 al 10% es 10.
calculateTax(200, 0.15); // Imprime: El impuesto sobre 200 al 15% es 30.

// En este ejemplo, el segundo parámetro `taxRate` tiene un valor predeterminado calculado a partir del primer parámetro `amount`. Si no se proporciona un segundo argumento, se utilizará `amount * 0.1` como valor predeterminado. Si se proporciona un segundo argumento, ese valor se utilizará en lugar del valor predeterminado.

// En resumen, los Default Parameters nos permiten asignar valores predeterminados a los parámetros de una función. Esto es útil para proporcionar valores por defecto cuando los argumentos no son pasados o son `undefined`. Los Default Parameters nos ayudan a escribir código más robusto y legible al indicar claramente los valores esperados para los parámetros de una función.