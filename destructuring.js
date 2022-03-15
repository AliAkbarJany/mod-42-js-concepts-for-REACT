const employee = {
    name: 'Rafsan',
    profession: 'developer',
    languages: ['html', 'css', 'js'],
    specification:
    {
        height: 80,
        weight: 78,
        watch:
        {
            color: 'black',
            price: 3000,
        }
    }
}

const { name, profession } = employee;
console.log(name, profession);

/* const { height, weight, watch } = employee.specification;
console.log(height, weight, watch) */

const { color, price } = employee.specification.watch;
console.log(price, color);

const { languages } = employee;
console.log(languages)

console.log(employee.languages);