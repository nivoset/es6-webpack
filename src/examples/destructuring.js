import { people } from '../people/people.js';

/*
    looking at how this changes mapping
*/

//es5 version of this destructuring
function remappingES5(group, person) {
    var addedPerson = {}
    addedPerson[person.name] = {
        job: person.job,
        currentCompany: person.company
    };
    
    return Object.assign(
        group,
        addedPerson
    )
}
//ES6 version of this destructuring
const remappingES6 = (group, { name, job, company }) => 
    ({ ...group, [name]: { job, currentCompany: company } });


console.log("ES5", people
    .reduce(remappingES5,
        {}));

console.log("ES6", people
    .reduce(remappingES6,
        {}));
        

//Destructuring an array as well, nice for recursion
const [art, ben, bill, ...otherPeople] = people;
console.log(art);
console.log(ben);
console.log(bill);
console.log(otherPeople);