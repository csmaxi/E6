// La sintaxis `async/await` es una característica introducida en ES6 que facilita y hace más legible el manejo de promesas asincrónicas en JavaScript y, por ende, en proyectos de React.

// `async/await` es una forma de escribir código asíncrono de manera más similar a un código síncrono, lo que mejora la legibilidad y facilita el manejo de errores. Esta sintaxis se basa en dos palabras clave: `async` y `await`.

// La palabra clave `async` se utiliza para declarar una función como asíncrona. Esto significa que la función puede contener expresiones `await` y, por lo tanto, se ejecutará de manera asíncrona. Dentro de una función declarada como `async`, podemos utilizar la palabra clave `await` para esperar que una promesa se resuelva antes de continuar la ejecución.

// Aquí tienes un ejemplo de cómo utilizar `async/await` en una función asíncrona:


async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}


// En este ejemplo, `fetchData` es una función declarada como `async`. Dentro de la función, utilizamos la palabra clave `await` para esperar la resolución de una promesa, en este caso, la función `fetch` que devuelve una promesa de respuesta HTTP. Al utilizar `await`, el programa espera a que la promesa se resuelva antes de continuar la ejecución.

// La ventaja de `async/await` es que nos permite escribir código asíncrono de manera secuencial, similar a un código síncrono. Esto hace que el flujo del código sea más fácil de entender y leer, ya que no se necesita anidar múltiples callbacks o encadenar promesas con el método `then`.

// Además, podemos utilizar bloques `try/catch` para manejar errores en las operaciones asincrónicas. En el ejemplo anterior, utilizamos un bloque `try/catch` para capturar cualquier error que se produzca durante la obtención y procesamiento de los datos.

// Es importante destacar que el uso de `async/await` requiere que la función que contiene el `await` esté declarada como `async`. Además, `await` solo puede usarse dentro de una función asíncrona.

// En resumen, la sintaxis `async/await` en JavaScript proporciona una forma más legible y sencilla de trabajar con promesas asincrónicas en proyectos de React. Permite escribir código asíncrono de manera secuencial y utilizar bloques `try/catch` para manejar errores de manera más eficiente.