// earlier we discussed object creation with literals
// here we want to proceed with obj with constructor

//const tinderUser = new Object() // singleton obj

//const tinderUser = {}    // non - singleton obj but both o/p is same as {}
//console.log(tinderUser);


const tinderUser = new Object()

tinderUser.id = "123asd"
tinderUser.name = "satya"
tinderUser.isLoggedIn = false

// suppose kisi doosre api ka bana rahey hain
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satya",
            lastname: "verma"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);   // agar lets say firstname? ke aagey ?mark laga hai toh value present hogi to print hogi nahi toh nahi hogi, this helpsto avoid if else line of code

//***** * to combine objects***********

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}

/*const obj3 = {obj1,obj2}  //problem hai obj ke andar obj aa gaya
console.log(obj3);

*/

/*
const obj3 = Object.assign({},obj1,obj2,obj4) //.assign(Target,source)  target empty liya hai taakki kisi ek obj ke andar hi saare na chale jaye
console.log(obj3);

*/
//=====spread way======================
const obj3 ={...obj1,...obj2,...obj4}
console.log(obj3);


// jab DataBase se value(yahan user hai) aati hai toh array of object mein aata hai


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
users[2].id
//console.log(tinderUser); 
console.log(Object.keys(tinderUser));//o/p value datatype array aayega
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //o/p with keys and value in a arr

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check in DB,whether the value present or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   // obj destructuring and named them only instructor

// console.log(courseInstructor);
console.log(instructor);

//       API +++++++++++++++++++++++

// yeyh obj hi hai par isse JSON bolte hain,iski keys aur values dono hi string hoti hain 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//  kayi baar API array ke formatt me miltein hain
[
    {},
    {},
    {}
]

