const accountId = 665386;
let accountEmail ="satyendra333@gmail.com";
var accountPassword ="46596565";
accountCity= "hyderabad";
let accountState;    // we can undefine values,it results undefined 

// accountId = 5; Not allowed to change const

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

console.log(accountId);
