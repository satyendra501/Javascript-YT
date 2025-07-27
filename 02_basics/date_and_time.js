let myDate = new Date()
// console.log(myDate.toString());
//  console.log(myDate.toDateString);  //day+date
// console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());     //Date+time
//console.log(myDate.toLocaleDateString()); // Date

//console.log(typeof myDate);

// let myCreatedDate = new Date(2026,0,15)   // in js month starts from 0
// console.log(myCreatedDate.toDateString());  

// let myDate1 = new Date(2056,0,23,5,8)    // we can pass time also
// console.log(myDate1.toLocaleString());

let myDate2 = new Date()

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
// to compare date
console.log(myDate2.getTime());
console.log(Math.floor(Date.now()/1000)); // millisec to sec

console.log(myDate2.getDate());
console.log(myDate2.getDay());
console.log((myDate2.getMonth())+1);

myDate2.toLocaleDateString('default',{ weekday: "long"})



