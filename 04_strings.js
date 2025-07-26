const name = "hello"
const repoCount = 15

// console.log(name+repoCount+"bolo");  yeh tarika likhne ka thoda sa ooutdated hai 
// latest hai(backticks).  isse string interpolation mein help hoti hain
console.log(`hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')  //ways to declare String with objects
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); //results  {} (obj empty lag rha par hain nahi)

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5)  //last value not includes
console.log(newString);

const anotherString = gameName.slice(-8,4)  //
console.log(anotherString);

const newString1 = "  satyendra  "
console.log(newString1.trim());  //removes white spaces

const url ="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '_'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));













