//  Primitive
// 7 Types : String , Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n




// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naahraj", "doga"];
let myObj = {
    name: "kmk",
    age: 21,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);

console.log(typeof myFunction);

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3
