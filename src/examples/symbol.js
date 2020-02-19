var key = Symbol("key");
var newKey = Symbol("key");
const c = {
  [key]: "Key Symbol Entry"
}

console.log(c);
console.log(`c.key = ${c.key}`);
console.log(`c[newKey] = ${c[newKey]}`);
