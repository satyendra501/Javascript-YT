const score = 200
console.log(score);


const balance = new Number(100);  //explicitly creating a Number object to covert in number type
console.log(balance);

console.log(balance.toString().length); // Convert to string and get length
console.log(balance.toFixed(2)); // Convert to string with 2 decimal places

const otherNumber = 123.456;
console.log(otherNumber.toPrecision(4)); // Convert to string with 4 significant digits

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // Convert to string with locale formatting
console.log(hundreds.toLocaleString('en-IN')); // India locale formatting

//*******************************Maths (lib)*************************************** *

console.log(Math);
console.log(Math.abs(-4)); 
console.log(Math.round(4.7)); 
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(1, 2, 3, -1, 0)); 
console.log(Math.max(1, 2, 3, -1, 0));

console.log(Math.random()); 
console.log(Math.random() * 10); // Random number between 0 and 10
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10
 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // bus kasrat hain yeh


 







