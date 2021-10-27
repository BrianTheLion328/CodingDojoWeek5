// Object.freeze()

// To make Objects unmutable, use Object.freeze(your object here)
// now your object cannot be altered even with methods like .push or .pop

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

console.log("groceryList ORIGINAL: ", groceryList)

// SPREAD OPERATOR

// To add property/value pairs to a frozen object, simply use
// the spread operator to make a copy of the object, then add the
// key:value pairs after to the new cloned object. Like so...

// Here we are making a copy of the frozen groceryList object,
// then adding "thyme" to the list.

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log("groceryList WITH Thyme added: ", needThyme)

// .CONCAT METHOD

// You can also use the .concat method to do this. Like so...

const needThymeConcat = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

// .concat(what you want to add) simply combines the two together.

console.log("groceryList CONCAT: ", needThymeConcat)

// .SLICE() METHOD

// Example of the slice method to change values inside an object

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

console.log("SLICE METHOD EXAMPLE: ", gotTheThyme)

// Here we are saying return to me the first items/objects in the grocery list that
// includes the Thyme we added previously, but dont include the thyme object itself
// just yet. Then, the second half says now find the object at the 5th index, which
// is the Thyme item, and set that haveIngredient value from false to true.
// This will return a completely new object with Thyme included and set to true.

// Finally, we can use .slice() to edit out an item/object, like so...

  const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

// Here we are cutting out the celery from the gotTheThyme list of items.
// this says "give me the first 2 items in the list, skip the 3rd (celery), and
// then from the 3rd index on (just after celery) include the rest of the items".
// This will give us everything before celery, slip celery itself, then everything after.

console.log("EDITING OUT CELERY USING SLICE: ", notNeceCelery)


// .SORT() METHOD

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

// .sort() will order things in some way, either ascending alphabetical order, or by
// order of numbers, Be careful though, as it doesn't always sort as you'd expect,
// especially with numbers!

const sortedItems = [...items].sort();

console.log("SORTED ITEMS: ", sortedItems)

// .MAP() METHOD

// the .map() method takes an array, and returns a new array with each item
// being changed in some way that you manipulate in the callback function, like so...

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const mappedGroceryList = groceries.map( item => `<li>${item}</li>` );

// This will take a list of items and return an array of
// strings resembling html "list items"...

console.log("Mapped Grocery List: ", mappedGroceryList)

// .map() method example with numbers

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
// this will cube each number by multiplying it by the power of 3

console.log("MAPPED NUMBERS EXAMPLE: ", cubes)

// returns [1, 8, 27, 64, 125]

// .FILTER() METHOD

// this method digs through an array and returns only the items/values
// that make the requirement equal true, like so...

// const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );

console.log("FILTERED THROUGH VALUES ARRAY TO GET ONLY EVEN #'s: ", evens)

// NOTE: the .filter() method will NOT modify the original array (values)

// Second .filter() example with strings this time...

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

// this will filter out the items that have an "o" in their names and return only those

console.log("FILTERED TO GET ONLY WORDS WITH AN O: ", oFoods)

// we can even CHAIN methods together, like .filter() AND .map()

// const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

// this will filter the even numbers out, and then cube the ones that are left over
// output should be [1, 27, 125]

