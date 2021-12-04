
//old style for in
const object = { a: 1, b: 2, c: 3, d: 4, e: 4 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
// "d: 4"
// "e: 5"
// geen iterating
