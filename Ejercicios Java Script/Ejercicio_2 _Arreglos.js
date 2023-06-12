/* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar 
en consola el resultado del array.*/

// Crear un array vacío
let numeros = [];

// Generar 10 números aleatorios y guardarlos en el array
for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
  numeros.push(numeroAleatorio);
}

// Mostrar en consola el resultado del array
console.log(numeros);


/*2. El usuario deberá ingresar un string con varias palabras separadas por coma en un 
popup y se deben convertir en un array. Mostrar en consola dicho resultado.*/

// Obtener el string del usuario mediante un popup
let userInput = prompt("Ingresa varias palabras separadas por coma:");

// Convertir el string en un array utilizando la función split()
let palabras = userInput.split(",");

// Mostrar en consola el resultado del array
console.log(palabras);





/*3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, 
muestra el número menor y el número mayor.*/ 

// Array inicial
let numeros1 = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor utilizando el método sort()
numeros1.sort((a, b) => a - b);

// Obtener el número menor (primer elemento del array) y el número mayor (último elemento del array)
let numeroMenor = numeros1[0];
let numeroMayor = numeros1[numeros1.length - 1];

// Mostrar los resultados en consola
console.log("Arreglo ordenado de menor a mayor:", numeros1);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
