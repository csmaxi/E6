// Con la asignación por desestructuración, puedes crear variables individuales y asignarles valores extraídos de una estructura de datos, como un objeto o una matriz, en una sola línea de código.

// Primero, hablemos de la desestructuración de objetos. Aquí tienes un ejemplo básico:

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;

console.log(name); // Imprime: John
console.log(age); // Imprime: 30
console.log(city); // Imprime: New York


// En este caso, tenemos un objeto llamado `person` con tres propiedades: `name`, `age` y `city`. Usando la sintaxis de desestructuración, creamos tres variables (`name`, `age` y `city`) y las asignamos con los valores correspondientes extraídos del objeto `person`. Como resultado, podemos acceder a esos valores individualmente.

// También puedes asignar valores predeterminados a las variables en caso de que la propiedad correspondiente no exista en el objeto:


const { name, age, city, country = 'USA' } = person;

console.log(country); // Imprime: USA


// En este ejemplo, si el objeto `person` no tuviera la propiedad `country`, la variable `country` tomaría el valor predeterminado `'USA'`.

// La desestructuración también puede ser útil al trabajar con funciones que devuelven objetos. Puedes desestructurar el objeto devuelto para acceder directamente a las propiedades que necesitas:


function getUser() {
  return {
    username: 'john_doe',
    email: 'john@example.com',
    age: 30
  };
}

const { username, email } = getUser();

console.log(username); // Imprime: john_doe
console.log(email); // Imprime: john@example.com


// Además de la desestructuración de objetos, también puedes desestructurar matrices:


const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Imprime: 1
console.log(second); // Imprime: 2
console.log(rest); // Imprime: [3, 4, 5]


// Aquí, creamos dos variables (`first` y `second`) y las asignamos con los primeros dos elementos de la matriz `numbers`. Luego, utilizamos el operador de propagación (`...`) para crear una nueva matriz (`rest`) con el resto de los elementos de `numbers`.

