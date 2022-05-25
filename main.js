//Write a function called add7 that takes one number and returns that number + 7.

const add7 = (num) => num + 7;

console.log(add7(4));

//Write a function called multiply that takes 2 numbers and returns their product.

const multiply = (a, b) => a * b;

console.log(multiply(7, 7));

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalizeFirstLetter(str) {

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalized
}
const result = capitalizeFirstLetter("mariko")
console.log(result)