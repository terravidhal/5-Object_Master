const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//ex:
const bListPkmn = pokémon.filter((p) => p.name[0] === "B"); // p.name[0] => première lettre du mot name
//ex
const pkmnIds = pokémon.map(p => p.id);



//1-Un tableau d'objets Pokémon dont l'ID est divisible par 3 :
const evenlyDivisiblePkmns = pokémon.filter(p => p.id % 3 === 0);

//2-Un tableau d'objets Pokémon de type "feu":
const fireTypePkmns = pokémon.filter(p => p.types[0] === "fire");

//3-Un tableau d'objets Pokémon qui ont plus d'un type :
const multipleTypesPkmns = pokémon.filter(p => p.types.length > 1);

//4-Un tableau avec juste les noms des Pokémon :
const justNames = pokémon.map(p => p.name);

//5-Un tableau avec uniquement les noms des Pokémon avec un ID supérieur à 99 :
const highIDNames = pokémon.filter(p => p.id > 99).map(p => p.name);

//6-Un tableau avec uniquement les noms des Pokémon dont le seul type est poison :
const poisonPkmnNames = pokémon.filter(p => p.types.length === 1 && p.types[0] == "poison").map(p => p.name);

//7-Un tableau contenant uniquement le premier type de tous les Pokémon dont le deuxième type est "flying" :
const firstTypes = pokémon.filter(p => p.types[1] === "flying").map(p => p.types[0]);

//8-Un décompte du nombre de Pokémon de type « normal » :
const normalPkmnCount = pokémon.filter(p => p.types[0] === "normal").length;

//console.log(normalPkmnCount);
