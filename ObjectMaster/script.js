const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// finding Pokemon that start with the letter B

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log("B-name Pokemon: ", bListPkmn)

// Returning the pokemons id's

const pkmnIds = pokémon.map( p => p.id )
console.log("Pokemon ID's: ", pkmnIds)

// an array of pokemon whose ID is evenly divisible by 3

const divByThree = pokémon.filter( p => p.id % 3 === 0)
console.log("Divided by 3: ", divByThree)

// an array of pokemon that are "fire" type

const firePokemon = pokémon.filter(p => p.types == "fire")
console.log("FIRE TYPE POKEMON: ", firePokemon)

// an array of pokemon objects that have more than 1 type

const multiTypePokemon = pokémon.filter(p => p.types.length > 1)
console.log("Pokemon with more than 1 type: ", multiTypePokemon)

// an array with JUST the names of the Pokemon

const pokemonNames = pokémon.map(p => p.name)
console.log("All pokemon names: ", pokemonNames)

// an array with the names of the pokemon whose ID is greater than 99

const pokemonIdAbove99 = pokémon.filter(p => p.id > 99).map(p => p.name)
console.log("POKEMON NAMES WHOSE ID's ARE ABOVE 99: ", pokemonIdAbove99)

// an array with just the names of the pokemon whose ONLY type is poison

const poisonPokemon = pokémon.filter(p => p.types == "poison").map(p => p.name)
console.log("POISON POKEMON: ", poisonPokemon)

// NOTE - I AM CONFUSED HOW THIS WAY WORKS, HOW IS IT NOT RETURNING THE POKEMON
// WHO HAVE MULTIPLE VALUES AND ONE OF THEM IS POISON???

// below is an alternate way to do it, but I want to make sense of the one above.
// const poisonPokemon = pokémon.filter(p => p.types.length === 1 && p.types[0] === 'poison').map(p => p.name)


// an array containing the FIRST type of pokemon whose SECOND TYPE is "flying"

const secondTypeFlying = pokémon.filter(p => p.types[1] == "flying").map(p => p.types[0])
console.log("Second Type is Flying: ", secondTypeFlying)

// a count of the number of pokemon that are just "normal" type

const normalPokemon = pokémon.filter(p => (p.types.length === 1 && p.types == "normal")).length
console.log("Pokemon whose only type is normal: ", normalPokemon)

// honestly this last one was a straight up guess where I added
// .length and was surprised it works! Now I know for future reference


