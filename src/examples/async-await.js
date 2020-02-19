// await calls cannot happen in the base file, they need to be encapsulated by a async function

async function exampleAsyncFunction() {
    console.log(`Started ...`)

    let promise = new Promise(res => setTimeout(res, 1000, "Resolved Value!"));

    let result = await promise; // wait until the promise resolves (*)
    console.log(`And now i am finished with my result of: ${result}`);
}

exampleAsyncFunction();


async function exampleAsyncFunctionExcpetion() {
    console.log(`Started Exception ...`)

    try {
        let promise = new Promise((res, rej) => setTimeout(rej, 5000, "Rejected Promise!"));

        let result = await promise; // wait until the promise resolves (*)
        console.log(`I never get here to get the ${result}`);
    } catch (e) {
        console.error('await exceptions and failures need to have a try/catch block for exceptions', e);
    }
}

setTimeout(exampleAsyncFunctionExcpetion, 2000);


export default "String Exported";

