import {people} from '../people/people.js';


const containsEmployee = (nameToCheck) => ({name}) => name === nameToCheck;

//using defaulting that is built in
const worksFor = (companyToCheck = "Chase") => ({company}) => company === companyToCheck;

//mapped and displayed
console.log(`List of Names, using mapping: ${people
                                            .map(person => person.getName())
                                            .map(name => name)}`);

//but this is the same using destructuring, but only works because variables are public
console.log(`List On names: Destructured:  ${people.map(({name}) => name)}`);

console.log(`give me Ben `, people.find(containsEmployee("Ben")));
console.log(`Is someone in the array named "Ben"? ${people.some(containsEmployee("Ben"))}`);
console.log(`Does Everyone work for Chase? ${people.every(worksFor())}`);


//Flat
var arr1 = [1, 2, [3, 4]];
console.log(`Flat() ${JSON.stringify(arr1.flat())}`);

var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(`Flat() ${JSON.stringify(arr2.flat())} `);

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(`Flat(2) ${JSON.stringify(arr3.flat(2))}`);

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(`Flat(Infinity) ${JSON.stringify(arr4.flat(Infinity))}`);