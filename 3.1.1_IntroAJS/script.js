console.log('Hello World!');

// Variables: Es un espacio dentro de la computadora que nos permite guardar datos.
/* Receta mágica para crear una variable:
    Especificador de variable + nombre de la variable = valor
*/

/*
    Especificadores de variable: var, let, const
*/

// String (cadenas): Nos permite representar texto
// Para crearlas podemos utilizar comillas simples (''), comillas dobles ("") o backticks (``).


let nombre = "Juan"; // Declarar una variable llamada nombre y le asigno el valos Juan
console.log(nombre); // Imprimir el valor de la variable nombre

nombre = "Luis"; // Reasignando el valor de la variable nombre
console.log(nombre); 

//const = constante

const Gravedad = 9.8; // Declarar una constante llamada Gravedad y le asigno el valor 9.8
const PI = 3.1416; // Declarar una constante llamada PI y le asigno el valor 3.1416

console.log(Gravedad);
console.log(PI);

// Number (números): Nos permite representar números
let edad = 25; // Declarar una variable llamada edad y le asigno el valor 25
let estatura = 1.75; // Declarar una variable llamada estatura y le asigno el valor 1.75
console.log(estatura);
let gradosCelsius = -10; // Declarar una variable llamada gradosCelsius y le asigno el valor -10
console.log(gradosCelsius);

// Concatenación: Nos permite unir dos o más cadenas de texto
let mensajeFinal = nombre + ' tiene ' + edad + ' años.'
console.log(mensajeFinal);

let EsMAyorDeEdad = true; // Declarar una variable llamada EsMayorDeEdad y le asigno el valor true
let tienesTerceraEdad = false; // Declarar una variable llamada tienesTerceraEdad y le asigno el valor false

alert(mensajeFinal);
let nombreMascota = prompt('Escribe el nombre de tu mascota');
alert('El nombre de tu mascota es: ' + nombreMascota);