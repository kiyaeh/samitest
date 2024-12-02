// Importing the `add` function
const {add,sub }= require('./math'); // './' indicates the local file
// const sub = require('./math'); // './' indicates the local file

const result = add(3, 5);
console.log(`The result is: ${result}`); // Output: The result is: 8
const results = sub(8, 5);
console.log(`The result is: ${results}`); 