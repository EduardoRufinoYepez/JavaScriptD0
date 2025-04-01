// Operador de asignación -> = -> Nos permite asignar un valor a una variable.

let valorA = 5;
let valorB = 4;

valorA = 9;

// Operador de concatenación -> + -> Nos permite crear una cadena a partir de 2 o más expresiones donde al menos una es una cadena.
// Una expresión puede ser: una variable, una cadena, una constante, una operación matemática.

// Operadores matemáticos
console.log(valorA + " + " + valorB + " = " + (valorA + valorB));  // Operador suma
console.log(valorA + " - " + valorB + " = " + (valorA - valorB));  // Operador resta
console.log(valorA + " * " + valorB + " = " + (valorA * valorB));  // Operador multiplicación
console.log(valorA + " / " + valorB + " = " + (valorA / valorB));  // Operador división

// Operación módulo -> % -> Nos permite calcular el residuo de una división.
console.log("5 % 1 = " + (5 % 1));
console.log("5 % 2 = " + (5 % 2));
console.log("5 % 3 = " + (5 % 3));
console.log("5 % 4 = " + (5 % 4));
console.log("5 % 5 = " + (5 % 5));

//operadores combinados
let variable1 = 10;
console.log(variable1); //imprime 10
variable1 += 5;
console.log(variable1); //imprime 15
variable1 -= 7;
console.log(variable1); //imprime 8
variable1 *= 2;
console.log(variable1); //imprime 16

//Operador incremento
let variable2 = 0;
console.log(variable2); //imprime 0
variable2++; // variable += 1;
console.log(variable2); //imprime 0
variable2++; // variable += 1;
console.log(variable2); //imprime 0
variable2++; // variable += 1;

//Operador decremento
let variable3 = 5;
console.log(variable3); //imprime 0
variable3--; // variable -= 1;
console.log(variable3); //imprime 0
variable3--; // variable -= 1;
console.log(variable3); //imprime 0
variable3--; // variable -= 1;

//Operador de comparación
console.log("5 == 5 -> " + (5 == 5)); //true
console.log("5 == 4 -> " + (5 == 4)); //false
console.log("5 == '5' -> " + (5 == '5')); //true == revisa unicamente el valor
console.log("5 == '5' -> " + (5 === '5')); //true === revisa el valor y el tipo de dato

console.log(" 18 != 17 -> " + (18 != 17)); //true
console.log(" 18 != '18' -> " + (18 != '18')); //false.
console.log(" 18 !== '18' -> " + (18 !== '18')); //true

let variableMayor = 24;
let variableMenor = -1;
console.log(variableMayor + " > " + variableMenor + " -> " + (variableMayor > variableMenor));
console.log(variableMayor + " < " + variableMenor + " -> " + (variableMayor < variableMenor));

let variableIgual = 24;
console.log(variableMayor + " >= " + variableIgual + " -> " + (variableMayor >= variableIgual));
console.log(variableMayor + " <= " + variableIgual + " -> " + (variableMayor <= variableIgual));

// Operadores lógicos
// And ( y ) -> &&
/* 
    true  && true   -> true
    true  && false  -> false
    false && true   -> false
    false && false  -> false
*/

let edad = 24;
let traeINE = true;
console.log("edad: " + edad);
console.log("traeINE: " + traeINE);
console.log("edad >= 18 && traeINE == true -> " + (edad >= 18 && traeINE == true));

traeINE = false;
console.log("edad: " + edad);
console.log("traeINE: " + traeINE);
console.log("edad >= 18 && traeINE == true -> " + (edad >= 18 && traeINE == true));


// Or ( o ) -> || 
/*
    true  || true  -> true
    true  || false -> true
    false || true  -> true
    false || false -> false
*/
let especieMascota = "perro";
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> " + (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = "gato";
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> " + (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = "conejo";
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> " + (especieMascota == 'perro' || especieMascota == 'gato'));


// Not (negación) -> !
/*
    !true  -> false
    !false -> true
*/

console.log("!true -> " + !true);
console.log("!false -> " + !false);

edad = 35;
console.log("!(edad >= 18) -> " + (!(edad >= 18)));

// Tarea: Investigar la O exclusiva (XOR).
/*

*/