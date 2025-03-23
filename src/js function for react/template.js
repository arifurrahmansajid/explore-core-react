const fnames = "getTemplate";

const lnames= "template";

console.log(`i am MD file ${fnames} and ${lnames}`); // i am MD file getTemplate and template



const sum=(...rest)=> {
console.log(rest);
}

sum(1,2,3,4,5,6,7,8,9,10);// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


function sum1(a,b,c) {
    console.log(a+b+c); 


}

sum1(1,2,3); // 6


const products = [
    {name: 'laptop', price: 1000, stock: 20, brand: 'lenovo'},
    {name: 'desktop', price: 1500, stock: 10, brand: 'lenovo'},
    {name: 'phone', price: 500, stock: 15, brand: 'samsung'},
    {name: 'tablet', price: 700, stock: 5, brand: 'samsung'},
    {name: 'watch', price: 200, stock: 10, brand: 'apple'},
    {name: 'headphone', price: 100, stock: 20, brand: 'apple'}
];

const result = products.filter(product => product.price > 500);
console.log(result);


const result1=products.find(product => product.name=== 'phone');  


const persion ={
    name: 'john',
    age: 20,
    address: {
        city: 'new york',
        country: 'USA'
    }
}

const {name, age, address: {city, country}} = persion;      
console.log(country);
