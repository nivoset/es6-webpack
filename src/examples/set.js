// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s);
console.log(`size of s? ${s.size}`);
console.log(`s has "Hello" in it? ${s.has("hello") ? 'Yes' : 'no'}`);

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m);
console.log(`m.get(s) (the Set above)? ${m.get(s)}`);

// Weak Maps
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined
console.log(wm);

// Weak Sets
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
var ws = new WeakSet();
ws.add({ data: 42 });
console.log(ws);
// Because the added object has no other references, it will not be held in the set