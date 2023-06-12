/*1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 
desde 1 hasta el número introducido por el usuario.*/

let numero = parseInt(prompt("Introduce un número: "));

for (let i = 1; i <= numero; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}



/*2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar 
en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar 
los números indicados por el usuario.*/

let numero1 = parseInt(prompt("Introduce el primer número: "));
let numero2 = parseInt(prompt("Introduce el segundo número: "));

for (let i = 1; i <= 50; i++) {
  if (i === numero1 || i === numero2) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
}

/*3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo 
en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la 
lista de números capturados en pantalla o en la consola.*/

let numeros = [];

while (true) {
  let numero = parseInt(prompt("Introduce un número (0 para terminar): "));
  if (numero === 0) {
    break;
  } else {
    numeros.push(numero);
  }
}

console.log("Números capturados:", numeros);


/*4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla 
la concatenación de todas las palabras capturadas.*/

let palabras = [];

while (true) {
  let palabra = prompt("Introduce una palabra (presiona enter para terminar): ");
  if (palabra === "") {
    break;
  } else {
    palabras.push(palabra);
  }
}

let concatenacion = palabras.join("");
console.log("Palabras capturadas:", concatenacion);

/*5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y 
seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar 
al usuario el mensaje “Ve a descansar” y terminar la captura de información.*/

while (true) {
    let diaSemana = prompt("Introduce un día de la semana: ");
  
    if (diaSemana.toLowerCase() === "domingo") {
      console.log("Ve a descansar");
      break;
    } else if (diaSemana.toLowerCase() === "lunes") {
      console.log("Es lunes, ánimo para la semana");
    } else if (diaSemana.toLowerCase() === "martes") {
      console.log("Es martes, ¡sigue adelante!");
    } else if (diaSemana.toLowerCase() === "miércoles") {
      console.log("Es miércoles, ya estamos a la mitad de la semana");
    } else if (diaSemana.toLowerCase() === "jueves") {
      console.log("Es jueves, el fin de semana está cerca");
    } else if (diaSemana.toLowerCase() === "viernes") {
      console.log("Es viernes, ¡a disfrutar del fin de semana!");
    } else if (diaSemana.toLowerCase() === "sábado") {
      console.log("Es sábado, aprovecha tu día libre");
    } else {
      console.log("Día no reconocido. Inténtalo de nuevo.");
    }
  }
  