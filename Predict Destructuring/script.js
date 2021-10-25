const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output

console.log("randonCar: ", randomCar)
console.log("otherRandomCar: ", otherRandomCar)

// My guess: The output will be Tesla first, then Mercedes second.

// I was correct :)

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log("name: ", name);
console.log("otherName: ", otherName);

// My guess: The output will be Elon first, and an error second?
// update - name printed nothing, while otherName printed Elon. but why?

// I see now because it could print if it wasnt renamed to otherName, so
// now name has no value because we renamed name itself to otherName.

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log("password: ", password);
console.log("hashedPassword: ", hashedPassword);

// My guess: The output will print 12345, then an error because password
// is not a property of person

// I was correct :)

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log("first guess: ", first == second);
console.log("second guess: ", first == third);

// My guesst: The output will print false and true, because 2 != 5,
// but 2 does equal 2.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log("key: ", key);
console.log("secondKey: ",secondKey);
console.log("secondKey[0]: ",secondKey[0]);
console.log("willThisWork: ",willThisWork);

// My guess: The output will print
// 'value', then the entire array [1, 5, 1, 8, 3, 3],
// then just 1, then finally 5

// I was correct :)
