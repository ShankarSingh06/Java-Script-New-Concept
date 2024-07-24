//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(typeof id)
//console.log(typeof anotherId)
//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
//console.log(heros)
let myObj = {
    name: "hitesh",
    age: 22,
}
//console.log(myObj)

const myFunction = function(){
    console.log("Hello world");
}

myFunction();
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3