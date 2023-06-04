// Las promesas, o `Promise` en JavaScript, son un mecanismo para trabajar con operaciones asíncronas de manera más clara y estructurada. Las promesas permiten manejar flujos de código asíncrono sin incurrir en anidamientos excesivos de callbacks, lo que se conoce como el "infierno de los callbacks" o "callback hell".

// Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y devuelve un valor resultante. Puede estar en uno de los siguientes estados:

// - Pendiente (pending): La promesa está en proceso y aún no se ha resuelto ni rechazado.
// - Cumplida (fulfilled): La promesa se resolvió exitosamente y se obtuvo un resultado.
// - Rechazada (rejected): La promesa no se pudo cumplir y se obtuvo un motivo de rechazo.

// La sintaxis básica para crear una promesa es la siguiente:


const myPromise = new Promise((resolve, reject) => {
  // Realizar operaciones asíncronas
  // Si la operación se completa con éxito, llamar a resolve con el resultado
  // Si la operación falla, llamar a reject con un motivo de rechazo
});


// Dentro del constructor de la promesa, realizamos las operaciones asíncronas necesarias. Si la operación se completa exitosamente, llamamos a la función `resolve` con el resultado deseado. Si la operación falla, llamamos a la función `reject` con un motivo de rechazo, como un error.

// A continuación, podemos encadenar métodos a la promesa utilizando los métodos `then` y `catch`. El método `then` se ejecuta cuando la promesa se resuelve exitosamente, y el método `catch` se ejecuta cuando la promesa es rechazada. Por ejemplo:


myPromise
  .then(result => {
    // Se ejecuta cuando la promesa se resuelve exitosamente
    console.log(result);
  })
  .catch(error => {
    // Se ejecuta cuando la promesa es rechazada
    console.error(error);
  });


// Dentro de la función `then`, podemos manejar el resultado obtenido de la promesa resuelta. Y dentro de la función `catch`, podemos manejar el motivo de rechazo en caso de que la promesa sea rechazada.

// Además de los métodos `then` y `catch`, las promesas también proporcionan otros métodos útiles, como `finally`, que se ejecuta sin importar si la promesa se resolvió o se rechazó, y `all` o `race` para trabajar con múltiples promesas.

// Por ejemplo, el método `all` permite esperar a que todas las promesas en un arreglo se resuelvan antes de ejecutar un bloque de código. Y el método `race` devuelve una promesa que se resuelve o se rechaza tan pronto como cualquier promesa del arreglo se resuelva o se rechace.

// En resumen, las promesas en JavaScript proporcionan una manera más clara y estructurada de trabajar con operaciones asíncronas, evitando el anidamiento excesivo de callbacks. Las promesas nos permiten manejar flujos de código asíncrono de forma más legible y controlada,

//  utilizando los métodos `then` y `catch` para manejar los resultados y los motivos de rechazo.