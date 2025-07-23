// DataType kis tarah se memory mein store aur access karte hai us basis pe 2 TYpes ke DatTypes hain

/* 1.Primitive
                i) String
                ii)Number
                iii)Boolean
                iv)null
                v)undefined
                vi)Symbol
                vii)BigInt
*/

/*  2.Non-primitive(reference)
                         
               i)Array
               ii)objects
               iii)Functions
*/

const score =100;
const scoreValue =100.1;

const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123')
const anotherId = Symbol('123')
//note--Symbol ka kaam hi yahi hai agar value samebhi raheygatab bhi id aur anotherId same nahi hoga
console.log(id===anotherId);

const bigNumber =158525425852582455562n;

const heros = ["shaktiman","naagraj","doga"]
/*
 {
    name: "satya",   //curly braces ke andar likha ho use objects bolte hain DataTypes alaga alag ho sakte hai.
     age= 55,
 }
     */

//objects kisi variable ke andar  bhin store hho sakta hai
let myObj = {
    name: "satya",   //curly braces ke andar likha ho use objects bolte hain DataTypes alaga alag ho sakte hai.
     age: 55,
}

   const myFunction= function(){   //fun( function(){}) kisi bhi variable ke andar bhi declare kar sakte hai.
    console.log("hi");
    
   }

   // DataType pata karne ke liye
    console.log(typeof myFunction);//iska DataType function object bolte hain ---read ECMA typeof
    