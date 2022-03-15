const names = ['rafsan', 'morshad'];

// push() meyhod======
console.log('array length using push()::', names.push('sazzad'));/* array length using push():: 3 */
console.log('array lengt using length():', names.length);/* array lengt using length(): 3 */

console.log(names);/* [ 'rafsan', 'morshad', 'sazzad' ] */

// pop() method=========
console.log(names.pop());
console.log(names);


// unshift=====
const animnals = ['lion', 'elephant'];
console.log(animnals.unshift('tiger'));
console.log('animals array using unshift::', animnals);

// shift method====

const numbers = [33, 77, 88];
/* console.log(numbers.shift());
console.log(numbers) */

const number = [11, 55, 99]
/* const currentNumbers = [...number]
console.log('current numbers::', currentNumbers)

const newNumber = number;
number.push(20000)
console.log('new numbers:: ', newNumber)
console.log('number:', number)
 */

const currentNumbers = [...number, 565656]
console.log(currentNumbers)
console.log(number)