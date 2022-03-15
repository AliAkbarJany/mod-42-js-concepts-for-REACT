const numbers = [67, 20, 90, 55];


const newNumbers = [numbers];
// console.log(newNumbers)



const currentNumbers = [...numbers, 3333333333]
// console.log(currentNumbers);


numbers.push(100)
numbers.push(2222);


/* const name = 'hero';
const age = 34;
const person = { name, age }
console.log(person) */

/* /* const adventurer = {
    name: 'alice',
    cat: {
        name: 'lucy'
    }
};

const ratName = adventurer?.rat?.name;
console.log(ratName)/* undefined */

/* let person = null;
console.log(person ? person : 'person is null') */;/* person is null */

/* const obj = { a: 1 }
console.log(Object.keys(obj).length === 0); */

function test(num1, num2) {
    const number = [num1, num2];
    return number;
}

/* const [first, second] = test(20, 4000);
console.log(first, second); */ /* output== 20 4000 */

/* const first = 20;
const second = 44;
const result = test(20, 44)
console.log(result); */ /*output== [ 20, 44 ] */


console.log(test(20, 44))


const [a, b, u] = [34, 67, 11, 90]
console.log(a, b, u);


