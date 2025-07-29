// console.log(3>1);
// console.log(2>=1);
// console.log(3<1);
// console.log(3==1);
// console.log(3!=1);

//console.log("2">1);
//console.log("02">1);  // for better results we need to only compare same datatypes yeh JS me kar Sakte hain par typestrict mein nahi

//************Avoid these types of code ******************************************************** */

/*console.log(null>0);  //results false
console.log(null==0);  //results false
console.log(null>=0);   // results true, comparisons convert null to a number, treating it as 0.

//null > 0 → 0 > 0 → false
//This is different from null == 0, which is also false because == does not convert null to 0 in this case.

 console.log(undefined==0);  // F
 console.log(undefined<0);   //F
 console.log(undefined>=0);    //F
 console.log(undefined>0);   //F
*/

//************************************************************************************************ */

// ==================Strict check (===) ===============================================================

// strict check values ke saath saath datatypes ko bhi check karta hai

console.log("2"===1);
console.log("02"===1);
