const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
/*
marvel_heros.push(dc_heros);
console.log(marvel_heros);   // yahan array ke andar array aa gaya

//to access inside arrays values of dc_heros

console.log(marvel_heros[3][0]);
console.log(marvel_heros[3][1]);

//OR********************************************* 

marvel_heros.concat(dc_heros)
console.log(marvel_heros);  // concat()/push() koi use kar same hai
//****************************************************************** 
*/

const all_heros = marvel_heros.concat(dc_heros)  // concat() return karta hai new array jismein array ke andar array nahi hota 
console.log(all_heros);  //proper merged arrays

//*Another way(spread) to remove problem of array inside array 

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

//------------------------------------------------------------------------------------------------------------------------------

const another_arr = [1,2,3,[4,5,6],7,[7,8,9]]
const real_another_arr =another_arr.flat(Infinity)  //flat(kitne no. of array kholne hain) 
console.log(real_another_arr);
//-----------------------------------------------------------------------------------------------------------------------------
//=============================================================================================================================

console.log(Array.isArray("humhain"));
console.log(Array.from("humhain"));  // ek ek string character khol ke naya array bana dega
//intresting
console.log(Array.from({name:"humhain"})); // obj dene par empty array dega nahi convert kar payega,confused either make arr keys or values
//==================================================================================================================================

//______________________________________________________________________________________________________________________________

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score1,score3));// teeno ko ek array banayega


/*  null > 0 → 0 > 0 → false
This is different from null == 0, which is also false because == does not convert null to 0 in this case.


*/