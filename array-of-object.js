const products = [
    { name: 'lpatop', price: 200000, brand: 'lenovo' },
    { name: 'watch', price: 999, brand: 'rolex' },
    { name: 'mobile', price: 10000, brand: 'oppo' },
    { name: 'table', price: 4000, brand: 'RFL' }

];

const brand = products.map(product => product.brand)
console.log(brand);
const prices = products.map(productPrice => productPrice.price)
console.log(prices);

// forEach====

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.brand))