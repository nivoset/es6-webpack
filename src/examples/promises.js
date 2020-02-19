const delayedResult = (result, delay = 5000, reject = false) => 
    new Promise((res, rej) => setTimeout(reject ? rej : res, delay, result));

const logResults = (title) => (...results) => {
    console.log(`${title}: `,  ...results);
    return results;
};

console.log("Promises! I Promise!")

delayedResult("Bob", 5000).then(logResults("Basics"));

//Exceptions
delayedResult("Exception", 5000, true)
    .then(logResults("NotCalled"), logResults("Exception"))
    .then(logResults("Continuation"))
    .finally(logResults("Always"));

delayedResult("Exception2", 5000, true)
    .catch(logResults("Exception2"))
    .then(logResults("Continuation2"))
    .finally(logResults("Always2"));

//Logs an exception since it wasn't caught
delayedResult("Always", 10000, true)
    .finally(logResults("Always"))

const promisesList = [
    delayedResult("First Entry", 500),
    delayedResult("Second Entry", 1000),
    delayedResult("Third Entry", 1500),
    delayedResult("Fourth Entry", 2000),
    delayedResult("Fifth Entry", 2500),
    delayedResult("Sixth Entry", 3000)
];

const promisesListException = [
    delayedResult("First Entry", 500),
    delayedResult("Second Entry", 1000),
    delayedResult("Third Entry", 1500, true),
    delayedResult("Fourth Entry", 2000),
    delayedResult("Fifth Entry", 2500),
    delayedResult("Sixth Entry", 3000)
];

Promise.all(promisesList).then(logResults("Promise all"));
Promise.race(promisesListException).then(logResults("Promise race"));

//gives you info on if it worked or failed on each
Promise.allSettled(promisesListException).then(logResults("Promise allSettled"));
