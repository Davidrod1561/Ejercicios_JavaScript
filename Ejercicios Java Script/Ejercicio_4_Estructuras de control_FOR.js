/*1. Crea un programa que imprima en consola los números impares del 1 al 50.*/

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

  
/*2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, 
mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta 
el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.*/

const num = parseInt(prompt("Introduce un número:"));

const pokemons = [
  { number: 1, name: "Bulbasaur" },
  { number: 2, name: "Ivysaur" },
  { number: 3, name: "Venusaur" },
  // Resto de los objetos de los Pokémon...
];

for (let i = 1; i <= num; i++) {
  if (i % 5 === 0) {
    const pokemon = pokemons.find((p) => p.number === i);
    if (pokemon) {
      console.log(pokemon.name);
    }
  }
}

/*3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola 
solo los elementos que son tipo número.*/

const arr = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    console.log(arr[i]);
  }
}
