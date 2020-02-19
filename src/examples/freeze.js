
import { listOfPeople } from '../people/people.js';

//Object.freeze will lock objects
const ARRAY_OF_NAMES = Object.freeze(listOfPeople);

try {
    ARRAY_OF_NAMES[0] = 'Changed My Name';
} catch (e) {
    console.log("Failed to assign name into frozen object/array");
}

export default ARRAY_OF_NAMES;