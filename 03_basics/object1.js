// obj ko banane ke do tarike 1)constructer( Object.create)  2) literal
//singleton => constructor se banaogey tab singleton banega, matlab ek hi obj
// doosre se do se jyada obj ban jata hai

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "satyendra",
    "full name": "satyendra verma",
    [mySym]: "mykey1",  //symbol ki tarah use karne ke liye [] sq bracket laga hai nahi toh yeh string ban jayega
    age: 18,
    location: "Jaipur",
    email: "satyendra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)//old fashioned
console.log(JsUser["email"])  // string ki tarah rakha hai tabhi double quotes lagakar access kia hai obj ka  
console.log(JsUser["full name"])

console.log(JsUser.name);

console.log(JsUser[mySym])
console.log(typeof JsUser[mySym]);


// to update

JsUser.email = "dini@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "hero12@gmail.com"  //not printed this value bcz it was freezed earler as dini@gmail.com
console.log(JsUser)

//-------------------FUNCTIONS----------------------
// Js mein fun ko var ki tarah treat kar sakte hain

JsUser.greeting = function(){
    console.log("hello ji");
    
}

console.log(JsUser.greeting()); //don't forget to unfreeze user nahi toh greeting ko function nahi maaneyga
console.log(JsUser.greeting); // fun ka khali reference aay hai, not executed


    JsUser.greeting123 = function(){
        console.log(`helloJs user,${ this.name}`); //  same object ko reference  karne ke liye this ka use
        
    }
    console.log(JsUser.greeting123());

    // symbol wala dekh lena [] laga kar vs code par chaalane par obj bata rah hai hatane par tab symbol batata hai
