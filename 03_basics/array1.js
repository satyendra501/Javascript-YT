//const myArr =[0,1,2,3,4,5,true,"satya"] //JS ki array resizable,mix datatypes ka hota hai
// JS array copy operations create shallow copies
                 
 //  Shallow copy => a shallow copy of an object is a copy whose properties share the same references(jobhi change karogey original array mein change hoga)
 //  Deep copy =>  a Deep copy of an object is a copy whose properties don't share the same references( no change original arr)

const myArr1 = new Array(0,1,2,3,4,5)
//console.log(myArr1[0]);

// Array methods
/*
myArr1.push(6)
myArr1.push(7)
myArr1.pop()  //last value pop
myArr1.unshift(8)  // adding array starting first index
myArr1.shift()  //  removing arrays starting first index value
console.log(myArr1);

console.log(myArr1.includes(9));
console.log(myArr1.includes(3));


const newArr = myArr1.join()  // join method convert array to seperated commas string

console.log(myArr1);
console.log(newArr);
*/

// slice, splice

console.log("A",myArr1);

const arr = myArr1.slice(1,3)

console.log(arr);
console.log("B",myArr1);

const arr1 = myArr1.splice(1,3)
console.log("C",myArr1);
console.log(arr1);