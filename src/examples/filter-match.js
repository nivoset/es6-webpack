import { people } from '../people/people.js';


//Filter
var filteredPeople = [];
for (var i = 0; i < people.length; i++) {
    if (people[i].job === "Developer") {
        filteredPeople.push(people[i]);
    }
}

//all function
var worksAtChase = true;
for (var i = 0; i < filteredPeople.length; i++) {
    worksAtChase = worksAtChase && filteredPeople[i].company === "Chase";
}
console.log("ES5 all work for Chase ", worksAtChase);


//any function
var namedSirisha = false;
for (var i = 0; i < people.length; i++) {
    namedSirisha = namedSirisha || people[i].name === "Sirisha";
}
console.log("ES5 Someone named: Sirisha ", namedSirisha);



//in es6
const desiredCompany = (desiredCompany) => ({company}) =>  company === desiredCompany;
const desiredName = (desiredName) => ({name}) =>  name === desiredName;
const desiredJob = (desiredJob) => ({job}) =>  job === desiredJob;


console.log("ES6 all work for Chase ", people
        .filter(desiredJob("Developer"))
        .every(desiredCompany("Chase")) );

console.log("ES6 Someone named: Sirisha ", people
        .some(desiredName("Sirisha")) );